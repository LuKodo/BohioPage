import { useEffect, useState } from "preact/hooks";
import { iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";
import { Link } from "raviger";

export function Recommended() {
  const [tenancy, setTenancy] = useState<
    Array<iProduct | undefined> | undefined
  >();
  const [sale, setSale] = useState<Array<iProduct | undefined> | undefined>();
  const options = {
    style: "currency",
    currency: "COP", // Cambia a tu moneda deseada (por ejemplo, 'EUR' para euros)
    minimumFractionDigits: 2, // Número mínimo de decimales
    maximumFractionDigits: 2, // Número máximo de decimales
  };

  const loadData = async () => {
    const queryParams = {
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
        params: queryParams,
      });
      const responseSale = await instance("search_read", {
        params: queryParamsSale,
      });

      setTenancy(response.data);
      setSale(responseSale.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3 className="mb-0">
            <span className="mb-0 rounded-end-4 rounded-start-0 badge bg-danger">
              Ventas descatacas
            </span>
          </h3>
          <hr className="mt-0 text-danger" />
        </div>
      </div>

      <div className="row d-none d-md-flex">
        {sale &&
          sale.map((product) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-12">
                <Link href={`/product/${product?.id}`}>
                  <div className="card mb-4 rounded-3 shadow-sm position-relative">
                    <span
                      className="position-absolute mt-2 badge rounded-pill bg-danger"
                      style={{ right: 10 }}
                    >
                      En Venta
                    </span>

                    <span
                      className="position-absolute badge rounded text-bg-dark"
                      style={{ right: 5, top: 170 }}
                    >
                      <b className="bi bi-plus"></b>
                    </span>

                    <span
                      className="position-absolute badge rounded text-bg-dark"
                      style={{ right: 35, top: 170 }}
                    >
                      <b className="bi bi-heart"></b>
                    </span>

                    <span
                      className="position-absolute badge rounded text-bg-dark"
                      style={{ right: 65, top: 170 }}
                    >
                      <b className="bi bi-arrows-angle-expand"></b>
                    </span>

                    <span
                      className="position-absolute badge rounded-pill text-bg-dark"
                      style={{ left: 5, top: 170 }}
                    >
                      {product?.rental_fee &&
                        new Intl.NumberFormat("es-CO", options).format(
                          product?.rental_fee,
                        )}
                    </span>

                    <img
                      src={`data:image/jpeg;base64,${product?.image_1920}`}
                      className="card-img-top"
                      height={200}
                      alt="..."
                    />

                    <div className="card-body">
                      <h6 className="card-title mb-0">
                        <b className="bi bi-house"></b> {product?.name}
                      </h6>
                      <small className="border-bottom pb-2">
                        {product?.x_state && product.x_state[1].split(" ")[0]},{" "}
                        {product?.x_city && product.x_city[1].split(" ")[0]},{" "}
                        {product?.x_country &&
                          product.x_country[1].split(" ")[0]}
                      </small>

                      <div className="row mt-3 mb-0 pb-0">
                        <div className="col border-end">
                          <p className="fs-6 d-flex align-items-center mb-0 small">
                            {product?.rooms}{" "}
                            <span className="material-icons">bed</span>
                          </p>
                          <small className="mt-0">Cuartos</small>
                        </div>
                        <div className="col border-end">
                          <p className="fs-6 d-flex align-items-center mb-0 small">
                            {product?.bathrooms}{" "}
                            <span className="material-icons">shower</span>
                          </p>
                          <small className="mt-0">Baños</small>
                        </div>
                        <div className="col">
                          <p className="fs-6 d-flex align-items-center mb-0 small">
                            {product?.building_area}{" "}
                            <span className="material-icons">square_foot</span>
                          </p>
                          <small className="mt-0 pt-0">m2</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>

      <div class="row d-md-none d-sm-grid">
        <div id="carouselVentas" className="carousel slide">
          <div className="carousel-indicators">
            {sale &&
              sale.map((_product, index) => {
                return (
                  <button
                    type="button"
                    data-bs-target="#carouselVentas"
                    data-bs-slide-to={index}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                );
              })}
          </div>
          <div className="carousel-inner">
            {sale &&
              sale.map((product, index) => {
                return (
                  <div
                    className={`carousel-item ${index === 0 && "active"}`}
                    style={{ height: "100% !important" }}
                  >
                    <Link href={`/product/${product?.id}`}>
                      <div className="card mb-4 rounded-3 shadow-sm position-relative">
                        <span
                          className="position-absolute mt-2 badge rounded-pill bg-danger"
                          style={{ right: 10 }}
                        >
                          En Venta
                        </span>

                        <span
                          className="position-absolute badge rounded text-bg-dark"
                          style={{ right: 5, top: 170 }}
                        >
                          <b className="bi bi-plus"></b>
                        </span>

                        <span
                          className="position-absolute badge rounded text-bg-dark"
                          style={{ right: 35, top: 170 }}
                        >
                          <b className="bi bi-heart"></b>
                        </span>

                        <span
                          className="position-absolute badge rounded text-bg-dark"
                          style={{ right: 65, top: 170 }}
                        >
                          <b className="bi bi-arrows-angle-expand"></b>
                        </span>

                        <span
                          className="position-absolute badge rounded-pill text-bg-dark"
                          style={{ left: 5, top: 170 }}
                        >
                          {product?.rental_fee &&
                            new Intl.NumberFormat("es-CO", options).format(
                              product?.rental_fee,
                            )}
                        </span>

                        <img
                          src={`data:image/jpeg;base64,${product?.image_1920}`}
                          className="card-img-top"
                          height={200}
                          alt="..."
                        />

                        <div className="card-body">
                          <h6 className="card-title mb-0">
                            <b className="bi bi-house"></b> {product?.name}
                          </h6>
                          <small className="border-bottom pb-2">
                            {product?.x_state &&
                              product.x_state[1].split(" ")[0]}
                            ,{" "}
                            {product?.x_city && product.x_city[1].split(" ")[0]}
                            ,{" "}
                            {product?.x_country &&
                              product.x_country[1].split(" ")[0]}
                          </small>

                          <div className="row mt-3 mb-0 pb-0">
                            <div className="col border-end">
                              <p className="fs-6 d-flex align-items-center mb-0 small">
                                {product?.rooms}{" "}
                                <span className="material-icons">bed</span>
                              </p>
                              <small className="mt-0">Cuartos</small>
                            </div>
                            <div className="col border-end">
                              <p className="fs-6 d-flex align-items-center mb-0 small">
                                {product?.bathrooms}{" "}
                                <span className="material-icons">shower</span>
                              </p>
                              <small className="mt-0">Baños</small>
                            </div>
                            <div className="col">
                              <p className="fs-6 d-flex align-items-center mb-0 small">
                                {product?.building_area}{" "}
                                <span className="material-icons">
                                  square_foot
                                </span>
                              </p>
                              <small className="mt-0 pt-0">m2</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselVentas"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselVentas"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h3 className="mb-0">
            <span className="mb-0 rounded-end-4 rounded-start-0 badge bg-danger">
              Arriendos destacados
            </span>
          </h3>
          <hr className="mt-0 text-danger" />
        </div>
      </div>

      <div className="row d-none d-md-flex">
        {tenancy &&
          tenancy.map((product) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-12">
                <Link href={`/product/${product?.id}`}>
                  <div className="card mb-4 rounded-3 shadow-sm position-relative">
                    <span
                      className="position-absolute mt-2 badge rounded-pill bg-danger"
                      style={{ right: 10 }}
                    >
                      En Venta
                    </span>

                    <span
                      className="position-absolute badge rounded text-bg-dark"
                      style={{ right: 5, top: 170 }}
                    >
                      <b className="bi bi-plus"></b>
                    </span>

                    <span
                      className="position-absolute badge rounded text-bg-dark"
                      style={{ right: 35, top: 170 }}
                    >
                      <b className="bi bi-heart"></b>
                    </span>

                    <span
                      className="position-absolute badge rounded text-bg-dark"
                      style={{ right: 65, top: 170 }}
                    >
                      <b className="bi bi-arrows-angle-expand"></b>
                    </span>

                    <span
                      className="position-absolute badge rounded-pill text-bg-dark"
                      style={{ left: 5, top: 170 }}
                    >
                      {product?.rental_fee &&
                        new Intl.NumberFormat("es-CO", options).format(
                          product?.rental_fee,
                        )}
                    </span>

                    <img
                      src={`data:image/jpeg;base64,${product?.image_1920}`}
                      className="card-img-top"
                      height={200}
                      alt="..."
                    />

                    <div className="card-body">
                      <h6 className="card-title mb-0">
                        <b className="bi bi-house"></b> {product?.name}
                      </h6>
                      <small className="border-bottom pb-2">
                        {product?.x_state && product.x_state[1].split(" ")[0]},{" "}
                        {product?.x_city && product.x_city[1].split(" ")[0]},{" "}
                        {product?.x_country &&
                          product.x_country[1].split(" ")[0]}
                      </small>

                      <div className="row mt-3 mb-0 pb-0">
                        <div className="col border-end">
                          <p className="fs-6 d-flex align-items-center mb-0 small">
                            {product?.rooms}{" "}
                            <span className="material-icons">bed</span>
                          </p>
                          <small className="mt-0">Cuartos</small>
                        </div>
                        <div className="col border-end">
                          <p className="fs-6 d-flex align-items-center mb-0 small">
                            {product?.bathrooms}{" "}
                            <span className="material-icons">shower</span>
                          </p>
                          <small className="mt-0">Baños</small>
                        </div>
                        <div className="col">
                          <p className="fs-6 d-flex align-items-center mb-0 small">
                            {product?.building_area}{" "}
                            <span className="material-icons">square_foot</span>
                          </p>
                          <small className="mt-0 pt-0">m2</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>

      <div className="row d-md-none d-sm-grid">
        <div id="carouselArriendos" className="carousel slide">
          <div className="carousel-indicators">
            {tenancy &&
              tenancy.map((_product, index) => {
                return (
                  <button
                    type="button"
                    data-bs-target="#carouselArriendos"
                    data-bs-slide-to={index}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                );
              })}
          </div>
          <div className="carousel-inner">
            {tenancy &&
              tenancy.map((product, index) => {
                return (
                  <div
                    className={`carousel-item ${index === 0 && "active"}`}
                    style={{ height: "100% !important" }}
                  >
                    <Link href={`/product/${product?.id}`}>
                      <div className="card mb-4 rounded-3 shadow-sm position-relative">
                        <span
                          className="position-absolute mt-2 badge rounded-pill bg-danger"
                          style={{ right: 10 }}
                        >
                          En Venta
                        </span>

                        <span
                          className="position-absolute badge rounded text-bg-dark"
                          style={{ right: 5, top: 170 }}
                        >
                          <b className="bi bi-plus"></b>
                        </span>

                        <span
                          className="position-absolute badge rounded text-bg-dark"
                          style={{ right: 35, top: 170 }}
                        >
                          <b className="bi bi-heart"></b>
                        </span>

                        <span
                          className="position-absolute badge rounded text-bg-dark"
                          style={{ right: 65, top: 170 }}
                        >
                          <b className="bi bi-arrows-angle-expand"></b>
                        </span>

                        <span
                          className="position-absolute badge rounded-pill text-bg-dark"
                          style={{ left: 5, top: 170 }}
                        >
                          {product?.rental_fee &&
                            new Intl.NumberFormat("es-CO", options).format(
                              product?.rental_fee,
                            )}
                        </span>

                        <img
                          src={`data:image/jpeg;base64,${product?.image_1920}`}
                          className="card-img-top"
                          height={200}
                          alt="..."
                        />

                        <div className="card-body">
                          <h6 className="card-title mb-0">
                            <b className="bi bi-house"></b> {product?.name}
                          </h6>
                          <small className="border-bottom pb-2">
                            {product?.x_state &&
                              product.x_state[1].split(" ")[0]}
                            ,{" "}
                            {product?.x_city && product.x_city[1].split(" ")[0]}
                            ,{" "}
                            {product?.x_country &&
                              product.x_country[1].split(" ")[0]}
                          </small>

                          <div className="row mt-3 mb-0 pb-0">
                            <div className="col border-end">
                              <p className="fs-6 d-flex align-items-center mb-0 small">
                                {product?.rooms}{" "}
                                <span className="material-icons">bed</span>
                              </p>
                              <small className="mt-0">Cuartos</small>
                            </div>
                            <div className="col border-end">
                              <p className="fs-6 d-flex align-items-center mb-0 small">
                                {product?.bathrooms}{" "}
                                <span className="material-icons">shower</span>
                              </p>
                              <small className="mt-0">Baños</small>
                            </div>
                            <div className="col">
                              <p className="fs-6 d-flex align-items-center mb-0 small">
                                {product?.building_area}{" "}
                                <span className="material-icons">
                                  square_foot
                                </span>
                              </p>
                              <small className="mt-0 pt-0">m2</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselArriendos"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselArriendos"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
