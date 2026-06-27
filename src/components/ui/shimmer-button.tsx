"use client";

import { cn } from "@/lib/utils";

export function ShimmerButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20",
        "before:absolute before:inset-0 before:-z-10 before:animate-[shimmer_3s_infinite] before:bg-[length:200%_100%] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className
      )}
      {...props}
    >
      {children}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </button>
  );
}
