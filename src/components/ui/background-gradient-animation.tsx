"use client";

import { cn } from "@/lib/utils";

export function BackgroundGradientAnimation({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-[40%] -left-[20%] size-[60%] rounded-full bg-purple-600/20 blur-[120px] animate-[float1_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-[30%] -right-[10%] size-[50%] rounded-full bg-blue-600/20 blur-[120px] animate-[float2_10s_ease-in-out_infinite]" />
      <div className="absolute top-[20%] right-[10%] size-[40%] rounded-full bg-violet-600/15 blur-[100px] animate-[float3_12s_ease-in-out_infinite]" />
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 30px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -40px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </div>
  );
}
