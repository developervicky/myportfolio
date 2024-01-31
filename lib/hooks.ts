import { useActiveSectionContext } from "@/context/activeSecContext";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75,) {
  const { ref, inView } = useInView({
    threshold
  });

  const { setActiveSec, timeofLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeofLastClick > 1000) {
      setActiveSec(sectionName);
    }
  }, [inView, setActiveSec, timeofLastClick, sectionName]);

  return { ref };
}
