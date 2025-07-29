"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { procedures } from "@/lib/mock-data"

export default function ProcedureCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const categories = [
    { id: "todos", name: "Todos os Procedimentos" },
    { id: "estetica", name: "Estética Dental" },
    { id: "ortodontia", name: "Ortodontia" },
    { id: "cirurgia", name: "Cirurgia Oral" },
    { id: "preventiva", name: "Odontologia Preventiva" },
  ]

  const filteredProcedures =
    selectedCategory === "todos" ? procedures : procedures.filter((p) => p.category === selectedCategory)

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={
              selectedCategory === category.id
                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Procedures Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProcedures.map((procedure, index) => (
          <motion.div
            key={procedure.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-yellow-500/50 bg-white">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={procedure.image || "/placeholder.svg"}
                    alt={procedure.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-black font-semibold">
                      {categories.find((c) => c.id === procedure.category)?.name}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-black mb-3">{procedure.name}</CardTitle>
                <p className="text-gray-600 mb-4 line-clamp-3">{procedure.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-yellow-500">{procedure.price.toLocaleString()} MZN</div>
                  <div className="text-sm text-gray-500">{procedure.duration}</div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link href={`/procedimento/${procedure.id}`}>Ver Disponibilidade</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredProcedures.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white text-xl">Nenhum procedimento encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  )
}
