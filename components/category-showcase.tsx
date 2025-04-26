import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"

export default function CategoryShowcase() {
  const categories = [
    {
      id: 1,
      name: "Eletrônicos",
      image: "/placeholder.svg?height=300&width=300",
      count: "120 produtos",
    },
    {
      id: 2,
      name: "Moda",
      image: "/placeholder.svg?height=300&width=300",
      count: "85 produtos",
    },
    {
      id: 3,
      name: "Casa & Decoração",
      image: "/placeholder.svg?height=300&width=300",
      count: "64 produtos",
    },
    {
      id: 4,
      name: "Esportes",
      image: "/placeholder.svg?height=300&width=300",
      count: "42 produtos",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category) => (
        <Card key={category.id} className="overflow-hidden border-none shadow-md">
          <Link href="#" className="block">
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.count}</p>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  )
}
