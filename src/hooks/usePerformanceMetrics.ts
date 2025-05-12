"use client";
import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

export function usePerformanceMetrics() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Observer for First Contentful Paint
      const paintObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log(`FCP: ${entry.startTime}ms`);
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });

      // Observer for Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(`LCP: ${lastEntry.startTime}ms`);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Observer for Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          const layoutShift = entry as LayoutShiftEntry;
          if (!layoutShift.hadRecentInput) {
            clsValue += layoutShift.value;
          }
        }
        console.log(`CLS: ${clsValue}`);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Observer for First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const firstInput = entry as FirstInputEntry;
          console.log(`FID: ${firstInput.processingStart - firstInput.startTime}ms`);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      return () => {
        paintObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      };
    }
  }, []);
}