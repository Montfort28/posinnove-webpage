"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "lucide-react";

export default function PossinoveAction() {
    return (
        <section id="posinnove-action" className="py-16 px-4 md:px-8 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <div className="relative rounded-lg overflow-hidden h-64 md:h-96 bg-blue-500 shadow-xl">
                  <Image 
                    src="/images/pexels3.jpg" 
                    alt="Student working on a project" 
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 md:pl-16">
                <h2 className="text-3xl font-bold mb-8">
                  Posinnove In Action
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-700/30 p-6 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold mb-2">15+</p>
                    <p className="text-xl">Projects Completed</p>
                    <p className="text-sm mt-2 text-blue-100">Across various disciplines including tech, design, and business</p>
                  </div>
                  
                  <div className="bg-blue-700/30 p-6 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold mb-2">430+</p>
                    <p className="text-xl">Learners Benefited</p>
                    <p className="text-sm mt-2 text-blue-100">From hands-on experience with real-world projects</p>
                  </div>
                  
                  <div className="bg-blue-700/30 p-6 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold mb-2">8+</p>
                    <p className="text-xl">Partner Institutions</p>
                    <p className="text-sm mt-2 text-blue-100">Including universities, colleges, and vocational schools</p>
                  </div>
                  
                  <div className="bg-blue-700/30 p-6 rounded-lg backdrop-blur-sm">
                    <p className="text-4xl font-bold mb-2">92%</p>
                    <p className="text-xl">Satisfaction Rate</p>
                    <p className="text-sm mt-2 text-blue-100">Among educators using our platform for their courses</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="https://app.posinnove.com/login" target="_blank">
                    <Button 
                      variant="secondary" 
                      size="md" 
                      className="bg-white text-blue-600 hover:bg-blue-50"
                      icon={<ArrowRightIcon size={16} />}
                    >
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}