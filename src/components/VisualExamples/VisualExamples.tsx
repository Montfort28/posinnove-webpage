"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon,} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function VisualExamples() {
    return (
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-blue-100" id="visual-examples">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Partner with Posinnove
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Interested in joining our mission to reshape education? Let us show you how real-world collaboration leads to real student impact.
          </p>
  
          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              '/images/mockup1.jpg',
              '/images/mockup2.jpg',
              '/images/mockup3.jpg',
              '/images/mockup4.jpg',
              '/images/mockup5.jpg',
              '/images/mockup6.jpg',
            ].map((src, i) => (
              <div
    key={i}
    className="rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
  >
                <Image
                  src={src}
                  alt={`Collaboration example ${i + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56"
                />
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a call with our onboarding team and learn how your institution can join.
            </p>
            <Link href="https://calendly.com/your-link" target="_blank">
              <Button variant="primary" size="lg" icon={<ArrowRightIcon size={18} />}>
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  