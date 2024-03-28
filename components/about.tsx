"use client";
import React, { useEffect } from "react";
import SectionHeader from "./sectionHeader";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSecContext";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mt-[6rem] flex max-w-[58rem] scroll-mt-[6.5rem] flex-col items-center justify-center gap-3 px-8 tracking-wide sm:mt-[18rem] sm:px-14  md:mt-[15rem]"
    >
      <SectionHeader> About Me </SectionHeader>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{
          type: "tween",
          delay: 0.17,
        }}
      >
        <p className="mt-3 text-center leading-7 dark:text-gray-400 sm:indent-8">
          Hello, I'm Vignesh Kathiresan. At the age of 20, when I've thought of
          my career options. I had a conviction that I should have to pick
          career where people rely on lot. That got me to thinking on how much
          I've been fascinated by technology and web and how it can play a vital
          role in everyone's daily life that thought led me to give a chance to
          explore the <span className="font-semibold">web development</span>.
        </p>
        <p className="text-center leading-7 dark:text-gray-400 sm:indent-8">
          For over a year, I have been developing full-stack applications on my
          own projects. My core stack is{" "}
          <span className="font-semibold">
            NextJS, Typescript, ReactJS, NodeJS, MongoDB and Figma
          </span>
          . I am dedicated to creating user-friendly and visually appealing web
          experiences. These experiences allowed me to enhance my skills and
          stay up-to-data with the latest technologies and trends.
        </p>
        <p className="text-center leading-7 dark:text-gray-400 sm:indent-8">
          Feel free to explore my portfolio to see through my works. If you
          would like to connect with me, the contact bar is right down, please
          don't hesitate to reach out.
        </p>
      </motion.div>
    </section>
  );
}
