import { Link } from "preact-router";
import { iProduct } from "../../utils/interfaces.tsx";

interface props {
  product: iProduct;
}

interface CardOne {
  image: string;
  titulo: string;
  detalles: string;
}

function CardTypeOne(props: CardOne) {
  return (
    <div className="card bg-danger text-white" style="width: 100%;">
      <img
        src={props.image}
        className="card-img-top p-3"
        height={300}
        alt="..."
      />
      <div className="card-body d-grid pt-0">
        <h5 className="card-title text-center border-bottom pb-2">
          {props.titulo}
        </h5>
        <p className="card-text text-center">{props.detalles}</p>
        <a
          href="#"
          className="btn bg-white rounded-pill text-danger fw-bold btn-sm"
        >
          <b className="bi bi-play-fill"></b> Ver mas...
        </a>
      </div>
    </div>
  );
}

function CardTypeTwo(props: props) {
  const { product } = props;
  const options = {
    style: "currency",
    currency: "COP", // Cambia a tu moneda deseada (por ejemplo, 'EUR' para euros)
    minimumFractionDigits: 2, // Número mínimo de decimales
    maximumFractionDigits: 2, // Número máximo de decimales
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="card mb-4 rounded-3 shadow-sm position-relative">
        <span
          className="position-absolute mt-2 badge rounded-pill bg-danger"
          style={{ right: 10 }}
        >
          {product.rental ? "Venta" : "Arriendo"}
        </span>

        <span
          className="position-absolute badge rounded bg-secondary"
          style={{ right: 5, top: 170 }}
        >
          <b className="bi bi-plus"></b>
        </span>

        <span
          className="position-absolute badge rounded bg-secondary"
          style={{ right: 35, top: 170 }}
        >
          <b className="bi bi-heart"></b>
        </span>

        <span
          className="position-absolute badge rounded bg-secondary"
          style={{ right: 65, top: 170 }}
        >
          <b className="bi bi-arrows-angle-expand"></b>
        </span>

        <span
          className="position-absolute badge rounded-pill bg-secondary"
          style={{ left: 5, top: 170 }}
        >
          {new Intl.NumberFormat("es-CO", options).format(product.rental_fee)}
        </span>

        <img
          src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/card-3.png?raw=true"
          className="card-img-top"
          height={200}
          alt="..."
        />

        <div className="card-body">
          <h6 className="card-title mb-0">
            <b className="bi bi-house"></b> {product.name}
          </h6>
          <small className="border-bottom pb-2">
            {product.x_state && product.x_state[1].split(" ")[0]},{" "}
            {product.x_city && product.x_city[1].split(" ")[0]},{" "}
            {product.x_country && product.x_country[1].split(" ")[0]}
          </small>

          <div className="row mt-3 mb-0 pb-0">
            <div className="col border-end">
              <p className="fs-6 d-flex align-items-center mb-0">
                {product.rooms} &nbsp;
                <span className="material-icons fs-5">bed</span>
              </p>
            </div>
            <div className="col border-end">
              <p className="fs-6 d-flex align-items-center mb-0">
                {product.bathrooms} &nbsp;
                <span className="material-icons fs-5">shower</span>
              </p>
            </div>
            <div className="col">
              <p className="fs-6 d-flex align-items-center mb-0">
                {product.building_area} &nbsp;
                <span className="material-icons fs-5">square_foot</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { CardTypeOne, CardTypeTwo };
