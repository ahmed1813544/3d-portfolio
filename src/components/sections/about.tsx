"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutScene } from "@/components/three/about-scene";
import { AnimatedBeam } from "@/components/ui/animated-beam";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "20+" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-32"
    >
      <AboutScene />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div ref={contentRef}>
          <div className="mb-16">
            <span className="text-sm font-medium uppercase tracking-widest text-purple-400">
              About Me
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Passionate about creating
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}digital experiences
              </span>
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m a full-stack developer and designer with a passion for
                creating immersive digital experiences. My work sits at the
                intersection of technology and creativity, where I blend
                cutting-edge web technologies with thoughtful design.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With expertise in React, Three.js, and modern web APIs, I build
                interactive 3D experiences that push the boundaries of what&apos;s
                possible on the web. I believe that great software should not
                only function flawlessly but also delight users at every
                interaction.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me exploring new design
                trends, experimenting with generative art, or contributing to
                open-source projects.
              </p>
            </div>

            <div className="relative">
              <AnimatedBeam className="h-full" />

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
