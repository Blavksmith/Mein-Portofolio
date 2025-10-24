"use client";

import { Button } from "@/components/ui/button";
import { User, MapPin, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-animate");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate");
              }, index * 200);
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
      id="about"
      className="py-20 border-b-2 border-border bg-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <div className="newspaper-border bg-card p-6 inline-block">
            <h2 className="text-4xl newspaper-headline text-foreground mb-2">
              ABOUT ME
            </h2>
            <p className="newspaper-subhead text-muted-foreground">
              Meet the Developer Behind the Code
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="scroll-animate">
            <div className="newspaper-border bg-card p-8 py-16">
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 newspaper-border flex items-center justify-center mb-4">
                  <div className="w-30 h-32 flex justify-center items-center overflow-hidden border-2 border-primary">
                    <img
                      src="/foto-profils.png"
                      alt="Avatars"
                      width={300}
                      height={300}
                      className="object-cover scale-150"
                    />
                  </div>
                </div>

                <h3 className="text-2xl newspaper-headline text-foreground mb-2">
                  MELVIN JORDAN PANGESTU
                </h3>
                <p className="newspaper-subhead text-primary mb-4">
                  Front-End Developer
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border border-border">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm newspaper-body">
                    Tangerang Selatan, Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm newspaper-body">
                    Available for Internship, Work, and Projects
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm newspaper-body">
                    Expected Graduate 2027
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 scroll-animate">
            <div className="newspaper-border bg-card p-6">
              <h3 className="text-xl newspaper-headline text-foreground mb-4 border-b-2 border-border pb-2">
                THE STORY UNFOLDS
              </h3>

              <div className="newspaper-columns space-y-4">
                <p className="newspaper-body text-muted-foreground leading-relaxed">
                  <span className="float-left text-6xl newspaper-headline text-primary leading-none mr-2 mt-1">
                    E
                  </span>{" "}
                  very line of code I write is more than just syntax. It’s a
                  step in my journey of becoming a creator in the digital world.
                  As a Computer Science student, I started with curiosity,
                  wondering how websites and applications are built. Over time,
                  that curiosity turned into passion for Web Development.
                </p>

                <p className="newspaper-body text-muted-foreground leading-relaxed">
                  From experimenting with small projects to exploring modern
                  frameworks like React and Next.js, I’ve learned that building
                  on the web is not just about functionality, but also about
                  crafting experiences that feel intuitive and engaging.
                </p>

                <p className="newspaper-body text-muted-foreground leading-relaxed">
                  This portfolio represents where I am today and still learning,
                  still growing, but deeply committed to creating solutions that
                  combine logic, design, and impact
                </p>
              </div>
            </div>

            <div className="newspaper-border bg-primary/5 p-6">
              <blockquote className="text-center">
                <p className="text-lg newspaper-subhead text-primary mb-3">
                  "Enthusiasm is common. Endurance is rare."
                </p>
                <footer className="text-sm newspaper-body text-muted-foreground">
                  <p className="text-center">Angela Duckworth</p>
                </footer>
              </blockquote>
            </div>

            <div className="text-center rounded-md">
              <a href="/CV-MelvinJordanPangestu.pdf" download>
                <Button size="lg" variant="default">
                  Download My Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
