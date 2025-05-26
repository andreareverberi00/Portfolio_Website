import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  projectName: string;
}

export default function ProjectGallery({ projectName }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Get all images from the project's assets folder
  const projectImages = useMemo(() => {
    const images = import.meta.glob('/public/Assets/*/*.{png,jpg,jpeg,webp}', { eager: true });
    return Object.entries(images)
      .filter(([path]) => path.includes(`/Assets/${projectName}/`))
      .map(([path, module]) => {
        // Remove the /public prefix from the path for the src
        const src = (module as { default: string }).default.replace('/public', '');
        return {
          src,
          alt: path.split('/').pop()?.split('.')[0] || '',
        };
      });
  }, [projectName]);

  if (projectImages.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectImages.map((image, index) => (
          <motion.div
            key={image.src} // Use image.src as key
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} // index is available and can be used
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              setSelectedImage(image.src);
              setCurrentIndex(index);
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-1"
          onClick={() => {
            setSelectedImage(null);
            setCurrentIndex(null);
          }}
        >
          {/* Image Display */}
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-h-[98vh] max-w-[98vw] object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            // Prevent image click from closing modal if backdrop onClick is sensitive
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Previous Arrow Button - Conditionally Rendered */}
          {currentIndex !== null && currentIndex > 0 && (
            <button
              aria-label="Previous image"
              className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                // Navigation logic remains the same, already checks currentIndex !== null && currentIndex > 0
                const newIndex = currentIndex - 1; // Already guarded by the render condition
                setCurrentIndex(newIndex);
                setSelectedImage(projectImages[newIndex].src);
              }}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next Arrow Button - Conditionally Rendered */}
          {currentIndex !== null && currentIndex < projectImages.length - 1 && (
            <button
              aria-label="Next image"
              className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                // Navigation logic remains the same, already checks currentIndex !== null && currentIndex < projectImages.length - 1
                const newIndex = currentIndex + 1; // Already guarded by the render condition
                setCurrentIndex(newIndex);
                setSelectedImage(projectImages[newIndex].src);
              }}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
} 