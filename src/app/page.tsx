import Image from "next/image";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <main className="flex flex-grow flex-col p-8 sm:p-24 sm:pt-16 bg-[#E9C8B9]">
      <div className="flex flex-col sm:flex-row justify-between flex-grow">
        <div className="flex flex-col flex-1 gap-5"> 
          {/* text */}
          <h1 className={`text-4xl sm:text-7xl sm:pt-10 sm:mr-10 font-bold drop-shadow-lg ${crimson.className}`}>Hello world! My name is Jack Chin!</h1>
          <Image src="/jack-chin.jpg" alt="Jack Chin" width={818} height={545} className="rounded-3xl border-white border-4 sm:hidden" />
          <div className={`flex flex-col gap-4 text-[#222421] description text-md sm:text-3xl ${crimson.className}`}>
            <p>Hello! My name is Jack Chin! I’m a recent Computer Science graduate from the <b>University at Buffalo</b> with Magna Cum Laude honors, and I specialize in full-stack development. I have interned at Xerox as a full-stack developer and the Monroe County Government as a cybersecurity researcher. I have also made a few websites as fan-projects.</p>
            <p>I am always <b>learning</b> and <b>proactively</b> moving towards my goal of leaving a positive impact on people’s lives.</p>
            <p>Outside of computer science, I enjoy <b>mechanical keyboards</b>, <b>bass guitar</b>, <b>gaming</b>, <b>racing</b>, and <b>music</b>.</p>
          </div>
          <div className="buttons text-[#222421] flex flex-row gap-4">
            <button className="bg-[#B2BCA3] px-4 py-2 rounded-md border-2 border-black">Download Resume</button>
            <button className="bg-[#B2BCA3] px-4 py-2 rounded-md border-2 border-black">Contact Me</button>
          </div>
          
        </div>
        <div className="justify-center flex-1 hidden sm:flex">
          {/* image */}
          <Image src="/jack-chin.jpg" alt="Jack Chin" width={818} height={545} className="rounded-3xl border-white border-4 sm:w-[818px] sm:h-[545px]" />
        </div>
      </div>
    </main>
  );
}
