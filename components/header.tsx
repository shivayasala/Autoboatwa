"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleScrollToHome}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image src="/images/autobotwa-icon.png" alt="Autobotwa" width={32} height={32} className="h-8 w-8" />
            <span className="hidden text-lg font-bold bg-gradient-to-r from-pink-500 to-white bg-clip-text text-transparent sm:inline">
              Autobotwa
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons and WhatsApp Icon */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToHome}
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              aria-label="Scroll to home"
            >
              <MessageCircle className="h-5 w-5 text-accent hover:text-accent/80 transition-colors" />
            </button>

            <div className="hidden items-center gap-4 md:flex">
              <Link href="/login">
                <Button variant="ghost" className="text-sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="text-sm bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-border pb-4 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Testimonials
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full text-sm bg-transparent">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button className="w-full text-sm bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
