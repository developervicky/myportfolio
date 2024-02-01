"use client";
import React, { useEffect } from "react";
import SectionHeader from "./sectionHeader";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="mt-[7rem] flex max-w-[54rem] scroll-mt-[6.5rem] flex-col items-center  justify-center gap-3 px-10"
    >
      <SectionHeader>Skills</SectionHeader>
      <ul className="mt-3 flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <React.Fragment key={index}>
            <motion.li
              className="flex rounded-full border border-black/[0.1] bg-white p-3 shadow-lg transition hover:scale-125 hover:border-primary sm:p-4 mb-4 "
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Image
                src={skill.icon}
                className="flex h-10 w-10 justify-center p-[5px] sm:h-14 sm:w-14"
                alt={skill.name}
              />
            </motion.li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
