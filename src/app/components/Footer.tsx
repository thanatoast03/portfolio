'use client'
import Image from "next/image"
import github from "../../../public/github-mark.png"
import linkedin from "../../../public/InBug-Black.png"
import email from "../../../public/mail.svg"
import x from "../../../public/x-black.png"
export default function Footer() {
  return (
    <footer className="bg-[#B2BCA3] shadow-lg rounded-3xl fixed bottom-6 sm:bottom-14 left-1/2 -translate-x-1/2 backdrop-blur-sm p-2 sm:p-4 text-center max-w-3xl w-[95%] justify-items-center items-center z-50 hover:bottom-6 transition-all duration-300">
      <div className="mx-auto px-6 py-2 flex justify-between items-center gap-5">
        <p className="font-crimson text-xs sm:text-xl text-[#222421] font-bold">© Jack Chin 2025</p>
        <div className="flex gap-3 sm:gap-5">
            <Image className="w-[25px] h-[25px] sm:w-[37px] sm:h-[37px]" src={email} alt="email" />
            <Image className="w-[25px] h-[25px] sm:w-[37px] sm:h-[37px]" src={x} alt="x" />
            <Image className="w-[25px] h-[25px] sm:w-[37px] sm:h-[37px]" src={linkedin} alt="linkedin" />
            <Image className="w-[25px] h-[25px] sm:w-[37px] sm:h-[37px]" src={github} alt="github" />
        </div>
      </div>
    </footer>
  )
}