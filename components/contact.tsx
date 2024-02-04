"use client";
import React from "react";
import SectionHeader from "./sectionHeader";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import Submit from "./submit";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.4);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 mt-[7rem] w-[min(100%,40rem)] scroll-mt-[6.5rem] px-4 text-center  sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="mt-3 text-gray-700 dark:text-gray-400">
        Please contact me at{" "}
        <a
          href="mailto:vigneshkathiresan@outlook.com"
          className="underline decoration-primary"
        >
          vigneshkathiresan@outlook.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="text"
          name="name"
          className="h-14 rounded-lg border border-black/10 p-4 focus:outline-primary active:outline-primary dark:bg-white/10"
          required
          maxLength={500}
          placeholder="Your name"
        />
        <input
          type="email"
          name="senderEmail"
          className="mt-3 h-14  rounded-lg border border-black/10 p-4 focus:outline-primary active:outline-primary dark:bg-white/10"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          placeholder="Your message"
          name="msg"
          className="my-3 h-52 rounded-lg border-black/10 p-4 focus:outline-primary active:outline-primary dark:bg-white/10"
          required
          maxLength={5000}
        />
        <Submit />
      </form>
    </motion.section>
  );
}
