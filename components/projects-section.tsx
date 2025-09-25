import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "TaskMaster",
    description:
      "A comprehensive task management platform built with Next.js and Supabase. Features real-time collaboration, project organization, and deadline tracking.",
    tech: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    image: "",
    website: "#",
    github: "#",
  },
  {
    name: "Project 2",
    description:
      "Modern social media platform with real-time messaging, post sharing, and user interactions. Built with scalable architecture and responsive design.",
    tech: ["Next.js", "MongoDB", "Socket.io", "React"],
    image: "",
    website: "#",
    github: "#",
  },
  {
    name: "Projectt 3",
    description:
      "Environmental impact tracking application that helps users monitor their carbon footprint and adopt sustainable practices.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    image: "",
    website: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 scroll-animate">
          <div className="newspaper-border bg-card p-6 inline-block">
            <h2 className="text-4xl newspaper-headline text-foreground mb-2">
              PROJECTS
            </h2>
            <p className="newspaper-subhead text-muted-foreground">
              Every project marks a new chapter in my coding journey.
            </p>
          </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">{project.name}</h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Website
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="mr-2 w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
