"use client";

import { useEffect, useRef } from "react";
import {
  SiC,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiTailwindcss,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

const technologies = [
  { name: "C", category: "Language", icon: SiC },
  { name: "Java", category: "Language", icon: DiJava },
  { name: "JavaScript", category: "Language", icon: SiJavascript },
  { name: "TypeScript", category: "Language", icon: SiTypescript },
  { name: "React", category: "Framework", icon: SiReact },
  { name: "Next.js", category: "Framework", icon: SiNextdotjs },
  { name: "Node.js", category: "Runtime", icon: SiNodedotjs },
  { name: "Git", category: "Tool", icon: SiGit },
  { name: "Figma", category: "Design", icon: SiFigma },
  { name: "Tailwind", category: "Styling", icon: SiTailwindcss },
  { name: "Supabase", category: "Database", icon: SiSupabase },
  { name: "Vercel", category: "Hosting", icon: SiVercel },
];

export function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".tech-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="py-20 border-b-2 border-border bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="newspaper-border bg-card p-6 mb-8 inline-block">
            <h2 className="text-4xl newspaper-headline text-foreground mb-2">
              MY TECH STACK
            </h2>
            <p className="newspaper-subhead text-muted-foreground">
              The tools I use to bring ideas to life
            </p>
          </div>

          <div className="max-w-2xl mx-auto newspaper-columns">
            <p className="newspaper-body text-sm">
              Throughout my journey, I’ve explored a variety of technologies,
              from core programming languages to modern frameworks and tools.
              Each of these has shaped the way I approach building projects,
              allowing me to craft applications that are not only functional,
              but also intuitive and enjoyable to use.
            </p>
          </div>
        </div>

        <div className="tech-grid max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card scroll-animate group cursor-pointer"
            >
              <tech.icon className="w-10 h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 text-primary" />
              <div className="text-sm font-bold newspaper-headline text-card-foreground mb-1">
                {tech.name}
              </div>
              <div className="text-xs newspaper-body text-muted-foreground">
                {tech.category}
              </div>

              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block newspaper-border bg-card p-4">
            <p className="text-xs newspaper-body text-muted-foreground">
              "Building for the web is not just about writing code, it's more about
              crafting experience that matter."
            </p>
            <div className="text-xs font-mono mt-2">-My Personal Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
