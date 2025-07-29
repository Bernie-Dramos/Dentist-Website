// Simple in-memory appointment storage for demonstration. Replace with a database for production.

export type Appointment = {
  id: string // unique identifier
  userId: string // user who booked
  procedureId: string // procedure being booked
  date: string // YYYY-MM-DD
  time: string // HH:mm
}

// This will store all appointments
const appointments: Appointment[] = []

// Check if a slot is available
export function isSlotAvailable(date: string, time: string): boolean {
  return !appointments.some(app => app.date === date && app.time === time)
}

// Book a slot (returns appointment or null if slot taken)
export function bookSlot(userId: string, procedureId: string, date: string, time: string): Appointment | null {
  if (!isSlotAvailable(date, time)) return null
  const appointment: Appointment = {
    id: `${userId}-${date}-${time}`,
    userId,
    procedureId,
    date,
    time,
  }
  appointments.push(appointment)
  return appointment
}

// Cancel a booking (only by the user who booked)
export function cancelSlot(userId: string, date: string, time: string): boolean {
  const idx = appointments.findIndex(app => app.userId === userId && app.date === date && app.time === time)
  if (idx === -1) return false
  appointments.splice(idx, 1)
  return true
}

// Get all available slots for a given day (excluding booked slots)
export function getAvailableSlots(date: string, allSlots: string[]): string[] {
  const bookedTimes = appointments.filter(app => app.date === date).map(app => app.time)
  return allSlots.filter(time => !bookedTimes.includes(time))
}

// Get all appointments for a user
export function getUserAppointments(userId: string): Appointment[] {
  return appointments.filter(app => app.userId === userId)
}
