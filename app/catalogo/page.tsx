import ProcedureCatalog from "@/components/procedure-catalog"

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Catálogo de Procedimentos</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra nossa gama completa de tratamentos dentários especializados, projetados para cuidar do seu sorriso
            com excelência e tecnologia avançada.
          </p>
        </div>
        <ProcedureCatalog />
      </div>
    </main>
  )
}
