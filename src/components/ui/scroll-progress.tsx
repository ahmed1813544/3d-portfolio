"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 h-[2px] origin-left bg-gradient-to-r from-purple-500 to-blue-500",
        className
      )}
      style={{ transform: `scaleX(${progress})`, width: "100%" }}
    />
  );
}
