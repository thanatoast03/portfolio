'use client'

import { Crimson_Text } from "next/font/google";
import { useState} from 'react';
import parse from 'html-react-parser'

const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] });

interface ExperienceProps {
    title: string,
    date: string,
    description: {
        summary: string,
        points: string[]
    }
}

export default function ExperienceBlock({title, date, description}: ExperienceProps) {
    const [isHidden, setIsHidden] = useState(false);
    const summary = description.summary;
    const points = description.points;

    return (
        <div className={`${crimson.className}`}>
            <div className="hover:scale-[1.02] duration-150 transition-transform transform-gpu will-change-transform">
                <div onClick={() => { setIsHidden(!isHidden)}} className={`flex flex-col sm:flex-row justify-between bg-[#222421] sm:text-xl font-semibold p-4 sm:p-6 sm:px-10 sm:mx-8 rounded-xl ${isHidden && 'rounded-b-none'} drop-shadow-xl z-30 `}>
                    <h1>{title}</h1>
                    <h1 className="text-end">{date}</h1>
                </div>
                { isHidden ? 
                    <div className="bg-white shadow-md shadow-stone-500 rounded-b-xl text-black z-10 p-4 sm:p-5 sm:px-10 sm:mx-8 transition duration-300 ease-in-out">
                        {parse(summary)}

                        {/*  add an extra space if in mobile view to space summary and points out */}
                        <div className="block sm:hidden"> 
                            <br/>
                        </div>

                        {points.map((point, index) => (
                            <li className="pl-0 sm:pl-3" key={`point_${index}`}>{parse(point)}</li>
                        ))}
                    </div> 
                    : 
                    <div/> 
                }
            </div>
        </div>
    )
}