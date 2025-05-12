"use client";
import { ImageErrorBoundary } from "@/components/ui/image-error-boundary";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/utils/constants";

interface SuccessStoryCardProps {
  title: string;
  institution: string;
  description: string;
  results: string[];
  image: string;
  index: number;
}

function SuccessStoryCard({
  title,
  institution,
  description,
  results,
  image,
  index
}: SuccessStoryCardProps) {
  const { imageProps } = useImageOptimization({
    src: image,
    width: 400,
    quality: 85,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        ...ANIMATION_CONFIG,
        delay: index * 0.2 // Stagger effect
      }}
    >
      <Card variant="default" className="h-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <div className="h-48 md:h-full bg-gray-200 relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
              <ImageErrorBoundary
                {...imageProps}
                height={imageProps.width * 0.75}
                alt={institution}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 p-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 text-blue-600 text-xs py-1 px-3 rounded-full font-medium">
                Success Story
              </div>
              <h4 className="text-gray-700 text-sm ml-2">{institution}</h4>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
            <h4 className="font-medium text-gray-800 mb-2">Results:</h4>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">
                    <CheckIcon size={12} />
                  </div>
                  <span className="text-sm text-gray-600">{result}</span>
                </li>
              ))}
            </ul>
            
            <motion.div 
              className="mt-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href={`#case-study-${title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center cursor-pointer"
              >
                Read full case study
                <ArrowRightIcon size={14} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function SuccessStories() {
  const stories = [
    {
      title: "Curriculum Transformation",
      institution: "ICT Chamber Academy",
      description: "How ICT Chamber Academy integrated Posinnove to bridge the gap between classroom theory and industry practice.",
      results: [
        "38% increase in student employability after graduation",
        "12 industry partnerships established",
        "Faculty reported higher student engagement"
      ],
      image: "/images/Hero1.jpg"
    },
    {
      title: "Scaling Project-Based Learning",
      institution: "University of Rwanda",
      description: "University of Rwanda worked with Posinnove to scale their project-based learning approach across multiple departments.",
      results: [
        "Expanded from 2 to 8 departments using real-world projects",
        "Student satisfaction scores increased by 27%",
        "Reduced administrative overhead by 45%"
      ],
      image: "/images/pexels4.jpg"
    }
  ];

  return (
    <section id="success-stories" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ANIMATION_CONFIG}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Institution Success Stories
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how educational institutions are achieving remarkable results with Posinnove.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {stories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              {...story}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...ANIMATION_CONFIG, delay: 0.4 }}
        >
          <Link href="#request-case-study">
            <Button variant="outline" size="md">
              Request More Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}