"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ParallaxScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      setScrollY((centerY - windowCenter) * 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className="transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(${scrollY}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
