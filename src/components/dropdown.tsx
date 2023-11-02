import { useState } from "preact/hooks";
import { useRecoilState } from "recoil";
import { filtersState } from "../utils/atom.tsx";

export function Dropdown() {
  const [openMenu, setOpenMenu] = useState(false);
  const [filters, setFilters] = useRecoilState(filtersState);

  function onChangeStatus(name: string) {
    if (name === "Todos") {
      setFilters({
        ...filters,
        property: filters.property.map((item) => {
          return { ...item, status: item.name === name };
        }),
      });
    } else {
      setFilters({
        ...filters,
        property: filters.property.map((item) =>
          item.name === "Todos" ? { ...item, status: false } : item,
        ),
      });

      setFilters((prev) => ({
        ...prev,
        property: prev.property.map((filter) =>
          filter.name === name ? { ...filter, status: !filter.status } : filter,
        ),
      }));
    }
  }

  function getStatus() {
    const filter = filters.property.filter((f) => f.status);
    return filter.map((item) => item.name).join(", ");
  }

  function getStatusFilter(name: string) {
    const filter = filters.property.find((f) => f.name === name);
    return filter && filter.status;
  }

  return (
    <div className="p-2">
      <div
        className="d-grid align-items-center"
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
      >
        <small className="w-100">Inmuebles</small>
        <div className="text-truncate">
          {getStatus()} &nbsp;{" "}
          {openMenu ? (
            <span className="material-icons fs-6">expand_less</span>
          ) : (
            <span className="material-icons fs-6">expand_more</span>
          )}
        </div>
      </div>
      {openMenu && (
        <div
          className="border bg-white rounded p-2 d-flex flex-wrap position-absolute mt-3"
          style={{ width: 410, zIndex: 1000 }}
        >
          <a
            onClick={() => onChangeStatus("Todos")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Todos")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">check_circle</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Todos
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Apartamento")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Apartamento")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="bi bi-building-fill fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Apartamento
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Apartaestudio")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Apartaestudio")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="bi bi-building-fill fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Apartaestudio
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Casa")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Casa")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="bi bi-house-fill fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Casa
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Cabaña")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Cabaña")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">villa</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Cabaña
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Casa Campestre")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Casa Campestre")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Casa Campestre
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Casa Lote")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Casa Lote")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Casa Lote
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Finca")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Finca")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Finca
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Habitación")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Habitación")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Habitación
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Lote")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Lote")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Lote
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Bodega")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Bodega")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Bodega
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Consultorio")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Consultorio")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Consultorio
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Local")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Local")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Local
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Oficina")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Oficina")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Oficina
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Parqueadero")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Parqueadero")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Parqueadero
            </span>
          </a>
          <a
            onClick={() => onChangeStatus("Edificio")}
            className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Edificio")
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">night_shelter</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Edificio
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

export function DropdownServices() {
  const [openMenu, setOpenMenu] = useState(false);
  const [filters, setFilters] = useRecoilState(filtersState);

  const service = (key: string) => {
    switch (key) {
      case 'for_sale':
        return "En Venta"
      case 'for_tenancy':
        return "En arriendo"
      case 'for_t_and_sale':
        return "Arriendo y Venta"
      default:
        return "Vacacional"
    }
  }

  return (
    <div className="p-2">
      <div
        className="d-grid align-items-center"
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
      >
        <small className="w-100">Servicios</small>
        <div>
          {service(filters.service)} &nbsp;{" "}
          {openMenu ? (
            <span className="material-icons fs-6">expand_less</span>
          ) : (
            <span className="material-icons fs-6">expand_more</span>
          )}
        </div>
      </div>
      {openMenu && (
        <div
          className="border bg-white rounded p-2 d-flex flex-wrap position-absolute mt-3"
          style={{ width: 350, zIndex: 1000 }}
        >
          <a
            onClick={() => setFilters({...filters, service: "for_sale"})}
            className={`btn d-flex m-2 align-items-center ${filters.service === "for_sale"
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="material-icons fs-6">check_circle</span>&nbsp;
            <span className="text-decoration-none" href="#">
              En Venta
            </span>
          </a>
          <a
            onClick={() => setFilters({...filters, service: "for_tenancy"})}
            className={`btn d-flex m-2 align-items-center ${filters.service === "for_tenancy"
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="bi bi-coin fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              En arriendo
            </span>
          </a>
          <a
            onClick={() => setFilters({...filters, service: "for_t_and_sale"})}
            className={`btn d-flex m-2 align-items-center ${filters.service === "for_t_and_sale"
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="bi bi-coin fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Arriendo y Venta
            </span>
          </a>
          <a
            onClick={() => setFilters({...filters, service: "Vacacional"})}
            className={`btn d-flex m-2 align-items-center ${filters.service === "Vacacional"
              ? "bg-danger text-white"
              : "border-danger text-danger"
              }`}
          >
            <span className="bi bi-umbrella fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Vacacional
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
