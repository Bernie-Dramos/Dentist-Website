"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Users, Award } from "lucide-react"

export default function AboutClinic() {
  const features = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada paciente recebe atenção individualizada e um plano de tratamento personalizado.",
    },
    {
      icon: Shield,
      title: "Segurança e Higiene",
      description: "Seguimos os mais rigorosos protocolos de segurança e esterilização.",
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais experientes e certificados, sempre atualizados com as últimas técnicas.",
    },
    {
      icon: Award,
      title: "Excelência Reconhecida",
      description: "Referência em cuidados dentários em Moçambique, com resultados comprovados.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sobre a <span className="text-yellow-500">ODONTO VIDA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A ODONTO VIDA é uma clínica dentária moderna localizada em Maputo, dedicada a proporcionar cuidados
            dentários excepcionais com tecnologia de ponta e uma abordagem centrada no paciente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
