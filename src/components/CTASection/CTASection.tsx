"use client";
import { } from "lucide-react";
import React, { useState} from 'react';
import Link from "next/link";
import { ArrowRightIcon, Send as SendIcon} from "lucide-react";
import { Button } from "@/components/ui/Button";


// CTA Section Component
export default function CTASection() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (email) {
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setEmail('');
      }
    };
  
    return (
      <section className="py-16 px-4 md:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your institution&apos;s approach to learning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Posinnove community today and give your students the competitive edge they need.
            </p>
            
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Submit Your Project</h3>
              <p className="mb-6 opacity-90">
                Have a project that could benefit from student talent? Let us know!
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="flex items-center justify-center">
                    Submit
                    <SendIcon size={16} className="ml-2" />
                  </span>
                </button>
              </form>
              
              {submitted && (
                <div className="mt-4 text-sm bg-green-500/20 py-2 px-4 rounded-md">
                  Thank you! We&apos;ll contact you soon.
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <Link href="https://form.jotform.com/243395200217550" target="_blank">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50"
                  icon={<ArrowRightIcon size={16} />}
                >
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }