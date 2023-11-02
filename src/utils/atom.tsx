import { atom } from 'recoil'

export const locationState = atom({
    key: "locationState",
    default: ""
})

export const servicesState = atom({
    key: "servicesState",
    default: "En Venta"
})

export const propertiesState = atom({
    key: "propertiesState",
    default: [
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
})

export const filtersState = atom({
    key: "filtersState",
    default: {
        price: ["", ""],
        building_area: ["", ""],
        rooms: "",
        baths: "",
        parking: false,
    },
});