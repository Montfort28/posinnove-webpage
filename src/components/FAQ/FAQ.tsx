"use client";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon,} from "lucide-react";
import React, { useState} from 'react';

// FAQ Item Component - Interactive version that expands/collapses
function FAQItem({
    question,
    answer,
    isOpen,
    toggleOpen,
    id
  }: {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: (id: number) => void;
    id: number;
  }) {
    return (
      <div className={`border border-gray-200 rounded-lg transition-all duration-300${isOpen ? 'shadow-md' : 'shadow-sm'}`}>
        <button
          onClick={() => toggleOpen(id)}
          className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-lg"
          aria-expanded={isOpen}
        >
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>
          <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
            {isOpen ? <ChevronUpIcon size={20} className="text-blue-600" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
          </span>
        </button>
        
        <div 
          className={`px-6 pb-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    );
  }
  
  // FAQ Section
  export default function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    
    const toggleFAQ = (id: number) => {
      setOpenFAQ(openFAQ === id ? null : id);
    };
  
    const faqItems = [
      {
        question: "What is Posinnove and how does it benefit our institution?",
        answer: "Posinnove is a project-based learning platform that connects learners with real-world projects aligned with industry needs. By integrating Posinnove, your institution can enhance student employability through hands-on experience and industry-relevant skills."
      },
      {
        question: "How can our institution collaborate with Posinnove?",
        answer: "Institutions can collaborate with Posinnove by incorporating our project-based learning programs into their curriculum. This partnership allows students to apply theoretical knowledge to practical projects, fostering a more robust learning experience and better preparing them for the workforce."
      },
      {
        question: "What types of projects does Posinnove offer for our students?",
        answer: "Posinnove offers a variety of projects across different industries, including software development, digital marketing, data analysis, and more. Each project is designed to simulate real-world challenges, providing students with valuable skills and experience that employers seek."
      },
      {
        question: "Is Posinnove customizable to fit our institution's specific needs?",
        answer: "Yes, Posinnove collaborates closely with institutions to tailor project-based learning experiences to meet specific educational goals and requirements. Whether it's integrating certain technologies or focusing on particular industry sectors, we adapt to ensure a seamless fit with your curriculum."
      },
      {
        question: "What support does Posinnove provide to educators and students?",
        answer: "Posinnove offers comprehensive support to educators and students throughout the project lifecycle. This includes mentorship from industry experts, access to resources and tools, and regular feedback sessions to ensure a positive learning experience."
      }
    ];
  
    return (
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  id={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === index}
                  toggleOpen={toggleFAQ}
                />
              ))}
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200 shadow-lg">
              <Image 
                src="/images/Support-team-helping-students.jpg" 
                alt="Support team helping students" 
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              
            </div>
          </div>
        </div>
      </section>
    );
  }
