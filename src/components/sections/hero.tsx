"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { HeroScene } from "@/components/three/hero-scene";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(headingRef.current, { y: 80, opacity: 0, duration: 1.2 })
        .from(subRef.current, { y: 40, opacity: 0, duration: 1 }, "-=0.7")
        .from(buttonsRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <BackgroundGradientAnimation />
      <HeroScene />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1
          ref={headingRef}
          className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent">
            Creative
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Developer & Designer
          </span>
        </h1>

        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Crafting immersive digital experiences at the intersection of code and
          design. Specializing in 3D web experiences and modern interfaces.
        </p>

        <div ref={buttonsRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ShimmerButton>
            <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
              View My Work
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </ShimmerButton>

          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">Scroll</span>
            <div className="h-10 w-5 rounded-full border border-white/20">
              <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
