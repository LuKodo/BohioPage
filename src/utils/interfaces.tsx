export interface iProduct {
    name: string,
    bathrooms: number,
    rooms: number,
    x_country: [number, string],
    x_department: [number, string],
    x_state: [number, string],
    building_area: number,
    rental: boolean,
    ptype: string,
    list_price: number,
    x_estrato: string,
    constructed: string,
    code: string,
}

export interface iFilters {
    price: [string, string],
    stratum: string,
    age: string,
    building_area: [string, string],
    rooms: string,
    baths: string,
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

export const Stratum: string[] = ["Todos", "Campestre", "1", "2", "3", "4", "5", "6"]
export const Age: string[] = ["Todos", "1 A 8", "9 A 15", "16 A 30", "Más De 30"]
export const Rooms: string[] = ["1", "2", "3", "4+"]
export const Baths: string[] = ["1", "2", "3", "4+"]