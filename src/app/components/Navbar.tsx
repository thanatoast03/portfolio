'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import rectangle from "../../../public/rectangle-list.svg"
import x from "../../../public/rectangle-xmark.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white text-[#516C65] text-2xl sm:text-3xl font-bold shadow-md drop-shadow-xl">
      <div className="mx-auto px-10 py-4 sm:py-7 flex justify-between items-center">
        <Link href="/">Jack Chin</Link>

        <div className="hidden md:flex gap-x-12">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
        </div>

        <button
          className="md:hidden flex text-center justify-center align-middle text-3xl leading-none"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? 
           <Image src={x} alt="x" className="w-8 h-8" /> : 
           <Image src={rectangle} alt="rectangle" className="w-8 h-8" />
           }
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-10 pb-4 flex flex-col gap-2">
          <hr className="border-t-2 border-[#222421] w-full" />
          <Link className="flex self-end" href="/">Home</Link>
          <Link className="flex self-end" href="/about">About</Link>
          <Link className="flex self-end" href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  )
}