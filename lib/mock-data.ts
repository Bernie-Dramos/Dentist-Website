export interface Procedure {
  id: string
  name: string
  price: string
  description: string
  category: "estetica" | "ortodontia" | "cirurgia" | "preventiva" | "restauradora"
  image: string
  duration: string
  availability: "available" | "limited" | "consultation"
  availableSlots?: string[]
}

export const procedures: Procedure[] = [
  {
    id: "limpeza-dental",
    name: "Limpeza Dental",
    price: "2.000 MZN",
    description:
      "Limpeza profissional completa para manter seus dentes saudáveis e prevenir doenças gengivais. Inclui remoção de tártaro, polimento e orientações de higiene bucal.",
    category: "preventiva",
    image: "/placeholder.svg?height=300&width=400&text=Limpeza+Dental",
    duration: "45 minutos",
    availability: "available",
    availableSlots: ["09:00", "10:30", "14:00", "15:30", "16:30"],
  },
  {
    id: "clareamento-dental",
    name: "Clareamento Dental",
    price: "5.000 MZN",
    description:
      "Tratamento estético para clarear os dentes de forma segura e eficaz. Utilizamos tecnologia LED para resultados rápidos e duradouros.",
    category: "estetica",
    image: "/placeholder.svg?height=300&width=400&text=Clareamento+Dental",
    duration: "90 minutos",
    availability: "available",
    availableSlots: ["09:00", "11:00", "14:00", "16:00"],
  },
  {
    id: "implantes-dentarios",
    name: "Implantes Dentários",
    price: "15.000 MZN",
    description:
      "Substituição de dentes perdidos com implantes de titânio de alta qualidade. Solução permanente e natural para recuperar seu sorriso.",
    category: "cirurgia",
    image: "/placeholder.svg?height=300&width=400&text=Implantes+Dentários",
    duration: "2 horas",
    availability: "consultation",
  },
  {
    id: "ortodontia",
    name: "Ortodontia",
    price: "12.000 MZN",
    description:
      "Correção do alinhamento dos dentes com aparelhos modernos. Oferecemos opções tradicionais e estéticas para todas as idades.",
    category: "ortodontia",
    image: "/placeholder.svg?height=300&width=400&text=Ortodontia",
    duration: "Tratamento longo",
    availability: "limited",
    availableSlots: ["09:00", "14:00"],
  },
  {
    id: "canal-radicular",
    name: "Tratamento de Canal",
    price: "8.000 MZN",
    description:
      "Tratamento endodôntico para salvar dentes com infecção ou dano na polpa. Procedimento indolor com anestesia local.",
    category: "restauradora",
    image: "/placeholder.svg?height=300&width=400&text=Tratamento+de+Canal",
    duration: "90 minutos",
    availability: "available",
    availableSlots: ["09:00", "11:00", "15:00"],
  },
  {
    id: "facetas-porcelana",
    name: "Facetas de Porcelana",
    price: "18.000 MZN",
    description:
      "Lâminas ultrafinas de porcelana para transformar completamente seu sorriso. Resultado natural e duradouro.",
    category: "estetica",
    image: "/placeholder.svg?height=300&width=400&text=Facetas+de+Porcelana",
    duration: "2 sessões",
    availability: "consultation",
  },
  {
    id: "extracao-siso",
    name: "Extração de Siso",
    price: "4.000 MZN",
    description:
      "Remoção segura de dentes do siso impactados ou problemáticos. Procedimento realizado com sedação se necessário.",
    category: "cirurgia",
    image: "/placeholder.svg?height=300&width=400&text=Extração+de+Siso",
    duration: "60 minutos",
    availability: "available",
    availableSlots: ["09:00", "10:30", "14:00"],
  },
  {
    id: "protese-dentaria",
    name: "Prótese Dentária",
    price: "10.000 MZN",
    description:
      "Próteses parciais ou totais para restaurar função mastigatória e estética. Materiais de alta qualidade e ajuste perfeito.",
    category: "restauradora",
    image: "/placeholder.svg?height=300&width=400&text=Prótese+Dentária",
    duration: "Múltiplas sessões",
    availability: "consultation",
  },
  {
    id: "periodontia",
    name: "Tratamento Periodontal",
    price: "6.000 MZN",
    description:
      "Tratamento especializado para doenças da gengiva e estruturas de suporte dos dentes. Prevenção e tratamento da periodontite.",
    category: "preventiva",
    image: "/placeholder.svg?height=300&width=400&text=Tratamento+Periodontal",
    duration: "60 minutos",
    availability: "available",
    availableSlots: ["10:00", "11:30", "15:00", "16:30"],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatria",
    price: "3.000 MZN",
    description:
      "Cuidados dentários especializados para crianças. Ambiente acolhedor e técnicas adaptadas para os pequenos pacientes.",
    category: "preventiva",
    image: "/placeholder.svg?height=300&width=400&text=Odontopediatria",
    duration: "45 minutos",
    availability: "available",
    availableSlots: ["09:00", "10:00", "14:00", "15:00", "16:00"],
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Maputo",
    text: "ODONTO VIDA transformou completamente meu sorriso! O atendimento é excepcional e os resultados superaram minhas expectativas.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=MS",
  },
  {
    id: 2,
    name: "João Machel",
    location: "Matola",
    text: "Profissionais altamente qualificados e equipamentos modernos. Recomendo a todos que buscam excelência em cuidados dentários.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=JM",
  },
  {
    id: 3,
    name: "Ana Mondlane",
    location: "Beira",
    text: "Fiz meu tratamento ortodôntico aqui e estou muito satisfeita. Equipe atenciosa e resultados incríveis!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=AM",
  },
]

export const stats = [
  { number: "10.000+", label: "Sorrisos Criados" },
  { number: "15+", label: "Anos de Experiência" },
  { number: "98%", label: "Satisfação dos Pacientes" },
  { number: "24/7", label: "Suporte de Emergência" },
]
