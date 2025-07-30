'use client'
import Image from "next/image"
import github from "../../../public/github-mark.png"
import linkedin from "../../../public/InBug-Black.png"
import email from "../../../public/mail.svg"
import x from "../../../public/x-black.png"
export default function Footer() {
  return (
    <footer className="bg-[#B2BCA3] shadow-lg rounded-3xl mx-auto my-6 sm:mb-14 backdrop-blur-sm p-2 sm:p-4 text-center max-w-3xl w-[95%] justify-items-center items-center z-50">
      <div className="mx-auto px-6 py-1 flex justify-between items-center gap-5">
        <p className="font-crimson text-xs sm:text-xl text-[#222421] font-bold">© Jack Chin 2025</p>
        <div className="flex gap-3 sm:gap-5">
            <Image className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer" src={email} alt="email" onClick={() => window.open("mailto:jack.chin520@gmail.com", "_blank")}/>
            <Image className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer" src={x} alt="x" onClick={() => window.open("https://x.com/brainkokode", "_blank")}/>
            <Image className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer" src={linkedin} alt="linkedin" onClick={() => window.open("https://www.linkedin.com/in/jack-chin-853b9857/", "_blank")}/>
            <Image className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer" src={github} alt="github" onClick={() => window.open("https://github.com/thanatoast03", "_blank")}/>
        </div>
      </div>
    </footer>
  )
}