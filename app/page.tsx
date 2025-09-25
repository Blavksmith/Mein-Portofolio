import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechSection } from "@/components/tech-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-provider"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* <ThemeToggle className="fixed bottom-4 right-4 z-50 md:right-8 md:top-6" /> */}
      <ThemeToggle className="fixed top-1/2 right-4 translate-y-1/3 z-1000" />


      <main className="ml-64">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  )
}
