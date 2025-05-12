"use client";
import { Card } from "@/components/ui/card";
import { XIcon, CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/utils/constants";

interface CheckItemProps {
  text: string;
  checked: boolean;
  index: number;
}

function CheckItem({ text, checked, index }: CheckItemProps) {
  return (
    <motion.div 
      className="flex items-start py-2"
      initial={{ opacity: 0, x: checked ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        ...ANIMATION_CONFIG,
        delay: index * 0.1 // Stagger effect
      }}
    >
      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
        checked 
          ? 'text-white bg-blue-600' 
          : 'text-white bg-gray-400'
        }`}
      >
        {checked ? <CheckIcon size={14} /> : <XIcon size={14} />}
      </div>
      <p className="ml-3 text-gray-700">{text}</p>
    </motion.div>
  );
}

export default function InternshipComparison() {
  const modernInternships = [
    "Fully remote, work with students from anywhere",
    "Individual or team-based on tasks/large-scale projects",
    "Supervised by educators/professionals or Posinnove",
    "A single platform for communication, project management, and feedback"
  ];

  const traditionalInternships = [
    "Often in-person, creating geographical limitations and commuting costs",
    "Typically individual-based only",
    "No outside accountability",
    "No integrated platform/documentation tools for tracking"
  ];

  return (
    <section id="internships" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={ANIMATION_CONFIG}
          >
            <Card
              variant="default"
              className="bg-gradient-to-tr from-blue-300 to-blue-500 text-white relative z-20 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2 text-blue-600">
                  <CheckIcon size={16} />
                </div>
                Modernize internships
              </h3>
              <div className="space-y-1">
                {modernInternships.map((item, index) => (
                  <CheckItem key={index} text={item} checked={true} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...ANIMATION_CONFIG, delay: 0.2 }}
          >
            <Card
              variant="outline"
              className="bg-gradient-to-tr from-blue-100 to-blue-300 border-gray-200 relative z-10 -mt-6 md:mt-0"
            >
              <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 text-gray-500">
                  <XIcon size={16} />
                </div>
                Traditional internships
              </h3>
              <div className="space-y-1">
                {traditionalInternships.map((item, index) => (
                  <CheckItem key={index} text={item} checked={false} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}