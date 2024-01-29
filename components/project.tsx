"use client";
import React from "react";
import SectionHeader from "./sectionHeader";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section
      className="mt-[5rem] flex flex-col gap-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{
        type: "tween",
        delay: 0.19,
      }}
    >
      <SectionHeader>Project</SectionHeader>;
    </motion.section>
  );
}
