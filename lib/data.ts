import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import studentSpaceImg from "@/public/studentSpace.jpg";
import tripRoverImg from "@/public/tripRover.jpg";
import foodieImg from "@/public/foodie.jpg";
import reactLogo from "@/public/react-2.svg";
import nodeLogo from "@/public/nodejs-1.svg";
import expressLogo from "@/public/expressjs-icon.svg";
import mongoLogo from "@/public/mongodb-icon-2.svg";
import jsLogo from "@/public/logo-javascript.svg";
import tsLogo from "@/public/typescript.svg";
import nextLogo from "@/public/next-js.svg";
import gitLogo from "@/public/github-icon-1.svg";
import tailwindLogo from "@/public/tailwind-css-2.svg";
import fmLogo from "@/public/framer-motion.svg";
import pyLogo from "@/public/python-5.svg";
import figmaLogo from "@/public/Figma-logo.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Path",
    hash: "#path",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "studentSpace",
    description:
      "A social media platform for college campuses, facilitating seamless collaboration andknowledge exchange among students, faculty, staff, and community members",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: studentSpaceImg,
  },
  {
    title: "tripRover",
    description:
      "A CRUD application for booking accommodations that are responsive and gives accommodation owners andbookers access to their own dashboards for managing their reservations",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: tripRoverImg,
  },
  {
    title: "Foodie",
    description:
      "Designed a food delivery application’s user interface using Figma. The design is smartphone-based.",
    tags: ["Figma"],
    imageUrl: foodieImg,
  },
] as const;

export const skillsData = [
  {
    name: "React",
    icon: reactLogo,
  },
  {
    name: "Node",
    icon: nodeLogo,
  },
  {
    name: "Express",
    icon: expressLogo,
  },
  {
    name: "MongoDB",
    icon: mongoLogo,
  },
  {
    name: "Javascript",
    icon: jsLogo,
  },
  {
    name: "Typescript",
    icon: tsLogo,
  },
  {
    name: "NextJS",
    icon: nextLogo,
  },
  {
    name: "Github",
    icon: gitLogo,
  },
  {
    name: "Tailwind",
    icon: tailwindLogo,
  },
  {
    name: "Framer Motion",
    icon: fmLogo,
  },
  {
    name: "Figma",
    icon: figmaLogo,
  },
  {
    name: "Python",
    icon: pyLogo,
  },
] as const;
