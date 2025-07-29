import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo.jpg" alt="ODONTO VIDA Logo" width={180} height={60} className="h-12 w-auto mb-4" />
            <p className="text-gray-300 mb-4">Sorrir com Confiança, Cuidar com Excelência</p>
            <div className="flex space-x-4">
              <a href="https://wa.me/258123456789" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/odontovida"
                className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-gray-300 hover:text-white transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/marcacao" className="text-gray-300 hover:text-white transition-colors">
                  Marcação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">+258 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">contato@odontovida.co.mz</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">Maputo, Moçambique</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} ODONTO VIDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
