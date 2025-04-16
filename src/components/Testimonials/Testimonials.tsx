"use client";
import Image from "next/image";

function TestimonialCard({
    quote,
    name,
    role,
    institution,
    image
  }: {
    quote: string;
    name: string;
    role: string;
    institution: string;
    image: string;
  }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-[1.05]">
        <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100 shadow-sm">
            <Image 
              src={image} 
              alt={name} 
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
            <p className="text-sm text-blue-600">{institution}</p>
          </div>
        </div>
        <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
      </div>
    );
  }
  
  // Testimonials Section
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
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            What Educational Institutions Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from our partner institutions about how Posinnove has transformed their approach to experiential learning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                institution={testimonial.institution}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  