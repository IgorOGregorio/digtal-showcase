import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel"

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
  rating: number
}

export default function ProductCarousel() {
  // Dados de exemplo para o carrossel
  const products: Product[] = [
    {
      id: 1,
      name: "Smartphone Premium",
      price: "R$ 2.499,90",
      image: "/placeholder.svg?height=400&width=400",
      category: "Eletrônicos",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Notebook Ultrafino",
      price: "R$ 4.999,90",
      image: "/placeholder.svg?height=400&width=400",
      category: "Informática",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Smartwatch Esportivo",
      price: "R$ 899,90",
      image: "/placeholder.svg?height=400&width=400",
      category: "Acessórios",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Fone Bluetooth",
      price: "R$ 349,90",
      image: "/placeholder.svg?height=400&width=400",
      category: "Áudio",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Câmera Digital",
      price: "R$ 1.899,90",
      image: "/placeholder.svg?height=400&width=400",
      category: "Fotografia",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Console de Jogos",
      price: "R$ 3.999,90",
      image: "/placeholder.svg?height=400&width=400",
      category: "Games",
      rating: 4.9,
    },
  ]

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                  <div className="relative">
                    <Badge className="absolute right-2 top-2 z-10 bg-rose-100 text-rose-600 hover:bg-rose-200">
                      {product.category}
                    </Badge>
                    <Link href="#">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-[250px] w-full object-cover transition-transform hover:scale-105"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{product.rating} (120)</span>
                      </div>
                      <p className="font-bold text-xl">{product.price}</p>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700">Adicionar ao Carrinho</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 lg:left-2" />
        <CarouselNext className="right-0 lg:right-2" />
        <CarouselDots itemCount={products.length} />
      </Carousel>
    </div>
  )
}
