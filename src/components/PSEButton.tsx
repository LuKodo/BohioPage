import { Link } from "raviger";
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
          className="position-fixed bg-white end-0 me-4 mb-4 rounded-circle"
          style={{ bottom: 80, zIndex: 1000 }}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
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
