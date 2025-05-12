"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, XIcon, } from "lucide-react";
import React, { useState, useEffect,} from 'react';
import { Button } from "@/components/ui/Button";

// Navbar Component
export default function Navbar({ 
    scrollToSection
  }: { 
    scrollToSection: (id: string) => void; 
    
  }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    // Track scroll position for sticky header effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      // Remove dark mode classes
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <div className="w-13 h-18 rounded-md flex items-center justify-center text-blue-600">
                <Image 
                  src="/images/Logo2.png" 
                  alt="LOGO" 
                  width={40}
                  height={40}
                  className="object-cover"
                  priority
                />
                </div>
                <div className="text-blue-600 font-bold text-2xl">Posinnove</div>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <div className="h-6 w-6 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-gray-600"></span>
                  <span className="w-full h-0.5 bg-gray-600"></span>
                  <span className="w-full h-0.5 bg-gray-600"></span>
                </div>
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#explore-program" label="Explore Program" onClick={() => scrollToSection('educators')} />
            <NavLink href="#learning" label="Learning" onClick={() => scrollToSection('projects')} />
            <NavLink href="#institutions" label="Institutions" onClick={() => scrollToSection('partners')} />
            <NavLink href="https://www.posinnove.com/about" label="About Us" external={true} />
            <NavLink href="https://www.posinnove.com/blogs" label="Blog" external={true} />
            <NavLink href="#faq" label="FAQ" onClick={() => scrollToSection('faq')} />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            
            <Link href="https://app.posinnove.com/login" target="_blank">
              <Button variant="primary" size="sm" icon={<ArrowRightIcon size={16} />}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white border-t border-gray-100 rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink href="#explore-program" label="Explore Program" onClick={() => {
                scrollToSection('educators');
                setIsMenuOpen(false);
              }} />
              <NavLink href="#learning" label="Learning" onClick={() => {
                scrollToSection('projects');
                setIsMenuOpen(false);
              }} />
              <NavLink href="#institutions" label="Institutions" onClick={() => {
                scrollToSection('partners');
                setIsMenuOpen(false);
              }} />
              <NavLink href="https://www.posinnove.com/about" label="About Us" external={true} onClick={() => {
                setIsMenuOpen(false);
              }} />
              <NavLink href="https://www.posinnove.com/blogs" label="Blog" external={true} onClick={() => {
                setIsMenuOpen(false);
              }} />
              <NavLink href="#faq" label="FAQ" onClick={() => {
                scrollToSection('faq');
                setIsMenuOpen(false);
              }} />
              <div className="pt-2">
                <Link href="https://app.posinnove.com/login" target="_blank">
                  <Button variant="primary" size="sm" className="w-full" icon={<ArrowRightIcon size={16} />}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
  
  function NavLink({ 
    href, 
    label, 
    onClick,
    external = false
  }: { 
    href: string; 
    label: string;
    onClick?: () => void;
    external?: boolean;
  }) {
    return (
      <a 
        href={href} 
        className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors block py-2 md:py-0 relative group"
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  }