"use client";
import { BookOpenIcon, ChartBarIcon, BriefcaseIcon, UsersIcon} from "lucide-react";
function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-md hover:border-blue-200 hover:bg-blue-50/10">
      <div className="w-12 h-12 bg-blue-600 rounded-md text-white flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function EducatorSection() {
    const features = [
        {
          icon: <BookOpenIcon size={24} />,
          title: "Enroll",
          description: "Educators enroll courses, departments or even entire universities to connect students with real-world projects."
        },
        {
          icon: <ChartBarIcon size={24} />,
          title: "Explore",
          description: "Educators can browse projects categorized by industry, skills, or duration to find matches for curriculum requirements."
        },
        {
          icon: <UsersIcon size={24} />,
          title: "Assign",
          description: "Students are organized into teams of 3-5 for client projects. Each team gets a Posinnove facilitator to manage workflows."
        },
        {
          icon: <BriefcaseIcon size={24} />,
          title: "Report",
          description: "Get detailed progress and performance reports throughout the project cycle with professional standards and feedback."
        }
      ];
    
      return (
        <section id="educators" className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              How Posinnove works for Educators
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Develop practical skills for real-world tasks, providing insights into the profession and a glimpse of life after academics.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      );
}