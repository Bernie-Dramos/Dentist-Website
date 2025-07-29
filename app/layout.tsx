import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ODONTO VIDA - Clínica Dentária em Moçambique",
  description:
    "Sorrir com Confiança, Cuidar com Excelência. Cuidados dentários de qualidade superior em Maputo, Moçambique.",
  keywords: "dentista, clínica dentária, Maputo, Moçambique, implantes, ortodontia, clareamento dental",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
