import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: 49,
    features: ["Up to 1,000 automations/month", "Basic integrations", "Email support", "Community access"],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For growing teams and businesses",
    price: 149,
    features: [
      "Up to 50,000 automations/month",
      "Advanced integrations",
      "Priority support",
      "Custom workflows",
      "Team management",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    features: [
      "Unlimited automations",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Advanced security",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your team. Always flexible and scalable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border p-8 transition-all ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/20 to-accent/10 ring-2 ring-primary/50 shadow-lg shadow-primary/20"
                  : "border-border bg-gradient-to-br from-card to-secondary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              }`}
              style={{
                animation: `zoomInStaggered 0.6s ease-out ${index * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-6">
                {typeof plan.price === "number" ? (
                  <div>
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                )}
              </div>

              <Button className="mt-8 w-full" variant={plan.highlighted ? "default" : "outline"}>
                Get Started
              </Button>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
