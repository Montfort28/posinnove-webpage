"use client";
import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type Breakpoint = keyof typeof breakpoints;

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAbove = (breakpoint: Breakpoint) => 
    windowSize.width >= breakpoints[breakpoint];

  const isBelow = (breakpoint: Breakpoint) => 
    windowSize.width < breakpoints[breakpoint];

  const isBetween = (min: Breakpoint, max: Breakpoint) =>
    windowSize.width >= breakpoints[min] && windowSize.width < breakpoints[max];

  const currentBreakpoint = () => {
    if (isBelow('sm')) return 'xs';
    if (isBelow('md')) return 'sm';
    if (isBelow('lg')) return 'md';
    if (isBelow('xl')) return 'lg';
    if (isBelow('2xl')) return 'xl';
    return '2xl';
  };

  return {
    width: windowSize.width,
    height: windowSize.height,
    isAbove,
    isBelow,
    isBetween,
    currentBreakpoint,
    breakpoints,
  };
}