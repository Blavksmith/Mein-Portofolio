import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/Blavksmith"
            className="p-3 bg-background border border-border rounded-lg hover:bg-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/melvin-jordan-a07862330/"
            className="p-3 bg-background border border-border rounded-lg hover:bg-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:melvin11278@gmail.com"
            className="p-3 bg-background border border-border rounded-lg hover:bg-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  )
}
