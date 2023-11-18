import { iProduct } from "./interfaces.tsx";
export const getImageType = (image: string) => {
  const binaryString = atob(image);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const uintArray = new Uint8Array(bytes);
  const firstByte = uintArray[0];
  const secondByte = uintArray[1];

  let mimeType;

  if (firstByte === 0xff && secondByte === 0xd8) {
    mimeType = "image/jpeg";
  } else if (firstByte === 0x89 && secondByte === 0x50) {
    mimeType = "image/png";
  } else if (firstByte === 0x47 && secondByte === 0x49) {
    mimeType = "image/gif";
  } else if (firstByte === 0x42 && secondByte === 0x4d) {
    mimeType = "image/bmp";
  } else {
    // Default to 'application/octet-stream' or handle other types as needed
    mimeType = "application/octet-stream";
  }

  return mimeType;
};

export const filterProducts = (
  products: Array<iProduct | undefined> | undefined | null,
) => {
  let minPrice = 0;
  let maxPrice = 0;
  let minBuildingArea = 0;
  let maxBuildingArea = 0;
  const baths = Number(localStorage.getItem("baths"));
  let parking = localStorage.getItem("parking");
  const rooms = Number(localStorage.getItem("rooms"));
  const building_area = localStorage.getItem("building_area");
  const price = localStorage.getItem("price");
  parking = parking && parking

  let productoEncontrado: Array<iProduct | undefined> | undefined | null =
    products &&
    products?.filter((product) => {
      if (product) {
        if (building_area != null) {
          minBuildingArea = Number(JSON.parse(building_area)[0]);
          maxBuildingArea = Number(JSON.parse(building_area)[1]);
        }

        if (price != null) {
          minPrice = Number(JSON.parse(price)[0]);
          maxPrice = Number(JSON.parse(price)[1]);
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

        if (parking === 'all') {
          return isBathsValid && isRoomsValid && isBuildingAreaValid && isPriceValid;
        } else {
          if (parking === 'true') {
            return isBathsValid && isRoomsValid && isBuildingAreaValid && isPriceValid && product.parqueo === true;
          } else {
            return isBathsValid && isRoomsValid && isBuildingAreaValid && isPriceValid && product.parqueo === false;            
          }
        }
      } else {
        return;
      }
    });
    console.log(productoEncontrado)
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
  if (service && service !== "all") {
    productoEncontrado = products?.filter((property) => {
      return (
        property && property.sale_lease && property.sale_lease.includes(service)
      );
    });
  } else if (service && service === "all") {
    productoEncontrado = products;
  }
  return filterProductsByLocation(productoEncontrado);
};

export const filterProductsByLocation = (
  products: null | undefined | (iProduct | undefined)[],
) => {
  let locationSaved = localStorage.getItem("location");
  const location = locationSaved && locationSaved.split(", ");
  //Departamento
  if (location) {
    const Departamento = products?.filter((property) => {
      return (
        property &&
        location &&
        property?.x_city[1].split(" ")[2].toLowerCase() == location[1]
      );
    });
    //Municipio
    return Departamento?.filter((property) => {
      return (
        property &&
        location &&
        property?.x_city[1].split(" ")[0].toLowerCase() == location[0]
      );
    });
  } else {
    return products;
  }
};
