import BookingForm from "@/components/booking-form"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Marcar Consulta</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Agende sua consulta de forma rápida e segura. Nossa equipe entrará em contato para confirmar os detalhes do
            seu agendamento.
          </p>
        </div>
        <BookingForm />
      </div>
    </main>
  )
}
