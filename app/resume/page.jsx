"use client";

import {
  FaPython,
  FaRobot,
  FaBrain,
  FaDatabase,
  FaGithub,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

// About Data
const about = {
  title: "About Me",
  desc: "Passionate and driven Computer Science student with hands-on experience in Machine Learning and a penchant for problem-solving. Eager to contribute innovative solutions and collaborate in dynamic environments.",
  info: [
    { key: "Name", value: "Lakshya Sharma" },
    { key: "Email", value: "lakshya.off31@gmail.com" },
    { key: "Phone", value: "+91 90585 90400" },
    { key: "Nationality", value: "Indian" },
    { key: "Location", value: "Ghaziabad, India" },
    { key: "Languages", value: "English, Hindi" },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  desc: "I have worked with various companies and societies to build websites and web applications. Here are some of my experiences.",
  items: [
    {
      company: "Bookeve, Wofo24",
      position: "Machine Learning Intern",
      date: "nov 2023 - feb 2024",
    },
    {
      company: "MLCOE Society, AKGEC",
      position: "Machine Learning Developer",
      date: "nov 2023 - apr 2024",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  desc: "I have pursuing my graduation in B.Tech in Computer Science and Information Technology. Here are some of my educational experiences.",
  items: [
    {
      institute: "AKGEC, Ghaziabad [AKTU]",
      degree: "B.Tech in CS&IT",
      date: "2022 - 2026",
    },
    {
      institute: "PMS Public School, Moradabad",
      degree: "Senior Secondary [PCM]",
      date: "2020 - 2022",
    },
    {
      institute: "PMS Public School, Moradabad",
      degree: "Secondary",
      date: "2018 - 2020",
    },
  ],
};

// Skills Data
const skills = {
  title: "Skills",
  desc: "I have experience working with the following technologies and tools. And here are some of my skills.",
  items: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaRobot />, name: "Machine Learning" },
    { icon: <FaBrain />, name: "Deep Learning" },
    { icon: <FaAws />, name: "Amazon Web Services" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <FaDatabase />, name: "SQL & NoSQL Databases" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <FaGithub />, name: "Git & Github" },
  ],
};

// certificates Data
const certificates = {
  title: "Achievements & Certificates",
  desc: "I have achieved various awards, certifications and completed many courses in the field of Machine Learning, Cloud Computing, and Backend Development. Here are some of my certificates.",
  items: [
    // Awards
    {
      date: "April 2024",
      title: "Research Paper Publication",
      issue: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/document/10486069",
    },
    {
      date: "April 2024",
      title: "3rd Place in Breach The Firewall",
      issue: "IMS Ghaziabad",
      link: "https://www.linkedin.com/posts/lakshyasharma3_excited-to-announce-that-ive-secured-activity-7186728854252617728-OjZJ",
    },
    {
      date: "January 2024",
      title: "3rd Place in Prometeo'24 Hackathon",
      issue: "IIT Jodhpur",
      link: "https://drive.google.com/file/d/1GINMK9xrQUbBctc8l0YxM6oYnlNLLvfA/view?usp=sharing",
    },
    // Udemy Certificates
    {
      date: "May 2024",
      title: "NodeJS - The Complete Guide",
      issue: "Udemy",
      link: "https://www.udemy.com/certificate/UC-0f56e224-1f78-41e6-9b91-e9318bb676f3/",
    },
    {
      date: "January 2024",
      title: "Fundamentals of Backend Engineering",
      issue: "Udemy",
      link: "https://www.udemy.com/certificate/UC-85a4e8dc-279f-45b5-97a8-fcd09a53a218/",
    },
    {
      date: "December 2023",
      title: "Ultimate AWS Cloud Practitioner CLF-C02",
      issue: "Udemy",
      link: "https://www.udemy.com/certificate/UC-1e5a692e-dd41-4a58-86c9-076beef61e8e/",
    },
    {
      date: "October 2023",
      title: "Deep Learning A-Z™: Neural Networks, AI",
      issue: "Udemy",
      link: "https://www.udemy.com/certificate/UC-a5007d08-ae9d-4808-b176-f542c5935319/",
    },
    {
      date: "September 2023",
      title: "Flutter and Dart - The Complete Guide",
      issue: "Udemy",
      link: "https://www.udemy.com/certificate/UC-9bb5a42d-6264-4315-a508-6cafd57a55a7/",
    },
    {
      date: "June 2023",
      title: "Machine Learning A-Z™: AI, Python and R",
      issue: "Udemy",
      link: "https://www.udemy.com/certificate/UC-d65c14f7-b68e-4591-9935-7ccc5f13e3f1/",
    },
  ],
};

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs List */}
          <TabsList className="fle flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Certifications */}
            <TabsContent value="certificates" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certificates.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certificates.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certificates.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <Link href={item.link}>
                              <p className="flex text-white/60 hover:underline hover:text-accent/80">
                                {item.issue}
                                <BsArrowUpRight className="ml-1 mt-2 opacity-0 group-hover:opacity-100" />
                              </p>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.key}</span>
                        <span className="text-xl">{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
