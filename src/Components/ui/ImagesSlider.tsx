import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
}: {
  images: string[]; // Este array puede incluir versiones de alta y baja resolución de la misma imagen
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }
      console.log(loading);
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-40">
        <Navbar />
      </div>

      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0 bg-black/5", overlayClassName)} />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.picture
            key={currentIndex}
            className="absolute inset-0 h-full w-full"
          >
            {/* Usamos srcSet para proveer imágenes en distintas resoluciones */}
            <source
              srcSet={`${loadedImages[currentIndex]}?w=1024 1024w, ${loadedImages[currentIndex]}?w=768 768w, ${loadedImages[currentIndex]}?w=480 480w`}
              sizes="(max-width: 1024px) 100vw, (max-width: 768px) 100vw, 480px"
            />
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]} // Imagen de fallback
              className="h-full w-full object-cover object-center"
              alt={`Slide ${currentIndex + 1}`}
            />
          </motion.picture>
        </AnimatePresence>
      )}
    </div>
  );
};
