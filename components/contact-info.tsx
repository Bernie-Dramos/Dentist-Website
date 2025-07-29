"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Telefone",
      info: "+258 123 456 789",
      action: "tel:+258123456789",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@odontovida.co.mz",
      action: "mailto:contato@odontovida.co.mz",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Julius Nyerere, 123\nMaputo, Moçambique",
      action: null,
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda - Sexta: 08:00 - 18:00\nSábado: 08:00 - 13:00",
      action: null,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <Card className="border-2 border-yellow-500/20">
        <CardHeader>
          <CardTitle className="text-2xl text-black">Informações de Contato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <detail.icon className="h-5 w-5 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-black mb-1">{detail.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{detail.info}</p>
                {detail.action && (
                  <Button asChild variant="link" className="p-0 h-auto text-yellow-500 hover:text-yellow-600">
                    <a href={detail.action}>Contactar</a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Contact Actions */}
      <Card className="border-2 border-yellow-500/20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <CardHeader>
          <CardTitle className="text-xl text-black">Contacto Rápido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <a href="tel:+258123456789" className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Ligar Agora</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
          >
            <a href="https://wa.me/258123456789" className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white bg-transparent"
          >
            <a href="https://instagram.com/odontovida" className="flex items-center justify-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-2 border-red-500/20 bg-red-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-red-700 mb-2 flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Emergências Dentárias</span>
          </h3>
          <p className="text-red-600 mb-3">Para emergências fora do horário de funcionamento:</p>
          <Button asChild variant="destructive" className="w-full">
            <a href="tel:+258123456789">Ligar para Emergência</a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
