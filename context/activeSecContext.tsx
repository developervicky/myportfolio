"use client";
import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSecContextProvider = {
  activeSec: SectionName;
  setActiveSec: React.Dispatch<React.SetStateAction<SectionName>>;
  timeofLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSecContext = createContext<ActiveSecContextProvider | null>(null);

export default function ActiveSecContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSec, setActiveSec] = useState<SectionName>("Home");
  const [timeofLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSecContext.Provider
      value={{
        activeSec,
        setActiveSec,
        timeofLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSecContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSecContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
}
