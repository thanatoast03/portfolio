'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateNavHeight = () => {
      const navElement = document.querySelector('nav');
      setNavHeight(navElement?.offsetHeight ?? 0);
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  return (
    <div className="min-h-screen bg-[#E9C8B9] flex flex-col">
      <Navbar />
      <main 
        style={{ paddingTop: `${navHeight}px` }}
        className="flex-grow flex flex-col"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
