"use client";
import { Instagram as InstagramIcon,Twitter as TwitterIcon,Linkedin as LinkedinIcon,Facebook as FacebookIcon,Send as SendIcon} from "lucide-react";


export default function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
    return (
      <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-2xl font-bold text-white">Posinnove</div>
              </div>
              <p className="text-gray-400 mb-6">
                Making experiential learning accessible and effective for all students.
              </p>
              <div className="flex space-x-4">
                <SocialLink href="https://instagram.com/posinnove" icon={<InstagramIcon size={18} />} />
                <SocialLink href="https://twitter.com/posinnove" icon={<TwitterIcon size={18} />} />
                <SocialLink href="https://linkedin.com/company/posinnove" icon={<LinkedinIcon size={18} />} />
                <SocialLink href="https://facebook.com/posinnove" icon={<FacebookIcon size={18} />} />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Learn More</h3>
              <ul className="space-y-3">
                <FooterLink label="About Us" href="https://www.posinnove.com/about" external={true} />
                <FooterLink label="What We Offer" onClick={() => scrollToSection('educators')} />
                <FooterLink label="Our Projects" onClick={() => scrollToSection('posinnove-action')} />
                <FooterLink label="Get Started" href="https://app.posinnove.com/login" external={true} />
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                  <SendIcon size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Posinnove. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  // Social Link Component
  function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        {icon}
      </a>
    );
  }
  
  // Footer Link Component
  function FooterLink({ 
    label, 
    href, 
    onClick,
    external = false
  }: { 
    label: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  }) {
    return (
      <li>
        {href ? (
          <a 
            href={href} 
            className="text-gray-400 hover:text-white transition-colors"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {label}
          </a>
        ) : (
          <button 
            onClick={onClick} 
            className="text-gray-400 hover:text-white transition-colors text-left"
          >
            {label}
          </button>
        )}
      </li>
    );
  }