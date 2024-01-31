"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeader from "./sectionHeader";

export default function Path() {
  const { ref } = useSectionInView("Path", 0.5);
  return (
    <section
      ref={ref}
      id="path"
      className="mt-[7rem] flex max-w-[54rem] scroll-mt-[6.5rem] flex-col items-center  justify-center gap-3 px-10"
    >
      <SectionHeader>My Path</SectionHeader>
    </section>
  );
}
