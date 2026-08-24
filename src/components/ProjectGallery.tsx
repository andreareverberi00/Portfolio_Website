import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProjectGalleryProps {
  projectName: string;
}

export default function ProjectGallery({ projectName }: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Get all images from the project's assets folder
  const images = import.meta.glob('/public/Assets/*/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    query: '?url',
    import: 'default'
  });

  const projectImages = Object.entries(images)
    .filter(([path]) => path.includes(`/Assets/${projectName}/`))
    .map(([path, imageUrl]) => {
      const fileName = path.split('/').pop()?.split('.')[0] || '';
      return {
        src: imageUrl as string,
        alt: fileName.replace(/[-_]/g, ' '),
      };
    });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % projectImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + projectImages.length) % projectImages.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowRight') setSelectedImageIndex((prev) => (prev! + 1) % projectImages.length);
    if (e.key === 'ArrowLeft') setSelectedImageIndex((prev) => (prev! - 1 + projectImages.length) % projectImages.length);
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  if (projectImages.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
        Gallery <span className="text-sm font-normal text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">{projectImages.length} images</span>
      </h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {projectImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative break-inside-avoid group cursor-zoom-in rounded-xl overflow-hidden border border-white/10 bg-white/5"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white drop-shadow-lg" size={32} />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center backdrop-blur-xl"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 hidden md:block"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 hidden md:block"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-[90vh] max-w-[90vw] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projectImages[selectedImageIndex].src}
                alt={projectImages[selectedImageIndex].alt}
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl shadow-black/50"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center p-4 text-white/80 text-sm">
                {selectedImageIndex + 1} / {projectImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}