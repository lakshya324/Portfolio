"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Machine Learning and Data Science",
    desc: "I can leverage ML & DL algorithms and data analysis techniques to derive valuable insights and build predictive models.",
    href: "/",
  },
  {
    num: "02",
    title: "Cloud Computing and DevOps",
    desc: "I can help you architect scalable and reliable cloud infrastructure, automate deployment processes, and optimize performance.",
    href: "/",
  },
  {
    num: "03",
    title: "Backend Development",
    desc: "I can help you build robust and scalable backend systems using both Python and NodeJs that power your web and mobile applications.",
    href: "/",
  },
  {
    num: "04",
    title: "App Development",
    desc: "I can help you build cross-platform mobile applications using Flutter that are fast, responsive, and visually appealing.",
    href: "/",
  },
  // {
  //   num: "05",
  //   title: "E-Commerce",
  //   desc: "I can help you build an e-commerce website that is secure, reliable, and easy to use.",
  //   href: ""
  // },
  // {
  //   num: "06",
  //   title: "Digital Marketing",
  //   desc: "I can help you create and implement digital marketing strategies that will help you reach your target audience.",
  //   href: ""
  // }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* Description */}
                <p className="text-white/60">{service.desc}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
