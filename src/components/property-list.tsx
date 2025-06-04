import { PropertyCard } from "@/components/property-card"

export function PropertyList() {
  // Datos de ejemplo para las propiedades
  const properties = [
    {
      id: 1,
      title: "Apartamento en Chapinero",
      price: "650.000.000",
      location: "Chapinero, Bogotá",
      bedrooms: 3,
      bathrooms: 2,
      area: 85,
      image: "https://placehold.co/600x500",
      type: "Apartamento",
      tags: ["Nuevo", "Proyecto"]
    },
    {
      id: 2,
      title: "Casa en Ciudad Jardín",
      price: "980.000.000",
      location: "Ciudad Jardín, Cali",
      bedrooms: 4,
      bathrooms: 3,
      area: 180,
      image: "https://placehold.co/600x500",
      type: "Casa",
      tags: ["Nuevo", "Casa"]
    },
    {
      id: 3,
      title: "Apartamento en El Poblado",
      price: "750.000.000",
      location: "El Poblado, Medellín",
      bedrooms: 2,
      bathrooms: 2,
      area: 75,
      image: "https://placehold.co/600x500",
      type: "Apartamento",
      tags: ["Nuevo", "Proyecto"]
    },
    {
      id: 4,
      title: "Oficina en Centro Internacional",
      price: "1.200.000.000",
      location: "Centro Internacional, Bogotá",
      bedrooms: 0,
      bathrooms: 2,
      area: 120,
      image: "https://placehold.co/600x500",
      type: "Oficina",
      tags: ["Oficina"]
    },
    {
      id: 5,
      title: "Casa en Laureles",
      price: "850.000.000",
      location: "Laureles, Medellín",
      bedrooms: 3,
      bathrooms: 3,
      area: 160,
      image: "https://placehold.co/600x500",
      type: "Casa",
      tags: ["Nuevo", "Casa"]
    },
    {
      id: 6,
      title: "Apartamento en Rosales",
      price: "1.100.000.000",
      location: "Rosales, Bogotá",
      bedrooms: 3,
      bathrooms: 2,
      area: 110,
      image: "https://placehold.co/600x500",
      type: "Apartamento",
      tags: ["Nuevo", "Proyecto"]
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
