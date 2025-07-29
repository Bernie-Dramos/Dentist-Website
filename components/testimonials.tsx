"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Maputo",
      text: "A ODONTO VIDA transformou completamente o meu sorriso! O atendimento é excepcional e os resultados superaram todas as minhas expectativas.",
      rating: 5,
    },
    {
      name: "João Machel",
      location: "Matola",
      text: "Profissionais muito competentes e equipamentos modernos. Finalmente encontrei uma clínica dentária de confiança em Moçambique.",
      rating: 5,
    },
    {
      name: "Ana Cossa",
      location: "Maputo",
      text: "O tratamento de ortodontia foi perfeito. Equipe muito atenciosa e ambiente muito limpo e organizado. Recomendo a todos!",
      rating: 5,
    },
    {
      name: "Carlos Mondlane",
      location: "Beira",
      text: "Excelente experiência! Desde a marcação até o tratamento, tudo foi muito profissional. Voltarei sempre que precisar.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que Dizem os Nossos <span className="text-yellow-500">Pacientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é a nossa maior recompensa. Veja o que eles têm a dizer sobre os nossos
            serviços.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-yellow-500/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="font-semibold text-black text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-500">{testimonials[currentIndex].location}</div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
