'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [offsets, setOffsets] = useState({ top: 0, bottom: 0 });

  // Calculate heights whenever children change or window resizes
  useEffect(() => {
    const updateOffsets = () => {
      const navElement = document.querySelector('nav');
      const footerElement = document.querySelector('footer');
      
      const navHeight = navElement?.offsetHeight ?? 0;
      const footerHeight = footerElement?.offsetHeight ?? 0;
      
      setOffsets({ top: navHeight, bottom: footerHeight });
    };

    // Initial calculation
    updateOffsets();

    // Recalculate on resize
    window.addEventListener('resize', updateOffsets);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  return (
    <div className="min-h-screen bg-[#E9C8B9]">
      <Navbar />
      <main 
        style={{ 
          marginTop: offsets.top,
          marginBottom: offsets.bottom,
          minHeight: `calc(100vh - ${offsets.top}px - ${offsets.bottom}px)`
        }} 
        className="flex-grow"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
