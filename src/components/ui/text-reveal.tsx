"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("text-reveal-container inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
        >
          <span
            className="inline-block transition-transform duration-700 ease-out"
            style={{
              transitionDelay: `${i * 50}ms`,
              transform: "translateY(100%)",
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
      <style>{`
        .text-reveal-container.revealed span span {
          transform: translateY(0) !important;
        }
      `}</style>
    </span>
  );
}
