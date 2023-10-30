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
    default: "Todos"
})
