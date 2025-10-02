"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Code, Newspaper } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 opacity-10">
        {/* Floating newspaper icons */}
        <div className="absolute top-2/8 left-1/7 animate-float3d">
          <Newspaper className="w-28 h-16 text-primary" />
        </div>
        <div
          className="absolute bottom-1/6 right-1/5 animate-drift"
          style={{ animationDelay: "1s" }}
        >
          <FileText className="w-20 h-18 text-primary" />
        </div>
        <div
          className="absolute top-4/9 right-1/11 animate-rotate3d"
          style={{ animationDelay: "4s" }}
        >
          <Code className="w-40 h-24 text-primary" />
        </div>

        {/* 3D geometric shapes */}
        <div
          className="absolute top-2/5 right-6/7 w-20 h-20 border-2 border-primary animate-float3d"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/2 left-6/9 w-16 h-16 bg-primary/20 animate-drift"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-2/3 left-7/8 w-12 h-12 border border-primary rotate-45 animate-rotate3d"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="absolute top-8 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="newspaper-border bg-background p-4">
            <div className="text-center">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono">EST. 2025</div>
                <div className="text-xs font-mono">INDONESIA</div>
              </div>
              <h2 className="text-2xl font-bold newspaper-headline tracking-wider">
                THE DEVELOPER TIMES
              </h2>
              <div className="text-xs newspaper-subhead mt-1 mb-3">
                Daily Updates from the Tech World
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10 mt-32">
        <div className="scroll-animate">
          <h1 className="text-6xl md:text-8xl newspaper-headline text-foreground mb-6 text-balance">
            Melvin Jordan
            <br />
            <span className="text-primary">Pangestu</span>
          </h1>
        </div>

        <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl newspaper-subhead text-muted-foreground mb-2">
            "Breaking News in Web Development"
          </p>
        </div>

        <div className="scroll-animate" style={{ animationDelay: "0.4s" }}>
          <div className="newspaper-columns max-w-3xl mx-auto mb-8 text-left">
            <p className="newspaper-body text-base leading-relaxed">
              A Computer Science student passionate about
              crafting modern web applications. I enjoy exploring new
              technologies, building interactive user experiences, and
              continuously learning to grow as future skilled Web Developer.
            </p>
          </div>
        </div>

        <div className="scroll-animate" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 group newspaper-border bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Read Full Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 newspaper-border bg-transparent"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-border" />
        <div className="h-2 bg-border/20" />
        <div className="h-px bg-border" />
      </div>
    </section>
  );
}
