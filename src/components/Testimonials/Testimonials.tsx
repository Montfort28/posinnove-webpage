"use client";
import { ImageErrorBoundary } from "@/components/ui/image-error-boundary";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/utils/constants";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  institution: string;
  image: string;
  index: number;
}

function TestimonialAvatar({ src, alt }: { src: string; alt: string }) {
  const { imageProps } = useImageOptimization({
    src,
    width: 48,
    quality: 85,
  });

  return (
    <ImageErrorBoundary
      {...imageProps}
      alt={alt}
      className="rounded-full"
      width={48}
      height={48}
    />
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  institution,
  image,
  index
}: TestimonialCardProps) {
  const { imageProps } = useImageOptimization({
    src: image,
    width: 64,
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
      <Card 
        variant="default" 
        className="h-full hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100 shadow-sm">
            <TestimonialAvatar
              src={image}
              alt={`${name}'s portrait`}
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
            <p className="text-sm text-blue-600">{institution}</p>
          </div>
        </div>
        <blockquote>
          <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
        </blockquote>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Posinnove helped us bring industry projects directly into the classroom. Our students were more engaged and motivated.",
      name: "Program Manager",
      role: "Educator",
      institution: "ICT Chamber Academy",
      image: "/images/avatar-placeholder1.png"
    },
    {
      quote: "The platform simplified project tracking and provided meaningful real-world challenges for our learners.",
      name: "Curriculum Lead",
      role: "Faculty Member",
      institution: "ALX Institute",
      image: "/images/avatar-placeholder2.png"
    },
    {
      quote: "Since adopting Posinnove, we've seen a clear improvement in learner confidence and teamwork skills.",
      name: "Learning Director",
      role: "Instructional Designer",
      institution: "University of Rwanda",
      image: "/images/avatar-placeholder3.png"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ANIMATION_CONFIG}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Educational Institutions Say
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from our partner institutions about how Posinnove has transformed their approach to experiential learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
