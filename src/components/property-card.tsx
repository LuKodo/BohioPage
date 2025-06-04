import { Bath, BedDouble, Dot, Heart, MapPin, Ruler } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "wouter"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    price: string
    location: string
    bedrooms: number
    bathrooms: number
    area: number
    image: string
    type: string
    tags: string[]
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-[300px] w-full" style={{ flex: "0 0 auto" }}>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative h-full w-full">
            <div className="block absolute inset-0 m-0 overflow-hidden box-border">
              <img src={property.image || "https://placehold.co/600x400"} alt={property.title} className="object-cover absolute block w-[0px] h-[0px] box-border max-w-full max-h-full min-w-full min-h-full inset-0 m-auto p-0" />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Añadir a favoritos</span>
          </Button>
        </div>
        <div className="flex items-start justify-between relative p-2 z-3">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {property.tags?.map((tag) => (
                <Badge key={tag} className="bg-red-600">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
        </div>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <p className="font-bold text-xl text-red-600">$ {property.price}</p>
        <div className="flex items-center justify-start gap-2 mt-4 text-sm">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} hab</span>
          </div>
          <div className="flex items-center">
            <Dot className="h-4 w-4 mr-1" />
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} baños</span>
          </div>
          <div className="flex items-center">
            <Dot className="h-4 w-4 mr-1" />
          </div>
          <div className="flex items-center">
            <Ruler className="h-4 w-4 mr-1" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/propiedad/${property.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Ver detalles
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
