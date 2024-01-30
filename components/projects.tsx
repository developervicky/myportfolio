import React from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="mt-[5rem] flex flex-col items-center justify-center gap-3">
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
