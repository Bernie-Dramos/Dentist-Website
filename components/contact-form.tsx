"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-2 border-green-500/20 bg-green-50">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 mb-4">Mensagem Enviada!</h3>
            <p className="text-green-600">Obrigado pelo seu contacto. Responderemos em breve!</p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
      <Card className="border-2 border-yellow-500/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-black flex items-center space-x-2">
            <Send className="h-6 w-6 text-yellow-500" />
            <span>Entre em Contato</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-black font-medium">
                  Nome *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-black font-medium">
                Assunto *
              </Label>
              <Input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Assunto da sua mensagem"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-black font-medium">
                Mensagem *
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                placeholder="Escreva a sua mensagem aqui..."
              />
            </div>

            <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
