import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Integrations"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Support", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookies", "Compliance"],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/autobotwa-footer-icon.jpg"
                alt="Autobotwa"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">Autobotwa</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">Workflow automation for modern teams.</p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="font-semibold text-foreground">{category}</h4>
              <nav className="mt-4 space-y-2">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 Autobotwa. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Made with ♥ by the Autobotwa team</p>
        </div>
      </div>
    </footer>
  )
}
