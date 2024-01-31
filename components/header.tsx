"use client";
import React from "react";
import { motion, spring } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSecContext";

export default function Header() {
  const { activeSec, setActiveSec, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 flex h-[5.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 130,
          duration: 1,
        }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.55rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-3 font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative flex h-3/4 items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 130,
                duration: 1,
              }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-[7px] py-3 transition hover:text-gray-950",
                  {
                    " text-gray-950 ": activeSec === link.name,
                  },
                )}
                onClick={() => {
                  setActiveSec(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {activeSec === link.name && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-primary/[0.12]"
                    layoutId="activeSec"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
