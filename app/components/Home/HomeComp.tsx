"use-client";
import Image from "next/image";
import React from "react";
import image from "../../../public/image.jpg";

const HomeComp = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Yellow accent shapes */}
      <div className="hidden md:block absolute -bottom-20 -left-32 w-1/4 h-[1400px] bg-yellow-500 -rotate-12 "></div>

      <div className=" mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image section */}
          <div className="w-full md:w-1/2 hidden md:block">
            <div className="relative w-full aspect-square 2xl:max-w-2xl">
              <Image
                src={image}
                width={300}
                height={700}
                alt="Profile"
                className="rounded-[2rem] object-cover w-full 2xl:h-[750px]"
              />
              {/* Add yellow shape overlay */}
              <div className="absolute -bottom-4 -left-4 w-1/2 h-24 bg-yellow-500 -z-10"></div>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-1/2 text-white">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-[2px] bg-yellow-500"></div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-yellow-500 uppercase tracking-tight">
                  I'M Nafiz al Turabi
                </span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              WEB DESIGNER
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              I'm a passionate Full Stack Web Developer (MERN) with a strong
              focus on crafting interactive, user-friendly, and efficient web
              applications. I love building web experiences that make a
              difference, combining design with cutting-edge technology.
            </p>
            <button className="group flex items-center justify-between bg-transparent border border-yellow-500 px-3 py-3 text-white rounded-full gap-2 ">
              MORE ABOUT ME
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
