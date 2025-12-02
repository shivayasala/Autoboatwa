import { Zap, BarChart3, Lock, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process tasks at incredible speed with our optimized automation engine. Save hours of manual work daily.",
    bgImage: "/images/automation-bg-1.jpg",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance metrics in real-time. Get actionable insights to improve your workflow efficiency.",
    bgImage: "/images/automation-bg-2.jpg",
  },
  {
    icon: Lock,
    title: "Bank-level Security",
    description: "Your data is protected with enterprise-grade encryption and compliance with international standards.",
    bgImage: "/images/automation-bg-3.jpg",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams. Collaborate seamlessly with role-based access and comprehensive audit trails.",
    bgImage: "/images/automation-bg-4.jpg",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful features built for you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to transform your workflow and unlock your team's potential.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`feature-card-hover relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-card to-secondary p-6 animate-zoom-in-stagger-${index + 1}`}
                style={{
                  backgroundImage: `url(${feature.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  animation: `zoomInStaggered 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />

                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
