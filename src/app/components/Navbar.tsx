'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import rectangle from "../../../public/rectangle-list.svg"
import x from "../../../public/rectangle-xmark.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      // If menu is not open, no need to handle clicks
      if (!isOpen) return;
      
      // Check if click is outside both the button and mobile menu
      const clickedButton = buttonRef.current?.contains(event.target as Node)
      const clickedMenu = mobileMenuRef.current?.contains(event.target as Node)
      
      if (!clickedButton && !clickedMenu) {
        setIsOpen(false)
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white text-[#516C65] text-2xl font-bold shadow-md drop-shadow-xl fixed w-full z-50">
      <div className="mx-auto px-6 sm:px-10 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/">Jack Chin</Link>

        <div className="hidden md:flex gap-x-12">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a className="cursor-pointer" onClick={() => window.open("mailto:jack.chin520@gmail.com", "_blank")}>Contact Me</a>
        </div>

        <button
          className="md:hidden flex text-center justify-center align-middle text-3xl leading-none"
          onClick={handleClick}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          ref={buttonRef}
        >
          {isOpen ? 
           <Image src={x} alt="x" className="w-8 h-8" /> : 
           <Image src={rectangle} alt="rectangle" className="w-8 h-8" />
           }
        </button>
      </div>

      {isOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden px-6 pb-4 flex flex-col gap-2 absolute w-full bg-white z-50 rounded-b-xl"
        >
          <hr className="border-t-2 border-[#222421] w-full" />
          <Link className="flex self-end" href="/">Home</Link>
          <Link className="flex self-end" href="/projects">Projects</Link>
          <a className="flex self-end cursor-pointer" onClick={() => window.open("mailto:jack.chin520@gmail.com", "_blank")}>Contact</a>
        </div>
      )}
    </nav>
  )
}