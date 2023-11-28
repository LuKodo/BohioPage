import { instance } from "./instance.tsx";

export const clearFilters = () => {
  localStorage.setItem("price", JSON.stringify(["", ""]));
  localStorage.setItem("building_area", JSON.stringify(["", ""]));
  localStorage.setItem("rooms", "0");
  localStorage.setItem("propertySelected", JSON.stringify(["Todos"]));
  localStorage.setItem("baths", "0");
  localStorage.setItem("parking", "all");
  localStorage.setItem("location", "");
  localStorage.setItem("service", "all");
};

export const setFilters = async () => {
  clearFilters();

  const queryParams = {
    model: "product.template",
    fields:
      '["name", "rooms", "bathrooms", "video_url", "list_price", "ptype", "sale_lease", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_street_id", "x_city", "code", "parqueo"]',
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

  const queryParamsNeighborhood = {
    model: "regions.street",
    fields: '["name", "country_id", "state_id", "city"]',
    domain: "[]",
  };

  try {
    const response = await instance("search_read", {
      params: queryParamsNeighborhood,
    });

    localStorage.setItem("neighborhood", JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }

  const queryParamsTenancy = {
    model: "product.template",
    fields:
      '["name", "rooms", "bathrooms", "image_1920", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
    domain:
      '[["is_property", "=", "true"], ["sale_lease", "=", "for_tenancy"]]',
    limit: 4,
  };
  const queryParamsSale = {
    model: "product.template",
    fields:
      '["name", "rooms", "bathrooms", "image_1920", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
    domain: '[["is_property", "=", "true"], ["sale_lease", "=", "for_sale"]]',
    limit: 4,
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
};
