'use client';
import React from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

interface ImageErrorBoundaryProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

interface ImageErrorBoundaryState {
  hasError: boolean;
}

export class ImageErrorBoundary extends React.Component<ImageErrorBoundaryProps, ImageErrorBoundaryState> {
  constructor(props: ImageErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { src, alt, width, height, className, priority } = this.props;

    if (this.state.hasError) {
      return (
        <div 
          className={`flex items-center justify-center bg-gray-100 ${className}`}
          style={{ width, height }}
        >
          <div className="text-center">
            <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Image failed to load</p>
          </div>
        </div>
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={() => this.setState({ hasError: true })}
      />
    );
  }
}