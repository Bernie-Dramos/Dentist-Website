import Hero from "@/components/hero"
import AboutClinic from "@/components/about-clinic"
import FeaturedProcedures from "@/components/featured-procedures"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutClinic />
      <FeaturedProcedures />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
