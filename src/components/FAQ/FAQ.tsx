"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeSection } from "@/components/ui/fade-section";
import { ChevronDownIcon } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDownIcon size={24} className="text-blue-600" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Posinnove help improve student employability?",
      answer: "Posinnove connects students with real-world projects from actual businesses and organizations. Through these experiences, students develop practical skills, build their portfolios, and gain industry connections that significantly enhance their employability after graduation."
    },
    {
      question: "What support do institutions receive during implementation?",
      answer: "We provide comprehensive support including dedicated onboarding assistance, faculty training sessions, technical support, and regular check-ins. Our team helps customize the platform to fit your institution's specific needs and curriculum requirements."
    },
    {
      question: "Can Posinnove integrate with our existing systems?",
      answer: "Yes, Posinnove is designed to integrate seamlessly with most common learning management systems (LMS) and student information systems. We offer flexible API integrations and can work with your IT team to ensure smooth implementation."
    },
    {
      question: "How do you ensure project quality and student safety?",
      answer: "All projects undergo thorough vetting by our team. We verify business partners, assess project scope and requirements, and ensure appropriate safety measures are in place. Projects are monitored throughout their duration with regular check-ins and support."
    },
    {
      question: "What types of projects are available?",
      answer: "Projects span various disciplines including software development, design, business analysis, marketing, research, and more. We work with partners ranging from startups to large corporations, ensuring diverse opportunities for different academic programs."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <FadeSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Get answers to common questions about implementing Posinnove at your institution.
          </p>
        </FadeSection>

        <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        <FadeSection direction="up" delay={0.4} className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="https://posinnove.com/contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </FadeSection>
      </div>
    </section>
  );
}
