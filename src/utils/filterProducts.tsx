import { iProduct } from "./interfaces.tsx";

export const filterProducts = (
  products: Array<iProduct | undefined> | undefined,
) => {
  const property = localStorage.getItem("property");
  const baths = Number(localStorage.getItem("baths"));
  const parking = localStorage.getItem("parking");
  const rooms = Number(localStorage.getItem("rooms"));
  const building_area = localStorage.getItem("building_area");
  const price = localStorage.getItem("price");
  const service = localStorage.getItem("service");

  const tiposActivos =
    property &&
    JSON.parse(property)
      .filter((f: { status: any }) => f.status)
      .map((tipo: { name: any }) => tipo.name);

  let productoEncontrado: Array<iProduct | undefined> | undefined =
    products &&
    products?.filter((product) => {
      if (product) {
        let minPrice = 0;
        let maxPrice = 0;
        let minBuildingArea = 0;
        let maxBuildingArea = 0;

        if (building_area != null) {
          minBuildingArea = Number(building_area[0]);
          maxBuildingArea = Number(building_area[1]);
        }

        if (price != null) {
          minPrice = Number(price[0]);
          maxPrice = Number(price[1]);
        }

        const isBathsValid: boolean = product?.bathrooms >= baths;
        const isRoomsValid: boolean = product?.rooms >= rooms;
        let isBuildingAreaValid: boolean = true;
        if (maxBuildingArea > minBuildingArea) {
          isBuildingAreaValid =
            product?.building_area <= maxBuildingArea &&
            product?.building_area >= minBuildingArea;
        }
        let isPriceValid: boolean = true;

        if (maxPrice > minPrice) {
          if (product.rental_fee) {
            isPriceValid =
              product.rental_fee <= maxPrice && product.rental_fee >= minPrice;
          }
        }

        return (
          isBathsValid &&
          isRoomsValid &&
          isBuildingAreaValid &&
          isPriceValid &&
          parking
        );
      } else {
        return;
      }
    });

  const filterTypeProduct =
    productoEncontrado &&
    productoEncontrado.filter((property) => {
      return (
        property &&
        (tiposActivos.includes("Todos") ||
          tiposActivos.includes(property.ptype[1]))
      );
    });

  return (
    service &&
    filterTypeProduct &&
    filterTypeProduct.filter((property) => {
      return (
        property && property.sale_lease && property.sale_lease.includes(service)
      );
    })
  );
};
