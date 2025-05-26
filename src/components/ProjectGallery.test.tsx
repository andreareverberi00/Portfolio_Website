import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectGallery from './ProjectGallery';

// Updated mock data with 3 images for TestProjectOne
const mockProjectGalleryImages = {
  '/public/Assets/TestProjectOne/image1.jpg': { default: '/Assets/TestProjectOne/image1.jpg' },
  '/public/Assets/TestProjectOne/image2.png': { default: '/Assets/TestProjectOne/image2.png' },
  '/public/Assets/TestProjectOne/image3.webp': { default: '/Assets/TestProjectOne/image3.webp' }, // Added third image
  '/public/Assets/AnotherProject/imageA.webp': { default: '/Assets/AnotherProject/imageA.webp' },
};

// Keep the import.meta.glob mock strategy
Object.defineProperty(globalThis, 'import.meta', {
  value: {
    glob: (pattern, options) => {
      if (pattern.startsWith('/public/Assets/') && options?.eager === true) {
        return mockProjectGalleryImages;
      }
      console.warn(`[ProjectGallery.test.tsx] Unexpected import.meta.glob pattern: ${pattern}`);
      return {};
    },
  },
  configurable: true,
  writable: true,
});


describe('ProjectGallery', () => {
  const projectName = "TestProjectOne"; // Has 3 images now

  beforeEach(() => {
    // Ensure the mock is consistently applied for each test
    Object.defineProperty(globalThis, 'import.meta', {
        value: {
          glob: (pattern, options) => {
            if (pattern.startsWith('/public/Assets/') && options?.eager === true) {
              return mockProjectGalleryImages;
            }
            return {};
          },
        },
        configurable: true, writable: true,
      });
  });
  
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render gallery with correct images for the given project', () => {
    render(<ProjectGallery projectName={projectName} />);
    const images = screen.getAllByRole('img'); // Thumbnail images
    expect(images.length).toBe(3); 
    expect(screen.getByAltText('image1')).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    expect(screen.getByAltText('image2')).toHaveAttribute('src', '/Assets/TestProjectOne/image2.png');
    expect(screen.getByAltText('image3')).toHaveAttribute('src', '/Assets/TestProjectOne/image3.webp');
  });

  it('should render nothing if no images found for the project', () => {
    const { container } = render(<ProjectGallery projectName="NonExistentProject" />);
    expect(screen.queryByText('Gallery')).not.toBeInTheDocument();
    expect(container.firstChild).toBeNull();
  });

  it('should open modal with selected image when a thumbnail is clicked', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[0]); 
    const modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument();
    expect(modalImage).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
  });

  it('should close modal when the backdrop is clicked', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[0]); 
    let modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument();
    const backdrop = modalImage.closest('div[class*="fixed inset-0"]');
    if (backdrop) fireEvent.click(backdrop);
    expect(screen.queryByAltText('Selected')).not.toBeInTheDocument();
  });
  
  it('should use image filename (without extension) as alt text for thumbnails', () => {
    render(<ProjectGallery projectName={projectName} />);
    expect(screen.getByAltText('image1')).toBeInTheDocument();
    expect(screen.getByAltText('image2')).toBeInTheDocument();
    expect(screen.getByAltText('image3')).toBeInTheDocument();
  });

  // New tests for navigation features

  it('1. Initial State (Modal Closed): arrows should not be present', () => {
    render(<ProjectGallery projectName={projectName} />);
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
  });

  it('2. Modal Opened - First Image: only Next arrow visible', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[0]); // Click first image

    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();
  });

  it('3. Modal Opened - Middle Image: both arrows visible', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[1]); // Click second (middle) image

    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image2.png');
    expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();
  });

  it('4. Modal Opened - Last Image: only Previous arrow visible', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[2]); // Click third (last) image

    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image3.webp');
    expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
  });

  it('5. Navigation - Clicking "Next" Arrow sequence', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[0]); // Start at first image

    // Initially: Image 1, Prev: no, Next: yes
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    let nextArrow = screen.getByLabelText('Next image');
    expect(nextArrow).toBeInTheDocument();

    // Click Next -> Image 2
    fireEvent.click(nextArrow);
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image2.png');
    expect(screen.getByLabelText('Previous image')).toBeInTheDocument(); // Prev should appear
    nextArrow = screen.getByLabelText('Next image'); // Next still there
    expect(nextArrow).toBeInTheDocument();

    // Click Next -> Image 3
    fireEvent.click(nextArrow);
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image3.webp');
    expect(screen.getByLabelText('Previous image')).toBeInTheDocument(); // Prev still there
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument(); // Next should disappear
  });

  it('6. Navigation - Clicking "Previous" Arrow sequence', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[2]); // Start at last image (index 2)

    // Initially: Image 3, Prev: yes, Next: no
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image3.webp');
    let prevArrow = screen.getByLabelText('Previous image');
    expect(prevArrow).toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();

    // Click Previous -> Image 2
    fireEvent.click(prevArrow);
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image2.png');
    prevArrow = screen.getByLabelText('Previous image'); // Prev still there
    expect(prevArrow).toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument(); // Next should appear

    // Click Previous -> Image 1
    fireEvent.click(prevArrow);
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument(); // Prev should disappear
    expect(screen.getByLabelText('Next image')).toBeInTheDocument(); // Next still there
  });
  
  it('7. Modal Close Resets State and arrow visibility', () => {
    render(<ProjectGallery projectName={projectName} />);
    const thumbnails = screen.getAllByRole('img');
    
    // Open modal, go to middle image
    fireEvent.click(thumbnails[0]); // Image 1
    fireEvent.click(screen.getByLabelText('Next image')); // Image 2
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image2.png');
    expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();

    // Close modal
    const backdrop = screen.getByAltText('Selected').closest('div[class*="fixed inset-0"]');
    if (backdrop) fireEvent.click(backdrop);
    expect(screen.queryByAltText('Selected')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();

    // Re-open modal at first image
    fireEvent.click(thumbnails[0]);
    expect(screen.getByAltText('Selected')).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument(); // Only Next arrow
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();
  });
});
