export interface iProduct {
    id:number,
    name: string,
    bathrooms: number,
    rooms: number,
    x_country: [number, string],
    x_city: [number, string],
    x_state: [number, string],
    building_area: number,
    rental: boolean,
    ptype: string,
    rental_fee: number,
    x_estrato: string,
    constructed: string,
    code: string,
    age?: string,
    property_template_image_ids?: [string],
    image_1920?: string,
    parking?: number,
    note?: string
}

export interface iSearchTerms {
    location?: string,
    services?: string,
    properties?: string
}

export interface iLocation {
    country: any,
    country_id: any[],
    state: any,
    state_id: any[],
    id: number,
    name: string,
}

export interface iFilters {
    price: [string, string],
    stratum?: string,
    age?: string,
    building_area: [string, string],
    rooms: string,
    baths: string,
    parking: boolean
}

interface iTypeProperty {
    name: string,
    status: boolean
}

export let typeProperty: iTypeProperty[] = [
    { name: "Todos", status: true },
    { name: "Apartamento", status: false },
    { name: "Apartaestudio", status: false },
    { name: "Casa", status: false },
    { name: "Cabaña", status: false },
    { name: "Casa Campestre", status: false },
    { name: "Casa Lote", status: false },
    { name: "Finca", status: false },
    { name: "Habitación", status: false },
    { name: "Lote", status: false },
    { name: "Bodega", status: false },
    { name: "Consultorio", status: false },
    { name: "Local", status: false },
    { name: "Oficina", status: false },
    { name: "Parqueadero", status: false },
    { name: "Edificio", status: false },
]

export let typeService: iTypeProperty[] = [
    { name: "En Venta", status: true },
    { name: "En arriendo", status: false },
    { name: "Arriendo y Venta", status: false },
    { name: "Vacacional", status: false },
]

export const Stratum: string[] = ["Todos", "Campestre", "1", "2", "3", "4", "5", "6"]
export const Age: string[] = ["Todos", "1 A 8", "9 A 15", "16 A 30", "Más De 30"]
export const Rooms: string[] = ["1", "2", "3", "4+"]
export const Baths: string[] = ["1", "2", "3", "4+"]