"use client";

import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";

// Components
import Stats from "@/components/Stats";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl"> I am a</span> */}
            <div className="flex justify-center xl:justify-start">
              <span className="text-xl text-white/60 mr-2"> I am a</span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
                }}
                className="text-white"
              >
                {/* Typewriter */}
                <Typewriter
                  options={{
                    strings: portfolioData.home.typewriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.div>
            </div>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Lakshya Sharma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-sm">
              I specialize in crafting innovative ML & DL solutions and scalable
              backend systems, proficient in multiple programming languages and
              AWS technologies.
            </p>
            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href={portfolioData.home.resumeLink}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
