"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarIcon, Shield, CheckCircle, Clock, Bell } from "lucide-react"
import { format } from "date-fns"
import { pt } from "date-fns/locale"
import { procedures } from "@/lib/mock-data"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    procedure: "",
    date: undefined as Date | undefined,
    time: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setShowNotifications(true), 1000)
  }

  const notifications = [
    {
      time: "Uma semana antes",
      message: `Lembrete: Sua consulta de ${formData.procedure} está marcada para ${formData.date ? format(formData.date, "dd/MM/yyyy", { locale: pt }) : "[Data]"}. às ${formData.time}.`,
      icon: Bell,
    },
    {
      time: "Dois dias antes",
      message: `Lembrete: Faltam 2 dias para sua consulta de ${formData.procedure}. Prepare-se!`,
      icon: Clock,
    },
    {
      time: "Quatro horas antes",
      message: `Hoje é sua consulta de ${formData.procedure} às ${formData.time}. Estamos à sua espera!`,
      icon: CheckCircle,
    },
  ]

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-2 border-green-500/20 bg-green-50">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-700 mb-4">Marcação Enviada com Sucesso!</h2>
              <p className="text-green-600 mb-6">
                Receberá uma confirmação em breve. Nossa equipe entrará em contato para confirmar os detalhes da sua
                consulta.
              </p>

              <div className="bg-white p-4 rounded-lg border border-green-200 mb-6">
                <h3 className="font-semibold text-black mb-2">Detalhes da Marcação:</h3>
                <div className="text-left space-y-1 text-gray-700">
                  <p>
                    <strong>Nome:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong>Procedimento:</strong> {formData.procedure}
                  </p>
                  <p>
                    <strong>Data:</strong> {formData.date ? format(formData.date, "dd/MM/yyyy", { locale: pt }) : "N/A"}
                  </p>
                  <p>
                    <strong>Horário:</strong> {formData.time}
                  </p>
                </div>
              </div>

              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-black mb-4">Notificações Automáticas Programadas:</h3>
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Alert className="border-yellow-500/20 bg-yellow-50">
                        <notification.icon className="h-4 w-4 text-yellow-500" />
                        <AlertDescription>
                          <strong className="text-yellow-700">{notification.time}:</strong>
                          <br />
                          <span className="text-gray-700">{notification.message}</span>
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Trust Signals */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center space-x-6 mb-8"
      >
        <div className="flex items-center space-x-2 text-green-600">
          <Shield className="h-5 w-5" />
          <span className="text-sm font-medium">Dados Seguros</span>
        </div>
        <div className="flex items-center space-x-2 text-blue-600">
          <CheckCircle className="h-5 w-5" />
          <span className="text-sm font-medium">Confirmação Rápida</span>
        </div>
        <div className="flex items-center space-x-2 text-purple-600">
          <Bell className="h-5 w-5" />
          <span className="text-sm font-medium">Lembretes Automáticos</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Card className="border-2 border-yellow-500/20 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10">
            <CardTitle className="text-2xl text-center text-black">Marque a Sua Consulta</CardTitle>
            <p className="text-center text-gray-600">Preencha os dados abaixo e entraremos em contato para confirmar</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black font-medium">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    placeholder="Digite o seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black font-medium">
                    Número de Telemóvel *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    placeholder="+258 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-black font-medium">Procedimento *</Label>
                <Select
                  value={formData.procedure}
                  onValueChange={(value) => setFormData({ ...formData, procedure: value })}
                >
                  <SelectTrigger className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500">
                    <SelectValue placeholder="Selecione o procedimento desejado" />
                  </SelectTrigger>
                  <SelectContent>
                    {procedures.map((procedure) => (
                      <SelectItem key={procedure.id} value={procedure.name}>
                        {procedure.name} - {procedure.price.toLocaleString()} MZN
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-black font-medium">Data Preferida *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-gray-300 hover:border-yellow-500 bg-transparent"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "dd/MM/yyyy", { locale: pt }) : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({ ...formData, date })}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-black font-medium">Horário Preferido *</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500">
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert className="border-yellow-500/20 bg-yellow-50">
                <Bell className="h-4 w-4 text-yellow-500" />
                <AlertDescription className="text-gray-700">
                  <strong>Notificações Automáticas:</strong> Receberá lembretes por SMS uma semana, dois dias e quatro
                  horas antes da sua consulta.
                </AlertDescription>
              </Alert>

              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 text-lg"
                disabled={!formData.name || !formData.phone || !formData.procedure || !formData.date || !formData.time}
              >
                Confirmar Marcação
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
