'use client'

import Image from "next/image";
import { Crimson_Text } from "next/font/google";
import jack from "../../public/jack-chin.jpg"
import resume from "../../public/arrow-up-from-bracket.svg"
import contact from "../../public/address-book.svg"

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <main className="flex flex-grow flex-col p-8 lg:p-24 lg:pt-16 bg-[#E9C8B9]">
      <div className="flex flex-col lg:flex-row xl:gap-10 justify-between flex-grow">
        <div className="flex flex-col flex-1 gap-5 lg:gap-16"> 
          {/* text */}
          <h1 className={`text-4xl lg:text-7xl lg:pt-10 lg:mr-10 font-bold drop-shadow-lg ${crimson.className}`}>Hello world! My name is Jack Chin!</h1>
          <Image src={jack} alt="Jack Chin" width={818} height={545} className="rounded-3xl border-white border-4 lg:hidden" />
          <div className="flex flex-col gap-4 text-[#222421] description text-lg lg:text-xl">
            <p>Hello! My name is Jack Chin! I’m a recent Computer Science graduate from the <b>University at Buffalo</b> with <i>Magna Cum Laude</i> honors, and I specialize in full-stack development. I have interned at Xerox as a full-stack developer and the Monroe County Government as a cybersecurity researcher. I have also made a few websites as fan-projects.</p>
            <p>I am always <b>learning</b> and <b>proactively</b> moving towards my goal of leaving a positive impact on people’s lives.</p>
            <p>Outside of computer science, I enjoy <b>mechanical keyboards</b>, <b>bass guitar</b>, <b>gaming</b>, <b>racing</b>, and <b>music</b>.</p>
          </div>
          <div className="buttons text-[#222421] flex flex-col sm:flex-row gap-4 lg:gap-4 sm:text-xl font-bold">
            <button className="bg-[#B2BCA3] px-6 py-3 rounded-xl border-2 border-black flex flex-row gap-4 items-center drop-shadow-2xl hover:bg-[#FEF0EF]" onClick={() => window.open("https://docs.google.com/document/d/1S-Ia1JUZLdVjuOtX6n6kWjHodwsE2BI_/edit?usp=sharing&ouid=100474169100505037999&rtpof=true&sd=true", "_blank")}>
              <Image src={resume} alt="Resume" width={30} height={30} className="w-6 h-6 sm:w-8 sm:h-8"/>
              <p>Download Resume</p>
            </button>
            <button className="bg-[#B2BCA3] px-6 py-3 rounded-xl border-2 border-black flex flex-row gap-4 sm:gap-4 items-center drop-shadow-2xl hover:bg-[#FEF0EF]" onClick={() => window.open("mailto:jack.chin520@gmail.com", "_blank")}>
              <Image src={contact} alt="Contact" width={30} height={30} className="w-6 h-6 sm:w-8 sm:h-8" />
              <p>Contact Me</p>
            </button>
          </div>
        </div>
        <div className="justify-center flex-1 hidden lg:flex">
          {/* image */}
          <div>
            <Image src={jack} alt="Jack Chin" width={818} height={545} className="rounded-3xl border-white border-4 object-scale-down" />
          </div>
        </div>
      </div>
    </main>
  );
}
