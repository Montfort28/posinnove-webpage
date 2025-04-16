"use client"; 
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import EducatorSection from "@/components/Educator/EducatorSection";
import InternshipComparison from "@/components/InternshipComparison/InternshipComparison";
import ProjectCards from "@/components/ProjectCards/ProjectCards";
import SuccessStories from "@/components/SuccessStories/SuccessStories"
import PossinoveAction from "@/components/PossinoveAction/PossinoveAction";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import VisualExamples from "@/components/VisualExamples/VisualExamples";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

// Main Page Component
export default function Home() {
  
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
    <Navbar scrollToSection={scrollToSection} />
     <Hero />
     <Partners />
     <EducatorSection />
     <ProjectCards />
     <PossinoveAction />
     <SuccessStories />
     <VisualExamples />
     <Testimonials />
     <InternshipComparison />
     <section id="faq">
       <FAQ />
     </section>
     <CTASection />
     <Footer scrollToSection={scrollToSection} />
     <ScrollToTopButton />
   </main>
 );
}
