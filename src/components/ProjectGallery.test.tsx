import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectGallery from './ProjectGallery';

// Mock for import.meta.glob used in ProjectGallery
// This mock will return a structure that simulates finding image files.
// The keys are paths (relative to /public), and values are objects with a `default` property holding the image URL.
const mockProjectGalleryImages = {
  '/public/Assets/TestProjectOne/image1.jpg': { default: '/Assets/TestProjectOne/image1.jpg' },
  '/public/Assets/TestProjectOne/image2.png': { default: '/Assets/TestProjectOne/image2.png' },
  '/public/Assets/AnotherProject/imageA.webp': { default: '/Assets/AnotherProject/imageA.webp' },
};

// Mock import.meta.glob specifically for ProjectGallery
// This direct mock of import.meta.glob is crucial.
Object.defineProperty(globalThis, 'import.meta', {
  value: {
    glob: (pattern, options) => {
      // Check if the glob is for /public/Assets/*/*.{png,jpg,jpeg,webp}
      // This is a simplified check; a more robust one might parse the glob pattern.
      if (pattern.startsWith('/public/Assets/') && options?.eager === true) {
        // Filter mockProjectGalleryImages based on the pattern if necessary,
        // but for this component, it filters by projectName prop later.
        // So, we can return all mock images, and the component's filter will do its job.
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
  const projectName = "TestProjectOne"; // Matches keys in mockProjectGalleryImages

  beforeEach(() => {
    // Reset or re-apply mocks if necessary. The global import.meta.glob mock should persist
    // unless modified by other tests. For safety, ensure it's set for this describe block.
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
    // Optional: Clean up global mocks if they interfere with other test files.
    // For now, assume it's managed or reset by a global test setup if needed.
    vi.restoreAllMocks(); // Cleans up Vitest spies/mocks, not necessarily global object properties.
  });

  it('should render gallery with correct images for the given project', () => {
    render(<ProjectGallery projectName={projectName} />);

    const images = screen.getAllByRole('img');
    // Expect 2 images from TestProjectOne + potentially others if not filtered correctly by component.
    // The component filters by path.includes(`/Assets/${projectName}/`)
    // So, for "TestProjectOne", it should find image1.jpg and image2.png.
    expect(images.length).toBe(2); 
    expect(screen.getByAltText('image1')).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    expect(screen.getByAltText('image2')).toHaveAttribute('src', '/Assets/TestProjectOne/image2.png');
  });

  it('should render nothing if no images found for the project', () => {
    const { container } = render(<ProjectGallery projectName="NonExistentProject" />);
    // Expect the component to return null, so the container should be empty (or only have the root div from render)
    // The component returns null, so its direct container will have no children from the component itself.
    // Check if the h2 "Gallery" is NOT present.
    expect(screen.queryByText('Gallery')).not.toBeInTheDocument();
    // Check if the container itself is empty (or only contains the base div from render)
    // The component `div className="mt-8"` will not be rendered.
    expect(container.firstChild).toBeNull(); // If component returns null, it renders nothing.
  });

  it('should open modal with selected image when a thumbnail is clicked', () => {
    render(<ProjectGallery projectName={projectName} />);
    
    const thumbnails = screen.getAllByRole('img'); // These are the gallery images
    fireEvent.click(thumbnails[0]); // Click the first image

    // Modal should be visible. The modal has a role of 'img' for the selected image.
    // The alt text for the selected image in the modal is "Selected".
    const modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument();
    expect(modalImage).toHaveAttribute('src', '/Assets/TestProjectOne/image1.jpg');
    
    // Check some modal structure, e.g., the backdrop div
    // The backdrop is className="fixed inset-0 ...", it doesn't have a specific role by default.
    // We can check its presence by verifying the image it contains.
    expect(screen.getByAltText('Selected').closest('div[class*="fixed inset-0"]')).toBeInTheDocument();
  });

  it('should close modal when the backdrop is clicked', () => {
    render(<ProjectGallery projectName={projectName} />);
    
    const thumbnails = screen.getAllByRole('img');
    fireEvent.click(thumbnails[0]); // Open the modal

    let modalImage = screen.getByAltText('Selected');
    expect(modalImage).toBeInTheDocument(); // Modal is open

    // Click the backdrop. The backdrop is the parent div of the modal image.
    // It has the onClick handler.
    const backdrop = modalImage.closest('div[class*="fixed inset-0"]');
    expect(backdrop).toBeInTheDocument();
    if (backdrop) {
        fireEvent.click(backdrop);
    }

    // Modal should be closed
    expect(screen.queryByAltText('Selected')).not.toBeInTheDocument();
  });
  
  it('should use image filename (without extension) as alt text for thumbnails', () => {
    render(<ProjectGallery projectName={projectName} />);
    expect(screen.getByAltText('image1')).toBeInTheDocument();
    expect(screen.getByAltText('image2')).toBeInTheDocument();
  });

});
