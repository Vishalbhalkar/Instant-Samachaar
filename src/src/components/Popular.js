import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Popular = () => {
  return (
    <div>
        <section className="bg-[rgb(0,0,0)] w-full h-[557px]">
            <div className='flex justify-center items-center top-10'>
                <div className='absolute w-5/6 border-[1.5px] border-white rounded-lg'></div>
            </div>

            <div className="flex flex-col pt-10 leading-10 w-full relative">
                <h2 className="font-bold text-white text-[32px] pt-10 text-left pl-60">
                    POPULAR&nbsp;
                    <span className="text-bluet">NEWS</span>
                </h2>
                <h3 className="text-[26px] text-white font-bold text-left pl-28 pt-10">Apple Unveils Vision Pro AR Headset</h3>
                <ul className="space-y-2">
                    <li className="text-white flex items-center mx-28 gap-2">
                        <FaCheck className='text-bluet'/>
                        Apple Unveils Vision Pro AR Headset
                    </li>
                    <li className="text-white flex items-center mx-28 gap-2">
                        <FaCheck className='text-bluet'/>
                        NVIDIA Announces Breakthrough in AI Chips
                    </li>
                    <li className="text-white flex items-center mx-28 gap-2">
                        <FaCheck className='text-bluet'/>
                        Meta's Threads Gains 50 Million Users
                    </li>
                    <li className="text-white flex items-center mx-28 gap-2">
                        <FaCheck className='text-bluet'/>
                        Google Introduces AI-Powered Search Features
                    </li>
                    <li className="text-white flex items-center mx-28 gap-2">
                        <FaCheck className='text-bluet'/>
                        Amazon's Project Kuiper to Launch in 2024
                    </li>
                </ul>
                <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4" autoPlay loop muted alt="" className="max-w-[600px] absolute right-20 top-20 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"></video>
            </div>
        </section>
    </div>
  )
}

export default Popular