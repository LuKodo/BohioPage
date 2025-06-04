import { Badge } from "../ui/badge"
import { Slider } from "../ui/slider"
import { DollarSign } from "lucide-react"
import { useState, useEffect } from "react"

interface RangeRentProps {
    properties: {
        price: number[]
    }
    handlePriceChange: (value: number[]) => void
}

export default function RangeRent({ properties, handlePriceChange }: RangeRentProps) {
    const [priceRange, setPriceRange] = useState(properties.price)
    
    useEffect(() => {
        handlePriceChange(priceRange)
    }, [priceRange])

    useEffect(() => {
        const fetchPriceRange = async () => {
            const response = await fetch("http://localhost:3333/price_rent_range")
            const data = await response.json()
            const minPrice = data[0].min_price
            const maxPrice = data[0].max_price
            setPriceRange([minPrice, maxPrice])
        }
        fetchPriceRange()
    }, [])
    
    return (
        <div>
           <label htmlFor="priceRange" className="flex items-center gap-2"><DollarSign className="h-4 w-4 mr-1" />Rango precio</label>
              <Slider value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between gap-2 mt-2">
                <Badge variant="destructive" className="text-sm">{priceRange[0].toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</Badge>
                <Badge variant="destructive" className="text-sm">{priceRange[1].toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })}</Badge>
              </div>
        </div>
    )
}