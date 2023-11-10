import { instance } from "./instance.tsx";

export const setFilters = async () => {
  const queryParams = {
    model: "product.template",
    fields:
      '["name", "rooms", "bathrooms", "ptype", "sale_lease", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
    domain: '[["is_property", "=", "true"]]',
  };

  try {
    const response = await instance("search_read", {
      params: queryParams,
    });

    localStorage.setItem("products", JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }

  const queryParamsCity = {
    model: "res.country.state.city",
    fields: '["name", "country_id", "state_id"]',
    domain: "[]",
  };

  try {
    const response = await instance("search_read", {
      params: queryParamsCity,
    });

    localStorage.setItem("cities", JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }

  const queryParamsTenancy = {
    model: "product.template",
    fields:
      '["name", "rooms", "bathrooms", "image_1920", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
    domain:
      '[["is_property", "=", "true"], ["sale_lease", "=", "for_tenancy"]]',
    limit: 5,
  };
  const queryParamsSale = {
    model: "product.template",
    fields:
      '["name", "rooms", "bathrooms", "image_1920", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
    domain: '[["is_property", "=", "true"], ["sale_lease", "=", "for_sale"]]',
    limit: 5,
  };

  try {
    const response = await instance("search_read", {
      params: queryParamsTenancy,
    });
    const responseSale = await instance("search_read", {
      params: queryParamsSale,
    });

    localStorage.setItem("for_tenancy", JSON.stringify(response.data));
    localStorage.setItem("for_sale", JSON.stringify(responseSale.data));
  } catch (error) {
    console.log(error);
  }

  !localStorage.getItem("price") &&
    localStorage.setItem("price", JSON.stringify(["", ""]));
  !localStorage.getItem("building_area") &&
    localStorage.setItem("building_area", JSON.stringify(["", ""]));
  !localStorage.getItem("rooms") && localStorage.setItem("rooms", "");
  !localStorage.getItem("propertySelected") &&
    localStorage.setItem("propertySelected", JSON.stringify(["Todos"]));
  !localStorage.getItem("baths") && localStorage.setItem("baths", "");
  !localStorage.getItem("parking") &&
    localStorage.setItem("parking", JSON.stringify(true));
  !localStorage.getItem("location") && localStorage.setItem("location", "");
  !localStorage.getItem("service") &&
    localStorage.setItem("service", "for_sale");

  localStorage.setItem(
    "property",
    JSON.stringify([
      "Todos",
      "Apartamento",
      "Apartaestudio",
      "Casa",
      "Cabaña",
      "Casa Campestre",
      "Casa Lote",
      "Finca",
      "Habitación",
      "Lote",
      "Bodega",
      "Consultorio",
      "Local",
      "Oficina",
      "Parqueadero",
      "Edificio",
    ]),
  );
};
