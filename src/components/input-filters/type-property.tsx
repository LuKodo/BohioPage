import { Fragment, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tag } from "lucide-react";
import { useState } from "react";

interface ProductCategory {
    id: number;
    name: string;
}

export default function TypeProperty({ onChange }: { onChange: (value: string) => void }) {
    const [type, setType] = useState("")
    const [types, setTypes] = useState<ProductCategory[]>([])

    const handleTypeChange = (value: string) => {
        setType(value)
    }

    useEffect(() => {
        const fetchTypes = async () => {
            const response = await fetch("http://localhost:3333/product_category")
            const data = await response.json()
            setTypes(data)
        }
        fetchTypes()
    }, [])
    
    useEffect(() => {
        onChange(type)
    }, [type])
    
    return (
        <Fragment>
            <label htmlFor="type" className="flex items-center gap-2"><Tag className="h-4 w-4 mr-1" />Tipo de propiedad</label>
              <Select onValueChange={handleTypeChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type.id} value={type.id.toString()}>{type.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
        </Fragment>
    )
}