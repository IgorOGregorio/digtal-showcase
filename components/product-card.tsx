import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: string
  image: string
  category: string
  rating: number
}

export default function ProductCard({ name, price, image, category, rating }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Badge className="absolute right-2 top-2 z-10">{category}</Badge>
        <Link href="#">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-[200px] w-full object-cover transition-transform hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{rating} (120)</span>
          </div>
          <p className="font-bold text-lg">{price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Adicionar ao Carrinho</Button>
      </CardFooter>
    </Card>
  )
}
