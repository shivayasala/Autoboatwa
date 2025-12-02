import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-gradient-to-br from-primary/20 via-card to-accent/10 p-8 sm:p-12 lg:p-16 shadow-lg shadow-primary/10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to transform your workflow?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of teams already using Autobotwa to automate their work and boost productivity.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base border-border hover:bg-secondary/50 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            30-day free trial. No credit card required. Full access to all features.
          </p>
        </div>
      </div>
    </section>
  )
}
