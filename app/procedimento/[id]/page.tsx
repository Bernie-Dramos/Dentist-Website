import ProcedureDetail from "@/components/procedure-detail"
import { procedures } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ProcedurePageProps {
  params: {
    id: string
  }
}

export default function ProcedurePage({ params }: ProcedurePageProps) {
  const procedure = procedures.find((p) => p.id === params.id)

  if (!procedure) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <ProcedureDetail procedure={procedure} />
    </main>
  )
}

export function generateStaticParams() {
  return procedures.map((procedure) => ({
    id: procedure.id,
  }))
}
