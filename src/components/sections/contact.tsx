"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagicCard } from "@/components/ui/magic-card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen py-32"
    >
      <BackgroundGradientAnimation />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div ref={contentRef}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-purple-400">
              Get In Touch
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have a project in mind or just want to chat? I&apos;d love to hear
              from you. Let&apos;s create something extraordinary together.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <MagicCard>
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a
                      href="mailto:hello@example.com"
                      className="text-muted-foreground transition-colors hover:text-purple-400"
                    >
                      hello@example.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Social</h3>
                    <div className="mt-2 flex gap-4">
                      {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map(
                        (social) => (
                          <a
                            key={social}
                            href="#"
                            className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
                          >
                            {social}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </div>

            {/* Contact Form */}
            <MagicCard>
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </button>
              </form>
            </MagicCard>
          </div>
        </div>
      </div>
    </section>
  );
}
