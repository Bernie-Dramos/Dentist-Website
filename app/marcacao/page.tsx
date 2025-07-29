import BookingForm from "@/components/booking-form"
import React, { useState } from "react"
import { getUserAppointments, cancelSlot } from "@/lib/appointment-store"

export default function BookingPage() {
  const [showCancelForm, setShowCancelForm] = useState(false)
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [foundBooking, setFoundBooking] = useState<import("@/lib/appointment-store").Appointment | null | false>(null)
  const [cancelSuccess, setCancelSuccess] = useState(false)

  function handleCancelSearch(e: React.FormEvent) {
    e.preventDefault()
    // For demo, use name+number as userId
    const userId = `${name.trim()}-${number.trim()}`
    const bookings = getUserAppointments(userId)
    if (bookings.length > 0) {
      setFoundBooking(bookings[0])
    } else {
      setFoundBooking(false)
    }
  }

  function handleCancelBooking() {
    if (foundBooking !== null && foundBooking !== false) {
      const ok = cancelSlot(foundBooking.userId, foundBooking.date, foundBooking.time)
      setCancelSuccess(ok)
      setFoundBooking(null)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black text-center mb-12">Marcação de Consulta</h1>
        <BookingForm />
        <div className="flex flex-col items-center mt-8">
          <button
            className="bg-gray-200 text-sm text-black px-4 py-2 rounded hover:bg-gray-300"
            onClick={() => setShowCancelForm((v) => !v)}
          >
            Cancelar minha marcação
          </button>
          {showCancelForm && (
            <form className="mt-4 flex flex-col gap-2 items-center" onSubmit={handleCancelSearch}>
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border px-2 py-1 rounded w-48"
                required
              />
              <input
                type="text"
                placeholder="Seu número"
                value={number}
                onChange={e => setNumber(e.target.value)}
                className="border px-2 py-1 rounded w-48"
                required
              />
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Buscar marcação</button>
            </form>
          )}
          {foundBooking === false && (
            <div className="text-red-500 mt-2">Nenhuma marcação encontrada para esses dados.</div>
          )}
          {foundBooking !== null && foundBooking !== false && (
            <div className="bg-gray-100 p-4 rounded mt-4 text-center">
              <div className="font-bold mb-2">Detalhes da marcação:</div>
              <div>Procedimento: {foundBooking.procedureId}</div>
              <div>Data: {foundBooking.date}</div>
              <div>Hora: {foundBooking.time}</div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600"
                onClick={handleCancelBooking}
              >
                Cancelar esta marcação
              </button>
            </div>
          )}
          {cancelSuccess && (
            <div className="text-green-600 mt-2">Marcação cancelada com sucesso!</div>
          )}
        </div>
      </div>
    </main>
  )
}
