import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image src="/logo.jpg" alt="ODONTO VIDA" width={200} height={80} className="mb-4" />
            <p className="text-gray-400 mb-4 max-w-md">
              Transformamos sorrisos com excelência e tecnologia avançada. Sua saúde bucal é nossa prioridade em
              Moçambique.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/258123456789"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://instagram.com/odontovida"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-gray-400 hover:text-white transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/marcacao" className="text-gray-400 hover:text-white transition-colors">
                  Marcar Consulta
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+258123456789" className="text-gray-400 hover:text-white transition-colors">
                  +258 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-yellow-400" />
                <a href="mailto:contato@odontovida.co.mz" className="text-gray-400 hover:text-white transition-colors">
                  contato@odontovida.co.mz
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-yellow-400 mt-1" />
                <span className="text-gray-400">
                  Av. Julius Nyerere, 123
                  <br />
                  Maputo, Moçambique
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 ODONTO VIDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
