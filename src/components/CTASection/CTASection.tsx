"use client";
import { FadeSection } from "@/components/ui/fade-section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeSection direction="left">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Institution's Learning Experience?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join leading educational institutions in providing real-world experience to your students. Book a demo to see how Posinnove can work for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://calendly.com/posinnove/demo" target="_blank">
                  <Button 
                    variant="secondary"
                    size="lg"
                    icon={<BookOpenIcon size={18} />}
                    className="w-full sm:w-auto hover:bg-white hover:text-blue-600 transition-all"
                  >
                    Book a Demo
                  </Button>
                </Link>
                <Link href="https://app.posinnove.com/register" target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<ArrowRightIcon size={18} />}
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 transition-all"
                  >
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </FadeSection>

          <FadeSection direction="right">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8">
              <ul className="space-y-4">
                {[
                  "Quick and easy onboarding process",
                  "Dedicated support team",
                  "Flexible implementation options",
                  "Regular platform updates",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-white"
                  >
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                      <CheckIcon size={12} className="text-white" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-blue-100 text-sm">
                  "Posinnove has revolutionized how we approach experiential learning. The platform made it easy to connect our students with real-world projects."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">Dr. Sarah Johnson</p>
                    <p className="text-blue-200 text-sm">Education Director, ALX</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}