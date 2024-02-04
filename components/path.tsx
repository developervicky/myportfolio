"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeader from "./sectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { pathData } from "@/lib/data";
import { motion } from "framer-motion";
import { useTheme } from "@/context/themeContext";

export default function Path() {
  const { ref } = useSectionInView("Path", 0.5);
  const { theme } = useTheme();
  return (
    <motion.section
      ref={ref}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      id="path"
      className="mt-[7rem] flex scroll-mt-[6.5rem] flex-col items-center gap-8 px-8   lg:w-[65rem]"
    >
      <SectionHeader>My Path</SectionHeader>
      <VerticalTimeline lineColor="">
        {pathData.map((each, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#ecf1f6" : "#242d3e",
                // bg-slate-200/30
                boxShadow: "none",
                border: theme === "light" ? "1px solid #fadbca" : "",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #fbab7e",
              }}
              date={each.date}
              icon={each.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                color: "#FBAB7E",
                boxShadow: "none",
              }}
            >
              <h3 className="!font-semibold !capitalize ">{each.title}</h3>
              <p className="!mt-1 !text-gray-600 dark:!text-gray-400">
                {each.organization}
              </p>
              <p className="!mt-1 !text-sm !font-normal !text-gray-600 dark:!text-gray-400">
                {each.location}
              </p>
              <p className="!mt-2 !font-normal !text-gray-600 dark:!text-gray-400">
                Score: {each.gpa}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
