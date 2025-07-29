import BookingForm from "@/components/booking-form"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black text-center mb-12">Marcação de Consulta</h1>
        <BookingForm />
      </div>
    </main>
  )
}
