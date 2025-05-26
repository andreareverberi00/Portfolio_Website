import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import { MarkdownProject, getProjectBySlug } from './utils/markdownLoader'; // Import getProjectBySlug

// Mock react-router-dom hooks
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual, // Import and retain default exports
    useParams: vi.fn(),
    useNavigate: () => mockNavigate,
  };
});

// Mock markdownLoader
// This will mock the entire module
vi.mock('./utils/markdownLoader', () => ({
  getProjectBySlug: vi.fn(),
}));

// Mock ProjectGallery component as it's complex and not the focus here
vi.mock('./ProjectGallery', () => ({
  default: ({ projectName }) => <div data-testid="project-gallery-mock">{`Gallery for ${projectName}`}</div>,
}));


const mockProject: MarkdownProject = {
  slug: 'test-project',
  title: 'Test Project Title',
  date: '2023-01-01',
  description: 'Test project description.',
  image: '/assets/test-project.jpg',
  tags: ['React', 'Testing'],
  details: {
    engine: 'Test Engine',
    role: 'Test Role',
    duration: 'Test Duration',
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
  },
  content: 'This is the **markdown content** for the test project.',
};

const mockProjectWithDemoLink: MarkdownProject = {
    ...mockProject,
    slug: 'turbo-trash', // Special slug for demo link
    title: 'Turbo Trash', // Special title for demo link
};


describe('ProjectDetails', () => {
  beforeEach(() => {
    vi.resetAllMocks(); // Reset mocks before each test
  });

  const renderComponent = (projectIdParam?: string, projectData?: MarkdownProject | null) => {
    vi.mocked(require('react-router-dom').useParams).mockReturnValue({ projectId: projectIdParam || mockProject.slug });
    
    if (projectData === null) { // Explicitly null for "not found"
        vi.mocked(getProjectBySlug).mockReturnValue(undefined);
    } else { // Undefined projectData means use default mockProject, or the provided one
        vi.mocked(getProjectBySlug).mockReturnValue(projectData || mockProject);
    }

    return render(
      <MemoryRouter initialEntries={[`/project/${projectIdParam || mockProject.slug}`]}>
        <Routes>
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('should render project details when a valid project is found', () => {
    renderComponent();

    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    mockProject.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
    // ReactMarkdown renders content; check for a part of it
    expect(screen.getByText('markdown content', { exact: false })).toBeInTheDocument(); // Check for bolded part
    expect(screen.getByText(mockProject.details.engine)).toBeInTheDocument();
    expect(screen.getByText(mockProject.details.role)).toBeInTheDocument();
    expect(screen.getByText(mockProject.details.duration)).toBeInTheDocument();
    mockProject.details.responsibilities.forEach(resp => {
      expect(screen.getByText(resp)).toBeInTheDocument();
    });
    // Check if ProjectGallery is rendered (mocked version)
    expect(screen.getByTestId('project-gallery-mock')).toHaveTextContent(`Gallery for ${mockProject.title.replace(/\s+/g, '')}`);
  });

  it('should render "Project not found" message when project is not found', () => {
    renderComponent('non-existent-slug', null); // Pass null to indicate project not found
    
    expect(screen.getByText('Project not found')).toBeInTheDocument();
    // Check for back button in not found message
    const backButton = screen.getByRole('button', { name: /Back to Home/i });
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('should navigate back when "Back to Projects" button is clicked', () => {
    renderComponent();
    
    const backButton = screen.getByRole('button', { name: /Back to Projects/i });
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('should render "Play Demo" link for "Turbo Trash" project', () => {
    renderComponent('turbo-trash', mockProjectWithDemoLink);

    const playDemoLink = screen.getByRole('link', { name: /Play Demo/i });
    expect(playDemoLink).toBeInTheDocument();
    expect(playDemoLink).toHaveAttribute('href', expect.stringContaining('play.unity.com'));
  });

  it('should not render "Play Demo" link for other projects', () => {
    renderComponent(); // Uses default mockProject which is not "Turbo Trash"

    const playDemoLink = screen.queryByRole('link', { name: /Play Demo/i });
    expect(playDemoLink).not.toBeInTheDocument();
  });
  
  it('should pass correct projectName to ProjectGallery (spaces removed)', () => {
    renderComponent();
    expect(screen.getByTestId('project-gallery-mock')).toHaveTextContent(`Gallery for ${mockProject.title.replace(/\s+/g, '')}`);
  });

});
