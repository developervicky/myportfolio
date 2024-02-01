import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h1
      className="text-xl font-semibold sm:text-3xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </motion.h1>
  );
}
