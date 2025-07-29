import React from "react"
import Hero from "@/components/hero"
import AboutClinic from "@/components/about-clinic"
import FeaturedProcedures from "@/components/featured-procedures"
import WhyChooseUs from "@/components/why-choose-us"
import CallToAction from "@/components/call-to-action"
import Testimonials from "@/components/testimonials"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutClinic />
      <FeaturedProcedures />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
