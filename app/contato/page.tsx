import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Entre em Contato</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco para agendar sua consulta ou esclarecer qualquer dúvida
            sobre nossos tratamentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
