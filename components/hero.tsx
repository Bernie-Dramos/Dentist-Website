"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Teeth Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>

        {/* Animated Floating Teeth */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500/20"
            initial={{
              x: Math.random() * window?.innerWidth || 1200,
              y: Math.random() * window?.innerHeight || 800,
            }}
            animate={{
              x: [
                Math.random() * (window?.innerWidth || 1200),
                Math.random() * (window?.innerWidth || 1200),
                Math.random() * (window?.innerWidth || 1200),
              ],
              y: [
                Math.random() * (window?.innerHeight || 800),
                Math.random() * (window?.innerHeight || 800),
                Math.random() * (window?.innerHeight || 800),
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-30">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2.5 4.5C9.5 13.5 10.5 14 12 14s2.5-0.5 3.5-1.5C17 11.5 18 10 18 8c0-3.5-2.5-6-6-6zm0 2c2.5 0 4 1.5 4 4 0 1.5-0.5 2.5-1.5 3.5-0.5 0.5-1 0.5-1.5 0.5h-2c-0.5 0-1 0-1.5-0.5C8.5 10.5 8 9.5 8 8c0-2.5 1.5-4 4-4z" />
              <path d="M12 14c-2 0-4 1-5 3-0.5 1-0.5 2 0 3 0.5 0.5 1 0.5 1.5 0.5h7c0.5 0 1 0 1.5-0.5 0.5-1 0.5-2 0-3-1-2-3-3-5-3z" />
            </svg>
          </motion.div>
        ))}

        {/* Additional smaller sparkle teeth */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-yellow-500/30"
            initial={{
              x: Math.random() * (window?.innerWidth || 1200),
              y: Math.random() * (window?.innerHeight || 800),
              scale: 0.5,
            }}
            animate={{
              x: [Math.random() * (window?.innerWidth || 1200), Math.random() * (window?.innerWidth || 1200)],
              y: [Math.random() * (window?.innerHeight || 800), Math.random() * (window?.innerHeight || 800)],
              scale: [0.3, 0.7, 0.3],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
              <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            ODONTO <span className="text-yellow-500">VIDA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Sorrir com Confiança, Cuidar com Excelência
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Oferecemos cuidados dentários de qualidade superior em Moçambique, combinando tecnologia avançada com
            atendimento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg"
            >
              <Link href="/catalogo">Explorar Procedimentos</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/marcacao">Marcar Consulta</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
