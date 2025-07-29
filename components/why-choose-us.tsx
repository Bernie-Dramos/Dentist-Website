"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Star, Users } from "lucide-react"

export default function WhyChooseUs() {
  const stats = [
    { icon: Users, number: "10.000+", label: "Sorrisos Criados" },
    { icon: Star, number: "15+", label: "Anos de Experiência" },
    { icon: CheckCircle, number: "98%", label: "Satisfação dos Pacientes" },
    { icon: Clock, number: "24/7", label: "Suporte de Emergência" },
  ]

  const benefits = [
    "Tecnologia de última geração para diagnósticos precisos",
    "Tratamentos minimamente invasivos e indolores",
    "Planos de pagamento flexíveis e acessíveis",
    "Ambiente acolhedor e confortável",
    "Equipe multilíngue (Português, Inglês, Changana)",
    "Localização central em Maputo com fácil acesso",
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que Escolher a <span className="text-yellow-500">ODONTO VIDA</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos a escolha preferida de milhares de moçambicanos que confiam em nossos cuidados dentários excepcionais.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-yellow-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
