import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BedDouble, MapPin, Tag } from "lucide-react"
import { Fragment, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import TypeProperty from "./input-filters/type-property"
import RangeRent from "./input-filters/range-rent"

export default function Filter() {
    const [properties, setProperties] = useState({
        location: "",
        type: "",
        price: [0, 100],
        bedrooms: "",
        bathrooms: "",
        area: [0, 100],
        area_type: "mt2"
      })

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProperties({ ...properties, [name]: value })
      }

    const handlePriceChange = (value: number[]) => {
        setProperties({ ...properties, price: value })
      }

    const handleAreaChange = (value: number[]) => {
        setProperties({ ...properties, area: value })
      }

    return (
        <Fragment>
            <div className="mb-6">
            <h2 className="text-2xl font-bold text-red-600">Filtros inmobiliarios</h2>
            <span className="text-red-600 text-sm">Filtros aplicados</span>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex items-center gap-2"><MapPin className="h-4 w-4 mr-1" />Ubicación</label>
              <Input type="text" id="location" name="location" onChange={handleFilterChange} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="flex items-center gap-2"><Tag className="h-4 w-4 mr-1" />Tipo de servicio</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rent">Arriendo</SelectItem>
                  <SelectItem value="sale">Venta</SelectItem>
                  <SelectItem value="rent-sale">Venta y arriendo</SelectItem>
                  <SelectItem value="rent-vacation">Arriendo vacacional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <TypeProperty onChange={(value) => setProperties({ ...properties, type: value })} />
            </div>
            <div className="flex flex-col gap-2">
              <RangeRent properties={properties} handlePriceChange={handlePriceChange} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="bedrooms" className="flex items-center gap-2"><BedDouble className="h-4 w-4 mr-1" />Área {properties.area_type}</label>

              <RadioGroup className="flex items-center gap-2 mb-2" defaultValue="mt2" value={properties.area_type} onValueChange={(value) => setProperties({ ...properties, area_type: value })}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mt2" id="mt2" />
                  <Label htmlFor="mt2">M²</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ac" id="ac" />
                  <Label htmlFor="ac">Ac</Label>
                </div>
              </RadioGroup>

              <Slider value={properties.area} onValueChange={handleAreaChange} />
              <div className="flex items-center justify-between gap-2">
                <Badge variant="destructive" className="text-sm">{properties.area[0]} {properties.area_type}</Badge>
                <Badge variant="destructive" className="text-sm">{properties.area[1]} {properties.area_type}</Badge>
              </div>
            </div>
          </div>
        </Fragment>
    )
}