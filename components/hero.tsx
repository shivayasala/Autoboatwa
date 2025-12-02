import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl opacity-40" />
        <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Simplify Your Workflow{" "}
            <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 bg-clip-text text-transparent">
              with Autobotwa
            </span>
          </h1>
          <p className="mt-6 text-balance text-base text-muted-foreground sm:text-lg">
            Automate repetitive tasks, boost team productivity, and focus on what matters. Autobotwa brings intelligent
            automation to every corner of your workflow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-border hover:bg-secondary/50 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Get instant access to all features.
          </p>
        </div>
      </div>
    </section>
  )
}
