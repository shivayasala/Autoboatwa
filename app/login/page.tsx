"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      alert("Welcome back! (Demo)")
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-background/95">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </header>

        {/* Login Form */}
        <div className="flex flex-1 items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
              <p className="mt-2 text-muted-foreground">Sign in to your Autobotwa account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="font-medium text-primary transition-colors hover:text-primary/80">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
