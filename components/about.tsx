"use client";
import React from "react";
import SectionHeader from "./sectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className=" tracking-wide flex max-w-[58rem] flex-col items-center justify-center gap-3 px-8  sm:px-14"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{
        type: "tween",
        delay: 0.17,
      }}
    >
      <SectionHeader> About Me </SectionHeader>
      <p className="text-center leading-7 sm:indent-8">
        Hello, I'm Vignesh Kathiresan. At the age of 20, when I've thought of my
        career options. I had a conviction that i should have to pick career
        where people rely on lot. That got me to thinking on how much I've been
        fascinated by technology and web and how it can play a vital role in
        everyone's daily life that thought led me to give a chance to explore
        the <span className="font-semibold">web development</span>.
      </p>
      <p className="text-center leading-7 sm:indent-8">
        For over a year, I have been developing full-stack applications on my
        own projects. My core stack is{" "}
        <span className="font-semibold">
          ReactJS, NodeJS, MongoDB and Figma
        </span>
        . I am dedicated to creating user-friendly and visually appealing web
        experiences. These experiences allowed me to enhance my skills and stay
        up-to-data with the latest technologies and trends.
      </p>
      <p className="text-center leading-7 sm:indent-8">
        Feel free to explore my portfolio to see through my works. If you would
        like to connect with me, the contact bar is right down, please don't
        hesitate to reach out.
      </p>
    </motion.section>
  );
}
