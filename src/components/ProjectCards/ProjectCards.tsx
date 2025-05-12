"use client";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useResponsive } from "@/hooks/useResponsive";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Fixed component import path
import React, { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

function ProjectCard({ title, category, image }: ProjectCardProps) {
  const { imageProps } = useImageOptimization({
    src: image,
    width: 400,
    quality: 85
  });

  // Use client-side only animation with useEffect
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div 
      layout
      initial={mounted ? { opacity: 0, y: 20 } : "none"}
      animate={mounted ? { opacity: 1, y: 0 } : "none"}
      exit={mounted ? { opacity: 0, y: -20 } : "none"}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all hover:translate-y-1"
    >
      <div className="w-full h-48 bg-gray-200 relative">
        <Image
          src={imageProps.src}
          width={imageProps.width}
          height={imageProps.width * 0.75}
          quality={imageProps.quality}
          priority={imageProps.priority}
          sizes={imageProps.sizes}
          alt={`${category} project`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs py-1 px-3 rounded-full font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="flex justify-center mt-4">
          <Link href="#project-details">
            <Button 
              variant="primary" 
              size="sm"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              View All <ArrowRightIcon className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectCards() {
  const { state, dispatch } = useGlobalState();
  const { isBelow } = useResponsive();
  const isMobile = isBelow('md');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "20+ Web/UI/UX projects",
      category: "Design",
      image: "/images/Project1.jpg"
    },
    {
      id: 2,
      title: "20+ UI/UX Design",
      category: "Design",
      image: "/images/Project2.jpg"
    },
    {
      id: 3,
      title: "10+ Data Analytics",
      category: "Data Science",
      image: "/images/Project3.jpg"
    },
    {
      id: 4,
      title: "15+ Marketing Campaigns",
      category: "Marketing",
      image: "/images/Project4.jpg"
    },
    {
      id: 5,
      title: "12+ AI & Machine Learning Models",
      category: "AI/ML",
      image: "/images/Project5.jpg"
    },
    {
      id: 6,
      title: "18+ Mobile App Prototypes",
      category: "Mobile",
      image: "/images/Project6.jpg"
    }
  ];

  const projectsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(allProjects.length / projectsPerSlide);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      dispatch({ 
        type: 'SET_ACTIVE_PROJECT_SLIDE', 
        index: (state.activeProjectSlide + 1) % totalSlides 
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [state.activeProjectSlide, totalSlides, dispatch, mounted]);

  const currentProjects = allProjects.slice(
    state.activeProjectSlide * projectsPerSlide,
    state.activeProjectSlide * projectsPerSlide + projectsPerSlide
  );

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : "none"}
          whileInView={mounted ? { opacity: 1, y: 0 } : "none"}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            See Projects That You Can Assign to Your Students
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mounted && (
            <AnimatePresence mode="wait">
              {currentProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                />
              ))}
            </AnimatePresence>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-3">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  dispatch({ type: 'SET_ACTIVE_PROJECT_SLIDE', index: i });
                }}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  i === state.activeProjectSlide
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}