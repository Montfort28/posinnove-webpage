"use client";
import { ArrowUpIcon} from "lucide-react";
import React, { useState, useEffect} from 'react';

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        setVisible(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
        >
          <ArrowUpIcon size={20} />
        </button>
      )
    );
  }