"use client";

import CountUp from "react-countup";

const stats = [
  { title: "Projects Completed", count: 8 },
  // { title: "Cups of Coffee", count: 100 },
  // { title: "Clients", count: 10 },
  { title: "Months of Experience", count: 6},
  { title: "Languages", count: 7 },
  { title: "Certifications", count: 23 },
];
//languages, months of experience, projects completed, line/commits of code,etc.

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
