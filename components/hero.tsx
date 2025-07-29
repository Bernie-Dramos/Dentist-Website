"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Animated tooth component
const AnimatedTooth = ({ delay = 0, x = 0, y = 0, scale = 1 }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      scale: [scale * 0.8, scale * 1.2, scale * 0.8],
      x: [x, x + 30, x - 20, x],
      y: [y, y - 40, y + 20, y],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
      <path
        d="M12 2C8.5 2 6 4.5 6 8C6 10 6.5 11.5 7.5 12.5C8.5 13.5 10 14 12 14C14 14 15.5 13.5 16.5 12.5C17.5 11.5 18 10 18 8C18 4.5 15.5 2 12 2Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M12 14C10 14 8.5 15 8 16C7.5 17 7.5 18 8 19C8.5 20 10 21 12 21C14 21 15.5 20 16 19C16.5 18 16.5 17 16 16C15.5 15 14 14 12 14Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  </motion.div>
)

// Sparkle component
const Sparkle = ({ delay = 0, x = 0, y = 0 }) => (
  <motion.div
    className="absolute pointer-events-none"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
    style={{ left: x, top: y }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  </motion.div>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 0 50 10 T100 10 V20 H0 Z" fill="url(#gradient)" />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FFA500" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#waves)" />
        </svg>
      </div>

      {/* Animated Teeth */}
      <AnimatedTooth delay={0} x={100} y={100} scale={1} />
      <AnimatedTooth delay={1} x={200} y={300} scale={0.8} />
      <AnimatedTooth delay={2} x={300} y={150} scale={1.2} />
      <AnimatedTooth delay={3} x={500} y={250} scale={0.9} />
      <AnimatedTooth delay={4} x={700} y={180} scale={1.1} />
      <AnimatedTooth delay={5} x={800} y={320} scale={0.7} />
      <AnimatedTooth delay={6} x={150} y={400} scale={1.3} />
      <AnimatedTooth delay={7} x={600} y={80} scale={0.8} />
      <AnimatedTooth delay={8} x={400} y={380} scale={1} />
      <AnimatedTooth delay={9} x={750} y={120} scale={0.9} />
      <AnimatedTooth delay={10} x={50} y={250} scale={1.1} />
      <AnimatedTooth delay={11} x={900} y={280} scale={0.8} />

      {/* Sparkles */}
      <Sparkle delay={0.5} x={180} y={120} />
      <Sparkle delay={2.5} x={320} y={280} />
      <Sparkle delay={4.5} x={520} y={160} />
      <Sparkle delay={6.5} x={720} y={300} />
      <Sparkle delay={8.5} x={120} y={350} />
      <Sparkle delay={10.5} x={620} y={200} />
      <Sparkle delay={12.5} x={820} y={140} />
      <Sparkle delay={14.5} x={420} y={340} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Image src="/logo.jpg" alt="ODONTO VIDA Logo" width={300} height={200} className="mx-auto mb-6" priority />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          <span className="text-yellow-400">Sorrir</span> com Confiança
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
        >
          Cuidar com <span className="text-yellow-400 font-semibold">Excelência</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Transformamos sorrisos com tecnologia avançada e cuidado personalizado. Sua saúde bucal é nossa prioridade em
          Moçambique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/catalogo">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              Explorar Procedimentos
            </Button>
          </Link>
          <Link href="/marcacao">
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Marcar Consulta
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
