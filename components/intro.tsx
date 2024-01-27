"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import profileImg from "@/public/ProfilePic.jpg";

export default function Intro() {
  return (
    <section className=" flex max-w-[900px] grow flex-col-reverse items-center justify-center gap-6 p-4 sm:flex-row sm:justify-between sm:px-6">
      <div className="flex flex-col gap-6 ">
        <motion.div
          className="flex flex-col gap-2 tracking-wide"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.3,
          }}
        >
          <p className="text-primary font-mono font-semibold sm:text-xl">
            Hello, I'm
          </p>
          <div className="text-2xl !leading-snug sm:text-3xl md:text-4xl">
            <p className="font-bold">Vignesh Kathiresan.</p>
            <p className="decoration-primary text-[19px] font-semibold text-gray-600 underline underline-offset-4  sm:text-[23px] md:text-[29px]">
              Full-Stack Developer
            </p>
          </div>
          <p className="text-[14px] sm:text-base">based in Tamilnadu, India</p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
          }}
        >
          <div className="flex gap-3  font-semibold tracking-wide ">
            <a
              href="/Resume.pdf"
              target="_blank"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-md outline-none  transition hover:scale-105 focus:scale-105 active:scale-105 sm:px-7 sm:py-3 sm:text-base "
            >
              Resume
              <HiDownload className="text-primary transition  group-hover:translate-y-0.5 " />
            </a>
            <Link
              href="#contact"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-md outline-none  transition hover:scale-105 focus:scale-105 active:scale-105 sm:px-7 sm:py-3 sm:text-base "
            >
              Contact Me
              <BsArrowRight className="text-primary transition  group-hover:translate-x-0.5 " />
            </Link>
          </div>
          <div className="flex gap-3 font-semibold tracking-wide ">
            <a
              href="https://www.linkedin.com/in/vignesh-kathiresan-kv/"
              target="_blank"
              className="hover:text-primary group flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-lg shadow-md outline-none transition  hover:scale-105 focus:scale-105 active:scale-105 sm:p-4 sm:text-xl "
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/developervicky"
              target="_blank"
              className="hover:text-primary group group flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 text-lg shadow-md outline-none transition  hover:scale-105 focus:scale-105 active:scale-105 sm:p-4 sm:text-xl "
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.2,
        }}
      >
        <Image
          src={profileImg}
          alt="profileImg"
          priority={true}
          quality="100"
          className=" h-72 w-72 rounded-full border-[0.35rem] border-white object-cover shadow-xl sm:h-48 sm:w-48 md:h-80 md:w-80"
        />
      </motion.div>
    </section>
  );
}
