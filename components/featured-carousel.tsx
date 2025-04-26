import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel"

export default function FeaturedCarousel() {
  const featuredItems = [
    {
      id: 1,
      title: "Coleção Verão 2025",
      description: "Descubra as últimas tendências para a temporada",
      image: "/placeholder.svg?height=600&width=1200",
      buttonText: "Ver Coleção",
    },
    {
      id: 2,
      title: "Ofertas Especiais",
      description: "Até 50% de desconto em produtos selecionados",
      image: "/placeholder.svg?height=600&width=1200",
      buttonText: "Ver Ofertas",
    },
    {
      id: 3,
      title: "Lançamentos Exclusivos",
      description: "Seja o primeiro a conhecer nossos novos produtos",
      image: "/placeholder.svg?height=600&width=1200",
      buttonText: "Conferir Novidades",
    },
  ]

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {featuredItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">{item.description}</p>
                <div>
                  <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700">
                    {item.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
      <CarouselDots itemCount={featuredItems.length} />
    </Carousel>
  )
}
