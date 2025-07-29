"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fillOpacity='0.2'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para Transformar o Seu <span className="text-yellow-500">Sorriso</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Não espere mais para ter o sorriso dos seus sonhos. Marque a sua consulta hoje mesmo e descubra como podemos
            ajudá-lo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg"
            >
              <Link href="/marcacao">Marcar Consulta Agora</Link>
            </Button>

            <div className="flex items-center space-x-2 text-white">
              <span>ou ligue diretamente:</span>
              <Button asChild variant="link" className="text-yellow-500 hover:text-yellow-400 font-bold text-lg p-0">
                <a href="tel:+258123456789" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+258 123 456 789</span>
                </a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-yellow-500/10 rounded-lg border border-yellow-500/20"
          >
            <p className="text-yellow-500 font-semibold mb-2">✨ Oferta Especial</p>
            <p className="text-white">
              Primeira consulta com 20% de desconto para novos pacientes. Válido até o final do mês!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
