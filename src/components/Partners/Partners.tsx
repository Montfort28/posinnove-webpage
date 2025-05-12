"use client";
import { ImageErrorBoundary } from "@/components/ui/image-error-boundary";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { FadeContainer, FadeSection } from "@/components/ui/fade-section";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/utils/constants";

interface PartnerLogoProps {
  src: string;
  alt: string;
  index: number;
}

function PartnerLogo({ src, alt, index }: PartnerLogoProps) {
  const { imageProps } = useImageOptimization({
    src,
    width: 160,
    quality: 85,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        ...ANIMATION_CONFIG,
        delay: index * 0.1 
      }}
      className="relative w-32 h-20 md:w-40 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
    >
      <ImageErrorBoundary
        {...imageProps}
        height={imageProps.width * 0.75}
        alt={alt}
        className="object-contain w-full h-full filter transition-all duration-300"
      />
    </motion.div>
  );
}

export default function Partners() {
  const partners = [
    { src: "/images/urlogo.webp", alt: "University of Rwanda" },
    { src: "/images/Partner1.png", alt: "Partner 1" },
    { src: "/images/umurava.png", alt: "Umurava" },
    { src: "/images/images.png", alt: "images" },
  ];

  return (
    <section id="partners" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FadeSection direction="up" className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the growing network of educational institutions transforming their approach to experiential learning.
          </p>
        </FadeSection>

        <FadeContainer>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={partner.alt}
                src={partner.src}
                alt={partner.alt}
                index={index}
              />
            ))}
          </div>
        </FadeContainer>

        <FadeSection direction="up" delay={0.4} className="text-center mt-12">
          <p className="text-sm text-gray-500">
            And many more institutions across Africa
          </p>
        </FadeSection>
      </div>
    </section>
  );
}