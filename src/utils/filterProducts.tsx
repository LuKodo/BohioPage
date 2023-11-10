import { iProduct } from "./interfaces.tsx";

export const filterProducts = (
  products: Array<iProduct | undefined> | undefined | null,
) => {
  const baths = Number(localStorage.getItem("baths"));
  const parking = localStorage.getItem("parking");
  const rooms = Number(localStorage.getItem("rooms"));
  const building_area = localStorage.getItem("building_area");
  const price = localStorage.getItem("price");

  let productoEncontrado: Array<iProduct | undefined> | undefined | null =
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
  console.log(products);
  return filterProductsByType(productoEncontrado);
};

export const filterProductsByType = (
  products: Array<iProduct | undefined> | undefined | null,
) => {
  let propertySelected = localStorage.getItem("propertySelected");
  propertySelected = propertySelected && JSON.parse(propertySelected);

  const productoEncontrado =
    products &&
    products.filter((property) => {
      return (
        property &&
        propertySelected &&
        (propertySelected.includes("Todos") ||
          propertySelected.includes(property.ptype[1]))
      );
    });
  return filterProductsByService(productoEncontrado);
};

export const filterProductsByService = (
  products: undefined | null | (iProduct | undefined)[],
) => {
  const service = localStorage.getItem("service");
  let productoEncontrado;
  if (service) {
    productoEncontrado = products?.filter((property) => {
      return (
        property && property.sale_lease && property.sale_lease.includes(service)
      );
    });
  }
  return filterProductsByLocation(productoEncontrado);
};

export const filterProductsByLocation = (
  products: null | undefined | (iProduct | undefined)[],
) => {
  let location = localStorage.getItem("location");
  location = location && location.split(", ");
  //Departamento
  const Departamento = products?.filter((property) => {
    return (
      property &&
      location &&
      property?.x_state[1].split(" ")[0].toLowerCase() == location[1]
    );
  });
  //Municipio
  const productoEncontrado = Departamento?.filter((property) => {
    return (
      property &&
      location &&
      property?.x_city[1].split(" ")[0].toLowerCase() == location[0]
    );
  });

  console.log(productoEncontrado);
  return productoEncontrado;
};
