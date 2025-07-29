import ProcedureCatalog from "@/components/procedure-catalog"

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Catálogo de Procedimentos</h1>
        <ProcedureCatalog />
      </div>
    </main>
  )
}
