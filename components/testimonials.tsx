import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content:
      "Autobotwa transformed how our team works. We've cut our manual processing time by 70% and can now focus on strategic initiatives.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Operations Director at Global Inc",
    content:
      "The integration capabilities are outstanding. We connected our entire workflow in hours, not weeks. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO at StartupXYZ",
    content:
      "From day one, Autobotwa felt like it was built for our exact needs. The support team is incredibly responsive and helpful.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Loved by teams worldwide</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what our customers have to say about Autobotwa.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card-hover relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-br from-primary/20 to-primary/10 p-8 backdrop-blur-sm transition-all duration-400 hover:border-pink-500/60"
              style={{
                animation: `zoomInStaggered 0.6s ease-out ${index * 0.15}s forwards`,
                opacity: 0,
              }}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-foreground">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
