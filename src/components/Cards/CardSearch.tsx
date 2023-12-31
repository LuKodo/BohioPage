import { Link } from "preact-router";
import { iProduct } from "../../utils/interfaces.tsx";

interface props {
  product: iProduct;
}
export function CardProductSearch(props: props) {
  const { product } = props;
  const options = {
    style: "currency",
    currency: "COP", // Cambia a tu moneda deseada (por ejemplo, 'EUR' para euros)
    minimumFractionDigits: 0, // Número mínimo de decimales
    maximumFractionDigits: 0, // Número máximo de decimales
  };
  const service = (key: string) => {
    switch (key) {
      case "all":
        return "todos";
      case "for_sale":
        return "venta";
      case "for_tenancy":
        return "arriendo";
      case "for_t_and_sale":
        return "arriendo y venta";
      case "for_vacation":
        return "alquiler vacacional";
    }
  };
  const serviceToLabel = (key: string) => {
    switch (key) {
      case "for_sale":
        return "Venta";
      case "for_tenancy":
        return "Arriendo";
      case "for_t_and_sale":
        return "Arriendo y Venta";
      case "for_vacation":
        return "Vacacional";
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="card mb-4 rounded-3 shadow-sm position-relative"
        style={{ height: "95%" }}
      >
        <span
          className="position-absolute mt-2 badge rounded-3 bg-danger"
          style={{ left: 10 }}
        >
          {product.sale_lease && serviceToLabel(product.sale_lease)}
        </span>
        {product.video_url ? (
          <img
            src={product.video_url}
            className="card-img-top"
            height={150}
            alt="..."
          />
        ) : (
          <img
            src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/card-3.png?raw=true"
            className="card-img-top"
            height={150}
            alt="..."
          />
        )}

        <div className="card-body">
          {product.sale_lease === "for_t_and_sale" ? (
            <>
              <h6 className="card-title mb-0 fw-bold small">
                {product.list_price !== 0 &&
                  "Venta: " +
                    new Intl.NumberFormat("es-CO", options).format(
                      product.list_price,
                    ) +
                    " COP"}
              </h6>
              <h6 className="card-title mb-0 mt-2 fw-bold small">
                {"Arriendo: " +
                  new Intl.NumberFormat("es-CO", options).format(
                    product.rental_fee,
                  )}{" "}
                {" COP"}
              </h6>
            </>
          ) : (
            <h6 className="card-title mb-0 fw-bold small">
              {new Intl.NumberFormat("es-CO", options).format(
                product.rental_fee,
              )}{" "}
              {" COP"}
            </h6>
          )}
          <div
            className="d-inline-flex align-items-center mb-0 pb-0 text-secondary"
            style={{ fontSize: "11px" }}
          >
            {product.building_area}m<span className="supIndex">2</span>
            <span className="material-icons fs-5">square_foot</span> |{" "}
            {product.rooms}
            <span className="material-icons fs-5">bed</span> |{" "}
            {product.bathrooms}
            <span className="material-icons fs-5">shower</span>
          </div>
          <br />
          <small
            className="pb-2 text-capitalize text-secondary"
            style={{ fontSize: "11px" }}
          >
            {(product.x_city && product.x_city[1].split(" ")[0].toLowerCase()) +
              ", " +
              (product.x_city && product.x_city[1].split(" ")[2].toLowerCase())}
          </small>

          <div className="row mt-3 mb-0 pb-0">
            <div className="col-1">
              <small className="fw-bold" style={{ fontSize: "11px" }}>
                <span className="material-icons fs-5">apartment</span>{" "}
              </small>
            </div>
            <div className="col" style={{ fontSize: "11px" }}>
              <div className="row">
                <div className="col-12 fw-bold">
                  {product.ptype[1]} en{" "}
                  {product.sale_lease && service(product.sale_lease)}
                </div>
                <div className="col-12">
                  Por <small className="fw-bold">Bohio Consultores</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 d-grid">
            <div className="col-12">
              <button className="btn w-100 btn-outline-danger">
                <b className="bi bi-envelope"></b> Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
