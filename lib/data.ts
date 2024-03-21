import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import studentSpaceImg from "@/public/studentSpace.jpg";
import tripRoverImg from "@/public/tripRover.jpg";
import shareThoughtsImg from "@/public/shareThoughts.jpg";
import bookEventImg from "@/public/bookEvent.jpg";
import foodieImg from "@/public/foodie.jpg";
import docAIImg from "@/public/docAI.jpg";
import DMMEImg from "@/public/DMME.jpg";
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
import { FiExternalLink, FiFigma } from "react-icons/fi";

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

export const pathData = [
  {
    title: "B.Tech Computer Science & Engineering",
    organization: "SRM University, Ramapuram",
    location: "Chennai, India",
    gpa: "8.94/10",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Higher Secondary School",
    organization: "Sri Krishnaswamy Matriculation Higher Secondary School",
    location: "Chennai, India",
    gpa: "66.3%",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Secondary School",
    organization: "Sri Krishnaswamy Matriculation Higher Secondary School",
    location: "Chennai, India",
    gpa: "91%",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "doc.AI",
    description:
      "A web application for chatting with your PDF documents integrated with openAI. Free and Pro plans were available and provided limited application features based on the plan.",
    tags: [
      "NextJS",
      "TypeScript",
      "NeonTech",
      "Tailwind",
      "Shadcn",
      "Prisma",
      "openAI",
      "tRPC",
      "zod",
      "Stripe",
      "UploadThing",
    ],
    imageUrl: docAIImg,
    website: "https://doc--ai.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://doc--ai.vercel.app/",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/docai",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "bookEvent",
    description:
      "A CRUD application for booking events. The user friendly place to book your events at few steps.",
    tags: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "MongoDB",
      "Tailwind",
      "Shadcn",
      "zod",
      "React-Hook Form",
      "Kinde",
      "Stripe",
      "UploadThing",
    ],
    imageUrl: bookEventImg,
    website: "https://event-book.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://event-book.vercel.app/",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/bookEvent",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "DMME",
    description:
      "A real-time chat application with 100% data privacy. The user friendly interface to chat with your fellas and also have group chat feature.",
    tags: [
      "NextJS",
      "TypeScript",
      "NodeJS",
      "MongoDB",
      "Prisma",
      "Tailwind",
      "Next-Auth",
      "React-Hook Form",
      "Pusher",
    ],
    imageUrl: DMMEImg,
    website: "https://dmme-chat.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://dmme-chat.vercel.app/",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/dmme",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "tripRover",
    description:
      "A CRUD application for booking accommodations that are responsive and gives accommodation owners andbookers access to their own dashboards for managing their reservations",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: tripRoverImg,
    website: "https://triprover.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://triprover.vercel.app/",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/tripRover",
        icon: React.createElement(FaGithub),
      },
    ],
  },

  {
    title: "shareThoughts",
    description:
      "A CRUD application for sharing your thought without getting back any judgemental notes at this modern world.",
    tags: [
      "NextJS",
      "React",
      "MongoDB",
      "NextAuth",
      "Tailwind",
      "Framer-Motion",
    ],
    imageUrl: shareThoughtsImg,
    website: "https://sharethoughts.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://sharethoughts.vercel.app/",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/shareThoughts",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "studentSpace",
    description:
      "A social media platform for college campuses, facilitating seamless collaboration andknowledge exchange among students, faculty, staff, and community members",
    tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    imageUrl: studentSpaceImg,
    website: "https://studentspaces.vercel.app/",
    links: [
      {
        name: "website",
        link: "https://studentspaces.vercel.app/",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "github",
        link: "https://github.com/developervicky/studentSpace",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "Foodie",
    description:
      "Designed a food delivery application’s user interface using Figma. The design is smartphone-based.",
    tags: ["Figma"],
    imageUrl: foodieImg,
    website:
      "https://www.figma.com/proto/QencsTZr5puXlHeUQaCK2Y/Foodie---Mockup?type=design&node-id=1-2&t=DeTZu3xCn3EMbC0U-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
    links: [
      {
        name: "doc",
        link: "https://docs.google.com/presentation/d/1SH5z5Gbje7qCqds2oh9GgbD8eygX65V3LzewpkX7pA4/edit?usp=sharing",
        icon: React.createElement(FiExternalLink),
      },
      {
        name: "figma",
        link: "https://www.figma.com/proto/QencsTZr5puXlHeUQaCK2Y/Foodie---Mockup?type=design&node-id=1-2&t=DeTZu3xCn3EMbC0U-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
        icon: React.createElement(FiFigma),
      },
    ],
  },
] as const;

export const skillsData = [
  {
    name: "NextJS",
    icon: nextLogo,
  },
  {
    name: "ReactJS",
    icon: reactLogo,
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
