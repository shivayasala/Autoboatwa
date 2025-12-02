import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TrustedBy from "@/components/trusted-by"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <TrustedBy />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
