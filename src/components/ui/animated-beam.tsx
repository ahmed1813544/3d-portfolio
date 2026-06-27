"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedBeam({
  className,
  beamClassName,
}: {
  className?: string;
  beamClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 1)" />
            <stop offset="60%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1={dimensions.height / 2}
          x2={dimensions.width}
          y2={dimensions.height / 2}
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          className={cn("animate-[beam_3s_ease-in-out_infinite]", beamClassName)}
        />
      </svg>
      <style>{`
        @keyframes beam {
          0% { opacity: 0.3; transform: translateX(-100%); }
          50% { opacity: 1; }
          100% { opacity: 0.3; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
