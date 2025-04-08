import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectGalleryProps {
  projectName: string;
}

export default function ProjectGallery({ projectName }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get all images from the project's assets folder
  const images = import.meta.glob('/public/Assets/*/*.{png,jpg,jpeg,webp}', { eager: true });
  const projectImages = Object.entries(images)
    .filter(([path]) => path.includes(`/Assets/${projectName}/`))
    .map(([path, module]) => {
      // Remove the /public prefix from the path for the src
      const src = (module as { default: string }).default.replace('/public', '');
      return {
        src,
        alt: path.split('/').pop()?.split('.')[0] || '',
      };
    });

  if (projectImages.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image.src)}
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </div>
  );
} 