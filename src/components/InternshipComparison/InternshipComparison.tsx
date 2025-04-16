"use client";
import { XIcon, CheckIcon, } from "lucide-react";

// Check Item Component
function CheckItem({
  text,
  checked
}: {
  text: string;
  checked: boolean;
}) {
  return (
    <div className="flex items-start py-2">
      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
        checked 
          ? 'text-white bg-blue-600' 
          : 'text-white bg-gray-400'
        }`}>
        {checked ? <CheckIcon size={14} /> : <XIcon size={14} />}
      </div>
      <p className="ml-3 text-gray-700">{text}</p>
    </div>
  );
}

export default function InternshipCompariso() {
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
              < div className="bg-gradient-to-tr from-blue-300 to-blue-500 text-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-blue-300/50 relative z-20 ring-1 ring-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2 text-white">
                    <CheckIcon size={16} />
                  </div>
                  Modernize internships
                </h3>
                <div className="space-y-1">
                  {modernInternships.map((item, index) => (
                    <CheckItem key={index} text={item} checked={true} />
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-tr from-blue-100 to-blue-300 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 relative z-10 -mt-6 md:mt-0">
                <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 text-gray-500">
                    <XIcon size={16} />
                  </div>
                  Traditional internships
                </h3>
                <div className="space-y-1">
                  {traditionalInternships.map((item, index) => (
                    <CheckItem key={index} text={item} checked={false} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}