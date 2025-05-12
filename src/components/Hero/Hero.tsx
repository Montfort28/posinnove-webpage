"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { ANIMATION_CONFIG } from "@/utils/constants";

export default function Hero() {
  const { imageProps } = useImageOptimization({
    src: '/images/Hero2.jpg',
    width: 800,
    quality: 90,
    priority: true // Priority load for above-the-fold hero image
  });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md py-28 md:py-36 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }}
            className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The fastest way to expand career development for all students on campus.
            </h1>
            <p className="text-gray-700 mb-8 max-w-lg text-lg leading-relaxed">
              <span className="font-semibold text-blue-600">Posinnove</span> is the latest platform for experiential learning — making it easy for educators to connect with businesses and nonprofit organizations, offering students real-world project opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://app.posinnove.com/login" target="_blank">
                <Button variant="outline" size="md" icon={<BookOpenIcon size={16} />}>
                  Book a Demo
                </Button>
              </Link>
              <Link href="https://app.posinnove.com/login" target="_blank">
                <Button variant="primary" size="md" icon={<ArrowRightIcon size={16} />}>
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 bg-gray-200 shadow-xl">
              <Image
                alt="Students working on laptop"
                src={imageProps.src}
                width={imageProps.width}
                height={imageProps.width * 0.75} // Add height prop with 4:3 aspect ratio
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
                quality={imageProps.quality}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
