"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import {IoIosRocket} from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderNav from "@/components/WorkSliderNav";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Watch the Drop [WTD]",
    desc: "Team project developed during a 24-hour hackathon at IIT Jodhpur and led us to victory, my team successfully created a full-stack application that tracked prices from multiple e-commerce websites like Amazon and Flipkart. This project also leveraged the power of ML models to predict future prices.",
    stack: [{name:"Next.js 14"},{name:"Tailwind"},{name:"Typescript"}, {name:"Machine Learning"}, {name:"Web Scraping"}],
    image: "/assets/work/p1.png",
    live: "https://watch-the-drop-v2.vercel.app/",
    github: "https://github.com/lakshya324/Watch-The-Drop",
  },
  {
    num: "02",
    title: "AgroSync",
    desc: "AgroSync is a team project that connects farmers and consumers through an Interactive platform. It lets farmers list crops and lets users purchase directly from the farmer without any brokerage. The platform includes a chat function, a chatbot for user support, and machine learning for crop grading, ensuring quality.",
    stack: [{name:"React.js"},{name:"Node.js"},{name:"MongoDB"}, {name:"Flask"}, {name:"Deep Learning"}],
    image: "/assets/work/p2.png",
    live: "https://agrosync-prototype.vercel.app/",
    github: "https://github.com/lakshya324/AgroSync",
  },
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number and Title */}
              <div className="flex flex-row xl:flex-col justify-center items-center xl:items-start gap-3">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              </div>
              {/* Description */}
              <p className="text-white/60 text-sm text-justify">{project.desc}</p>
              {/* Stack */}
              <ul className="flex gap-2 justify-center xl:justify-between">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-sm text-accent">
                      {stack.name}
                      {/* removing extra comma at last */}
                      {index < project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4 justify-center xl:justify-start">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <IoIosRocket className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={(swiper) => {
                // updating projects on slide change
                setProject(projects[swiper.activeIndex]);
              }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Navigation */}
              <WorkSliderNav
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
