"use client";
import React from "react";
import SectionHeader from "./sectionHeader";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.4);
  return (
    <section
      ref={ref}
      id="contact"
      className="mt-7 flex scroll-mt-[6.5rem] flex-col items-center justify-center gap-3"
    >
      <SectionHeader>Contact Me</SectionHeader>
    </section>
  );
}
