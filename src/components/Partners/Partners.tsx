"use client";
import Image from "next/image";

export default function partners() {
    const partners = [
        { name: "ICT Chamber", logo: "/images/Partner1.png" },
        { name: "ALX Ventures", logo: "/images/images.png" },
        { name: "Umurava", logo: "/images/umurava.png" },
        { name: "University of Rwanda", logo: "/images/urlogo.png" }
      ];
    
      return (
        <section id="partners" className="py-12 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your students will work on projects for our recognitions
              </h2>
              <p className="text-gray-600 text-lg">
                Hundreds of companies have partnered with Posinnove (50+)
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner, index) => (
                <div
                key={index}
                className="w-32 h-20 bg-white shadow-sm rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:shadow-blue-100 hover:shadow-lg hover:scale-110 hover:border hover:border-blue-500"
              >          
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }