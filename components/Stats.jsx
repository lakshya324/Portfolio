"use client";

import CountUp from "react-countup";
import portfolioData from "@/data/portfolio.json";

const stats = portfolioData.stats;

export default function Stats() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <div className="text-4xl xl:text-6xl font-extrabold flex">
                  <CountUp end={stat.count} duration={4} delay={2} /> +
                </div>
                <p
                  className={`${
                    stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }leading-snug text-white/80`}
                >
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
