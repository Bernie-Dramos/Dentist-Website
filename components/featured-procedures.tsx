"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { procedures } from "@/lib/mock-data"

export default function FeaturedProcedures() {
  const featuredProcedures = procedures.slice(0, 4)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Procedimentos em <span className="text-yellow-500">Destaque</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos principais tratamentos dentários, realizados com tecnologia avançada e cuidado
            excepcional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProcedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-yellow-500/50">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={procedure.image || "/placeholder.svg"}
                      alt={procedure.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-black mb-3">{procedure.name}</CardTitle>
                  <p className="text-gray-600 mb-4 line-clamp-3">{procedure.description}</p>
                  {/* Price removed */}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    <Link href={`/procedimento/${procedure.id}`}>Ver Disponibilidade</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
          >
            <Link href="/catalogo">Ver Todos os Procedimentos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
