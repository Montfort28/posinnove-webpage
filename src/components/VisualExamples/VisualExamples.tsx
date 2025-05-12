"use client";
import { ImageErrorBoundary } from "@/components/ui/image-error-boundary";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { useResponsive } from "@/hooks/useResponsive";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface GalleryItemProps {
  src: string;
  index: number;
}

function GalleryItem({ src, index }: GalleryItemProps) {
  const { imageProps } = useImageOptimization({
    src,
    width: 400,
    quality: 85
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1, // Stagger effect
      }}
    >
      <Card
        variant="default"
        className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-56"
      >
        <ImageErrorBoundary
          {...imageProps}
          height={imageProps.width * 0.75}
          alt={`Collaboration example ${index + 1}`}
          className="object-cover w-full h-full"
        />
      </Card>
    </motion.div>
  );
}

export default function VisualExamples() {
  const { isBelow } = useResponsive();
  const isMobile = isBelow('md');

  const images = [
    '/images/mockup1.jpg',
    '/images/mockup2.jpg',
    '/images/mockup3.jpg',
    '/images/mockup4.jpg',
    '/images/mockup5.jpg',
    '/images/mockup6.jpg',
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-blue-100" id="visual-examples">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner with Posinnove
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Interested in joining our mission to reshape education? Let us show you how real-world collaboration leads to real student impact.
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 ${
          isMobile ? '' : 'sm:grid-cols-2 md:grid-cols-3'
        } gap-6 mb-12`}>
          {images.map((src, i) => (
            <GalleryItem key={i} src={src} index={i} />
          ))}
        </div>

        <Card
          variant="outline"
          className="bg-white/10 backdrop-blur-lg p-8 border border-white/20"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a call with our onboarding team and learn how your institution can join.
          </p>
          <Link href="https://calendly.com/your-link" target="_blank">
            <Button variant="primary" size="lg" icon={<ArrowRightIcon size={18} />}>
              Book a Call
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
}

