import { Link } from "preact-router";
import { Component } from "preact";
import { Tooltip } from "bootstrap";

export class PSEButton extends Component {
  componentDidMount() {
    // @ts-ignore
    new Tooltip(document.querySelector('[data-bs-toggle="tooltip"]'));
  }
  render() {
    return (
      <Link href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00019897&origen=buscar">
        <div
          className="circleAzul position-fixed bg-white end-0 me-4 mb-4 rounded-circle"
          style={{ bottom: 90 }}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-className="custom-tooltip"
          data-bs-title="Paga aquí tu factura"
        >
          <img
            src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/pse-logo.png?raw=true"
            alt=""
            width={60}
          />
        </div>
      </Link>
    );
  }
}
