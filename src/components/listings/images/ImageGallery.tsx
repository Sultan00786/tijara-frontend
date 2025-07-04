import React, { useState, useEffect } from "react";
import ImageFallback from "@/components/media/ImageFallback";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Updated type to handle different image formats
type ImageType = string | File | { url: string };

interface ImageGalleryProps {
  images?: ImageType[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Simplified image URL extraction
  const imageUrls = React.useMemo(() => {
    return images
      .map((image) => {
        if (typeof image === "string") return image;
        if (image instanceof File) return URL.createObjectURL(image);
        if (image && typeof image === "object" && "url" in image)
          return image.url;
        return "";
      })
      .filter(Boolean);
  }, [images]);

  useEffect(() => {
    // Clean up object URLs to prevent memory leaks
    return () => {
      imageUrls.forEach((url) => {
        if (url.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, [imageUrls]);

  useEffect(() => {
    if (selectedImage !== null && selectedImage >= imageUrls.length) {
      setSelectedImage(null);
    }
  }, [imageUrls.length, selectedImage]);

  const handlePrevious = () => {
    setSelectedImage((current) =>
      current === null || current === 0 ? imageUrls.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setSelectedImage((current) =>
      current === null || current === imageUrls.length - 1 ? 0 : current + 1,
    );
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Image */}
      <div
        className="w-full rounded-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        style={{ minHeight: 350, maxHeight: 450 }}
      >
        <button
          className="w-full h-full"
          onClick={() =>
            setSelectedImage(selectedImage !== null ? selectedImage : 0)
          }
          tabIndex={0}
        >
          <ImageFallback
            src={imageUrls[selectedImage !== null ? selectedImage : 0]}
            alt={`Main Image`}
            className="object-contain w-full h-[350px] md:h-[450px] hover:scale-110 transition-all duration-300 cursor-pointer"
            width={800}
            height={600}
            priority={true}
            quality={85}
            sizes="(max-width: 768px) 100vw, 75vw"
            loading="eager"
          />
        </button>
      </div>
      {/* Thumbnails Carousel */}
      {imageUrls.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto w-full justify-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {imageUrls.map((url, idx) => (
            <button
              key={idx}
              className={`border-2 ${selectedImage === idx ? "border-blue-500" : "border-transparent"} rounded-lg focus:outline-none transition-shadow duration-200 bg-white dark:bg-gray-800 flex-shrink-0`}
              style={{ width: 72, height: 72 }}
              onClick={() => setSelectedImage(idx)}
              tabIndex={0}
            >
              <ImageFallback
                src={url}
                alt={`Thumbnail ${idx + 1}`}
                className="object-cover w-full h-full rounded-lg"
                width={72}
                height={72}
                quality={60}
                loading="lazy"
                sizes="72px"
              />
            </button>
          ))}
        </div>
      )}
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <div className="relative max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-center">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={handleClose}
              >
                <FaTimes size={24} />
              </button>

              <button
                className="absolute left-4 text-white hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <FaChevronLeft size={24} />
              </button>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div
                  className="max-h-[90vh] max-w-full w-auto h-auto object-contain"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <ImageFallback
                    src={imageUrls[selectedImage]}
                    alt={`Image ${selectedImage + 1}`}
                    className="max-h-[90vh] w-auto object-contain"
                    width={1200}
                    height={900}
                    quality={90}
                    priority={true}
                    sizes="90vw"
                  />
                </div>
              </motion.div>

              <button
                className="absolute right-4 text-white hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
