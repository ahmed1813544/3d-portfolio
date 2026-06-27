"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SkillsScene } from "@/components/three/skills-scene";
import { LampContainer } from "@/components/ui/lamp";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js / WebGL", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "GSAP", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS / Vercel", level: 82 },
      { name: "CI/CD", level: 78 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(barRef.current, {
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 90%",
        },
        scaleX: 0,
        duration: 1.2,
        delay,
        ease: "power3.out",
        transformOrigin: "left",
      });
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative min-h-screen py-32">
      <SkillsScene />

      <LampContainer className="py-0">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div ref={headingRef} className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-purple-400">
              Expertise
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Skills &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="mb-6 text-lg font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </LampContainer>
    </section>
  );
}
