"use client";
import React, { useEffect } from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSecContext";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);
  return (
    <section
      ref={ref}
      id="projects"
      className="mt-[7rem] flex scroll-mt-[6.5rem] flex-col items-center justify-center gap-3"
    >
      <SectionHeader>Projects</SectionHeader>
      <div className="mt-3">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
