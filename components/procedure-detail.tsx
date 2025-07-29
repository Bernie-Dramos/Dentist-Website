"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import Image from "next/image"
import { Clock, Phone, CheckCircle, CalendarIcon } from "lucide-react"
import { procedures } from "@/lib/mock-data"

interface ProcedureDetailProps {
  procedure: (typeof procedures)[0]
}

export default function ProcedureDetail({ procedure }: ProcedureDetailProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Mock availability data
  const availableSlots = ["09:00", "10:30", "14:00", "15:30", "16:30"]

  const unavailableDates = [new Date(2024, 11, 15), new Date(2024, 11, 22), new Date(2024, 11, 29)]

  const relatedProcedures = procedures
    .filter((p) => p.category === procedure.category && p.id !== procedure.id)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Procedure Image and Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="relative h-96 rounded-lg overflow-hidden mb-6">
            <Image src={procedure.image || "/placeholder.svg"} alt={procedure.name} fill className="object-cover" />
          </div>

          <div className="space-y-4">
            <Badge className="bg-yellow-500 text-black font-semibold">{procedure.category}</Badge>
            <h1 className="text-4xl font-bold text-black">{procedure.name}</h1>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{procedure.duration}</span>
              </div>
              <div className="text-3xl font-bold text-yellow-500">{procedure.price.toLocaleString()} MZN</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{procedure.description}</p>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-black">Benefícios:</h3>
              <ul className="space-y-2">
                {procedure.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Availability and Booking */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-2 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-black">
                <CalendarIcon className="h-6 w-6 text-yellow-500" />
                <span>Disponibilidade - Janeiro 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) =>
                  date < new Date() ||
                  unavailableDates.some((unavailable) => date.toDateString() === unavailable.toDateString())
                }
                className="rounded-md border"
              />

              {selectedDate && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-black">
                    Horários disponíveis para {selectedDate.toLocaleDateString("pt-PT")}:
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant="outline"
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href="/marcacao">Marcar Consulta</Link>
                </Button>

                <div className="text-center">
                  <p className="text-gray-600 mb-2">Ou ligue diretamente:</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                  >
                    <a href="tel:+258123456789" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>+258 123 456 789</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Related Procedures */}
      {relatedProcedures.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-black mb-8">Procedimentos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProcedures.map((relatedProcedure) => (
              <Card key={relatedProcedure.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-32 overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProcedure.image || "/placeholder.svg"}
                      alt={relatedProcedure.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-black mb-2">{relatedProcedure.name}</h3>
                  <p className="text-yellow-500 font-bold">{relatedProcedure.price.toLocaleString()} MZN</p>
                  <Button asChild className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Link href={`/procedimento/${relatedProcedure.id}`}>Ver Detalhes</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
