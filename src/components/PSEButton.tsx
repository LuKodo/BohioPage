import { Link } from "raviger";

export function PSEButton() {
  return (
    <Link href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00019897&origen=buscar">
      <div className="position-fixed end-25 me-4 bottom-0 mb-4 rounded-circle">
        <img
          src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/pse-logo.png?raw=true"
          alt=""
          width={80}
        />
      </div>
    </Link>
  );
}
