"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import React, { useState, useEffect, useRef} from 'react';
import {AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/Button";

// Project Card Component
function ProjectCard({
    title,
    category,
    image
  }: {
    title: string;
    category: string;
    image: string;
  }) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all hover:translate-y-1">
        <div className="w-full h-48 bg-gray-200 relative">
          <Image 
            src={image} 
            alt={`${category} project`}
            width={400}
            height={200}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs py-1 px-3 rounded-full font-medium">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 ">{title}</h3>
          <div className="flex justify-center mt-4">
            <Link href="#project-details" onClick={(e) => {
              e.preventDefault();
              document.getElementById('posinnove-action')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Button variant="primary" size="sm" icon={<ArrowRightIcon size={16} />}>
                View All
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
export default function ProjectCards() {
    const allProjects = [
        { id: 1, title: "20+ Web/UI/UX projects", category: "Design", image: "/images/Project1.jpg" },
        { id: 2, title: "20+ UI/UX Design", category: "Design", image: "/images/Project2.jpg" },
        { id: 3, title: "10+ Data Analytics", category: "Data Science", image: "/images/Project3.jpg" },
        { id: 4, title: "15+ Marketing Campaigns", category: "Marketing", image: "/images/Project4.jpg" },
        { id: 5, title: "12+ AI & Machine Learning Models", category: "AI/ML", image: "/images/Project5.jpg" },
        { id: 6, title: "18+ Mobile App Prototypes", category: "Mobile", image: "/images/Project6.jpg" }
      ];
      const [isMobile, setIsMobile] = useState(false);
      const projectsPerSlide = isMobile ? 1 : 3;
      const totalSlides = Math.ceil(allProjects.length / projectsPerSlide);
      const [activeSlide, setActiveSlide] = useState(0);
      const directionRef = useRef(1); // 1 for forward, -1 for backward
    
      // Auto-slide every 8 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          directionRef.current = 1;
          setActiveSlide((prev) => (prev + 1) % totalSlides);
        }, 8000);
        return () => clearInterval(interval);
      }, [totalSlides]);
    
      const currentProjects = allProjects.slice(
        activeSlide * projectsPerSlide,
        activeSlide * projectsPerSlide + projectsPerSlide
      );
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
    
      handleResize(); // Initial check
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    
      return (
        <section id="projects" className="py-16 px-4 md:px-8 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
              See Projects That You Can Assign to Your Students
            </h2>
    
            <AnimatePresence mode="wait">
      <motion.div
        key={activeSlide}
        initial={{ x: directionRef.current * 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: directionRef.current * -1000, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -100 && activeSlide < totalSlides - 1) {
            directionRef.current = 1;
            setActiveSlide((prev) => prev + 1);
          } else if (offset.x > 100 && activeSlide > 0) {
            directionRef.current = -1;
            setActiveSlide((prev) => prev - 1);
          }
        }}
      >
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
          />
        ))}
      </motion.div>
    </AnimatePresence>
    
    
            {/* Dots */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-3">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      directionRef.current = index > activeSlide ? 1 : -1;
                      setActiveSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                      index === activeSlide
                        ? 'bg-blue-600 scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
}