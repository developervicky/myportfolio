"use client";
import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  links,
  website,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section
        className=" relative mx-8 overflow-hidden rounded-lg  border border-black/5 bg-slate-200/30
       transition  hover:bg-primary/[0.12] sm:pr-8  sm:group-even:pl-10 md:max-w-[65rem] dark:bg-slate-200/10 dark:hover:bg-primary/[0.2] "
      >
        <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:max-w-[40rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[16rem]  md:max-w-[45%] md:group-even:ml-[22rem] lg:group-even:ml-[26rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-primary  px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-white "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className="ml-1 mt-4 flex gap-3">
            {links.map((link, index) => (
              <li
                key={index}
                className=" cursor-pointer rounded-full bg-white/60 p-2 text-2xl transition hover:scale-110 hover:text-primary dark:bg-white/10"
              >
                <a target="_blank" href={link.link}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a target="_blank" href={website}>
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="absolute -right-40 top-8 hidden rounded-lg object-cover shadow-2xl transition group-even:-left-40 group-even:right-[initial]  group-hover:rotate-[0.8deg] group-hover:scale-[1.03]  group-even:group-hover:-rotate-[0.8deg] sm:block sm:w-[28rem] md:w-[35rem]  "
            />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
