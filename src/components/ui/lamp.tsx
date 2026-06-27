"use client";

import { cn } from "@/lib/utils";

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[4px] bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        <div className="absolute top-[calc(50%-2px)] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent blur-xl" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
