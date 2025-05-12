"use client";
import { useState, useEffect } from 'react';

interface ImageOptimizationOptions {
  src: string;
  width: number;
  quality?: number;
  priority?: boolean;
}

export function useImageOptimization({
  src,
  width,
  quality = 75,
  priority = false,
}: ImageOptimizationOptions) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState<string | undefined>();

  useEffect(() => {
    // Generate a tiny blur placeholder
    if (!priority) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = 10;
        canvas.height = (10 * img.height) / img.width;
        
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          setBlurDataUrl(canvas.toDataURL('image/jpeg', 0.1));
        }
      };
      
      img.src = src;
    }
  }, [src, priority]);

  // Calculate responsive sizes based on viewport
  const sizes = `(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 ${width}px`;

  return {
    isLoaded,
    blurDataUrl,
    onLoadingComplete: () => setIsLoaded(true),
    imageProps: {
      src,
      width,
      quality,
      priority,
      sizes,
      loading: priority ? 'eager' : 'lazy',
      placeholder: blurDataUrl ? 'blur' : 'empty',
      blurDataURL: blurDataUrl,
    },
  };
}