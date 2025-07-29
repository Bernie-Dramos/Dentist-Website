"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Página Inicial", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Marcação", href: "/marcacao" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="ODONTO VIDA" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Emergency Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+258123456789"
              className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+258 123 456 789</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-400/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+258123456789"
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors py-2"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+258 123 456 789</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
