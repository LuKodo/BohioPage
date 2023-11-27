import { useEffect, useState } from "preact/hooks";

export function DropdownPropertyType() {
  const [openMenu, setOpenMenu] = useState(false);
  const [propertyType, setPropertyType] = useState<[]>([]);
  const [propertySelected, setPropertySelected] = useState<string[]>(["Todos"]);

  useEffect(() => {
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

    const properties = localStorage.getItem("property");
    const property = localStorage.getItem("propertySelected");
    properties && setPropertyType(JSON.parse(properties));
    property && setPropertySelected(JSON.parse(property));
  }, []);

  useEffect(() => {
    localStorage.setItem("propertySelected", JSON.stringify(propertySelected));
    localStorage.setItem("property", JSON.stringify(propertyType));
  }, [propertyType, propertySelected]);

  const onChangeStatus = (filterName: string) => {
    if (filterName === "Todos") {
      setPropertySelected(["Todos"]);
    } else {
      if (propertySelected.includes(filterName)) {
        if (propertySelected.length > 1)
          setPropertySelected(
            propertySelected.filter((item) => item !== filterName),
          );
      } else {
        setPropertySelected((prevSelected) => {
          const update = prevSelected.filter((item) => item !== "Todos");
          return [...update, filterName];
        });
      }
    }
  };

  return (
    <div className="p-2">
      <div
        className="d-grid align-items-center"
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
      >
        <small className="w-100">Inmuebles</small>
        <div className="text-truncate">
          {propertySelected.join(", ")} &nbsp;{" "}
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
          onMouseLeave={() => setOpenMenu(false)}
          onMouseEnter={() => setOpenMenu(true)}
        >
          {propertyType.map((property) => {
            return (
              <div
                onClick={() => onChangeStatus(property)}
                className={`btn btn-sm d-flex m-2 align-items-center ${
                  propertySelected.includes(property)
                    ? "bg-danger text-white"
                    : "border-danger text-danger"
                }`}
              >
                <span className="material-icons fs-6">house</span>
                <span className="text-decoration-none" href="#">
                  {property}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function DropdownServices() {
  const [openMenu, setOpenMenu] = useState(false);
  const [service, setService] = useState("");

  const serviceToLabel = (key: string) => {
    switch (key) {
      case "all":
        return "Todos";
      case "for_sale":
        return "En Venta";
      case "for_tenancy":
        return "En arriendo";
      case "for_t_and_sale":
        return "Arriendo y Venta";
      case "for_vacation":
        return "Vacacional";
    }
  };

  useEffect(() => {
    localStorage.setItem("service", "all");
    const service = localStorage.getItem("service");
    service && setService(service);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
    localStorage.setItem("service", service);
  }, [service]);

  return (
    <div className="p-2">
      <div
        className="d-grid align-items-center"
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
      >
        <small className="w-100">Servicios</small>
        <div>
          {serviceToLabel(service)} &nbsp;{" "}
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
          <div
            onClick={() => setService("all")}
            className={`btn d-flex m-2 align-items-center ${
              service === "all"
                ? "bg-danger text-white"
                : "border-danger text-danger"
            }`}
          >
            <span className="material-icons fs-6">check_circle</span>&nbsp;
            <span className="text-decoration-none" href="#">
              Todos
            </span>
          </div>
          <div
            onClick={() => setService("for_sale")}
            className={`btn d-flex m-2 align-items-center ${
              service === "for_sale"
                ? "bg-danger text-white"
                : "border-danger text-danger"
            }`}
          >
            <span className="material-icons fs-6">check_circle</span>&nbsp;
            <span className="text-decoration-none" href="#">
              En Venta
            </span>
          </div>
          <div
            onClick={() => setService("for_tenancy")}
            className={`btn d-flex m-2 align-items-center ${
              service === "for_tenancy"
                ? "bg-danger text-white"
                : "border-danger text-danger"
            }`}
          >
            <span className="bi bi-coin fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              En arriendo
            </span>
          </div>
          <div
            onClick={() => setService("for_t_and_sale")}
            className={`btn d-flex m-2 align-items-center ${
              service === "for_t_and_sale"
                ? "bg-danger text-white"
                : "border-danger text-danger"
            }`}
          >
            <span className="bi bi-coin fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Arriendo y Venta
            </span>
          </div>
          <div
            onClick={() => setService("for_vacation")}
            className={`btn d-flex m-2 align-items-center ${
              service === "for_vacation"
                ? "bg-danger text-white"
                : "border-danger text-danger"
            }`}
          >
            <span className="bi bi-umbrella fs-6"></span>&nbsp;
            <span className="text-decoration-none" href="#">
              Vacacional
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
