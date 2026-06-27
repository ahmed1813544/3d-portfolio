"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagicCard } from "@/components/ui/magic-card";
import { Globe } from "@/components/ui/globe";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Immersive 3D Web Experience",
    description:
      "An interactive 3D portfolio featuring real-time rendering, physics-based animations, and dynamic lighting using Three.js and React Three Fiber.",
    tags: ["Three.js", "React", "WebGL", "GSAP"],
    image: "from-purple-600/20 to-blue-600/20",
    link: "#",
  },
  {
    title: "AI-Powered Dashboard",
    description:
      "Real-time analytics dashboard with AI-driven insights, interactive data visualizations, and responsive design for enterprise clients.",
    tags: ["Next.js", "TypeScript", "D3.js", "OpenAI"],
    image: "from-blue-600/20 to-cyan-600/20",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with 3D product previews, AR try-on features, and seamless checkout experience.",
    tags: ["Next.js", "Stripe", "Three.js", "Tailwind"],
    image: "from-violet-600/20 to-purple-600/20",
    link: "#",
  },
  {
    title: "Creative Agency Site",
    description:
      "Award-winning creative agency website with scroll-driven animations, interactive galleries, and immersive storytelling.",
    tags: ["React", "GSAP", "Framer Motion", "Sanity"],
    image: "from-pink-600/20 to-rose-600/20",
    link: "#",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Collaborative workspace with live cursors, document editing, video calls, and project management features.",
    tags: ["WebSocket", "React", "Node.js", "Redis"],
    image: "from-emerald-600/20 to-teal-600/20",
    link: "#",
  },
  {
    title: "Generative Art Platform",
    description:
      "Creative coding platform where users can create, share, and collect algorithmic art pieces using custom shaders.",
    tags: ["WebGL", "GLSL", "React", "IPFS"],
    image: "from-amber-600/20 to-orange-600/20",
    link: "#",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <a href={project.link} className="group block">
      <MagicCard className="h-full">
        <div className="flex h-full flex-col p-6">
          {/* Image placeholder with gradient */}
          <div
            className={`mb-4 h-48 rounded-lg bg-gradient-to-br ${project.image} border border-white/5`}
          >
            <div className="flex h-full items-center justify-center opacity-20 transition-opacity group-hover:opacity-40">
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-purple-400">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 transition-opacity group-hover:opacity-100">
            View Project
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </MagicCard>
    </a>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      gsap.from(gridRef.current?.children || [], {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-32"
    >
      {/* Background globe */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="h-[600px] w-[600px]">
          <Globe />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div ref={headingRef} className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-purple-400">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects that showcase my expertise in building
            immersive digital experiences.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
