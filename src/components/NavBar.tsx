import { useEffect, useState } from "preact/hooks";
import { Baths, iLocation, iProduct, Rooms } from "../utils/interfaces.tsx";
import { ModalSearch } from "./ModalSearch.tsx";
import { filterProducts } from "../utils/filterProducts.tsx";
import { clearFilters } from "../utils/atom.tsx";

interface props {
  products: Array<iProduct | undefined> | undefined | null;
  setProducts: (products: null | undefined | (iProduct | undefined)[]) => void;
}

export function NavBar(props: props) {
  const [modal, setModal] = useState<boolean>(false);
  const [modalTxt, setModalTxt] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [location, setLocation] = useState<iLocation[] | null>(null);
  const [locationSelected, setLocationSelected] = useState<string>("");
  const [list, setList] = useState<string[] | null>(null);
  const [service, setService] = useState("");

  const [baths, setBaths] = useState<string>();
  const [parking, setParking] = useState<boolean>();
  const [rooms, setRooms] = useState<string>();
  const [building_area, setBuilding_area] = useState<string[]>();
  const [price, setPrice] = useState<string[]>();

  const [propertyType, setPropertyType] = useState<[]>([]);
  const [propertySelected, setPropertySelected] = useState<string[]>(["Todos"]);

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

  const clearMyFilters = () => {
    clearFilters();
    let roomSelected = localStorage.getItem("rooms");
    let bathsSelected = localStorage.getItem("baths");

    bathsSelected && setBaths(bathsSelected);
    setParking(Boolean(localStorage.getItem("parking")));
    roomSelected && setRooms(roomSelected);
    setBuilding_area(
      JSON.parse(localStorage.getItem("building_area") as string),
    );
    setPrice(JSON.parse(localStorage.getItem("price") as string));
  };

  useEffect(() => {
    let roomSelected = localStorage.getItem("rooms");
    let bathsSelected = localStorage.getItem("baths");

    bathsSelected && setBaths(bathsSelected);
    setParking(Boolean(localStorage.getItem("parking")));
    roomSelected && setRooms(roomSelected);
    setBuilding_area(
      JSON.parse(localStorage.getItem("building_area") as string),
    );
    setPrice(JSON.parse(localStorage.getItem("price") as string));

    const properties = localStorage.getItem("property");
    const property = localStorage.getItem("propertySelected");
    properties && setPropertyType(JSON.parse(properties));
    property && setPropertySelected(JSON.parse(property));

    const cities = localStorage.getItem("cities");
    const selected = localStorage.getItem("location");
    selected && setLocationSelected(selected);

    if (cities !== null) {
      const locationClean = JSON.parse(cities).map((item: iLocation) => {
        item.country = item.country_id[1];
        item.state = item.state_id[1];
        return item;
      });
      setLocation(locationClean);
    }

    const service = localStorage.getItem("service");
    service && setService(service);
  }, []);

  useEffect(() => {
    price && localStorage.setItem("price", JSON.stringify(price));
    baths && localStorage.setItem("baths", String(baths));
    parking
      ? localStorage.setItem("parking", "true")
      : localStorage.setItem("parking", "false");
    rooms && localStorage.setItem("rooms", String(rooms));
    building_area &&
      localStorage.setItem("building_area", JSON.stringify(building_area));

    propertySelected &&
      localStorage.setItem(
        "propertySelected",
        JSON.stringify(propertySelected),
      );
    propertyType &&
      localStorage.setItem("property", JSON.stringify(propertyType));

    service && localStorage.setItem("service", service);

    props.setProducts(filterProducts(props.products));
  }, [
    baths,
    rooms,
    parking,
    building_area,
    price,
    propertySelected,
    propertyType,
    locationSelected,
    service,
  ]);

  const search = (e: Event) => {
    const target = e.target as HTMLInputElement;
    let term = target.value;
    setLocationSelected(term);
    localStorage.setItem("location", term);

    if (term.length >= 3) {
      setOpenMenu(true);
      let res: string[] = [];

      location &&
        location.map((item) => {
          res.push(
            item.name.toLowerCase() +
              ", " +
              item.state.split(" ")[0].toLowerCase(),
          );
        });

      res = res.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase()),
      );
      setList(res);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <ModalSearch
        error={error}
        setError={setError}
        modal={modal}
        modalTxt={modalTxt}
        setModal={setModal}
        setModalTxt={setModalTxt}
      />

      <div className="border rounded p-3">
        <div className="w-100">
          <div className="alert alert-danger d-sm-block d-md-none">
            <b className="bi bi-pin-map-fill bg-danger p-1 text-white rounded"></b>
            &nbsp;<strong>Ubicación</strong>
          </div>

          <div className="alert alert-light d-sm-block d-md-none">
            <div className="row px-3 py-0">
              <div className="col-12 ps-0 pb-1 d-flex flex-wrap">
                <input
                  onInput={search}
                  value={locationSelected}
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="Ubicación"
                />
                {openMenu && (
                  <div
                    className="border bg-white rounded p-2 d-grid position-absolute"
                    style={{
                      marginTop: "80px",
                      width: 330,
                      zIndex: 1000,
                      overflowY: "auto",
                      height: 300,
                    }}
                  >
                    {list &&
                      list.map((item) => {
                        return (
                          <div
                            onClick={() => {
                              setLocationSelected(item);
                              setOpenMenu(false);
                              localStorage.setItem("location", item);
                            }}
                            className="btn text-start mx-2 text-capitalize"
                          >
                            {item}
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="alert alert-danger d-sm-block d-md-none">
            <b className="bi bi-house bg-danger p-1 text-white rounded"></b>
            &nbsp;<strong>Tipo de inmueble</strong>
          </div>

          <div className="alert alert-light d-sm-block d-md-none">
            <div className="row py-0">
              <div className="col-12 ps-0 pe-0 d-flex flex-wrap">
                {propertyType.map((property) => {
                  return (
                    <div
                      onClick={() => onChangeStatus(property)}
                      className={`btn d-flex btn-sm m-1 align-items-center ${
                        propertySelected.includes(property)
                          ? "bg-danger text-white"
                          : "border-danger bg-white text-danger"
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
            </div>
          </div>

          <div className="alert alert-danger d-sm-block d-md-none">
            <b className="bi bi-house bg-danger p-1 text-white rounded"></b>
            &nbsp;<strong>Tipo de servicio</strong>
          </div>

          <div class="alert alert-light d-sm-block d-md-none">
            <div class="row">
              <div className="col-12 ps-0 pe-0 d-flex flex-wrap">
                <div
                  onClick={() => setService("all")}
                  className={`btn btn-sm d-flex m-1 align-items-center ${
                    service === "all"
                      ? "bg-danger text-white"
                      : "border-danger text-danger"
                  }`}
                >
                  <span className="material-icons fs-6">check_circle</span>
                  &nbsp;
                  <span className="text-decoration-none" href="#">
                    Todos
                  </span>
                </div>
                <div
                  onClick={() => setService("for_sale")}
                  className={`btn btn-sm d-flex m-1 align-items-center ${
                    service === "for_sale"
                      ? "bg-danger text-white"
                      : "border-danger text-danger"
                  }`}
                >
                  <span className="material-icons fs-6">check_circle</span>
                  &nbsp;
                  <span className="text-decoration-none" href="#">
                    En Venta
                  </span>
                </div>
                <div
                  onClick={() => setService("for_tenancy")}
                  className={`btn btn-sm d-flex m-1 align-items-center ${
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
                  className={`btn btn-sm d-flex m-1 align-items-center ${
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
                  className={`btn btn-sm d-flex m-1 align-items-center ${
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
            </div>
          </div>

          <div className="alert alert-danger">
            <b className="bi bi-coin bg-danger p-1 text-white rounded"></b>
            &nbsp;<strong>Valor y estado</strong>
          </div>

          <div class="alert alert-light">
            <div class="row px-3 py-0">
              <div class="col-12 ps-0 pb-1">
                <label className="fw-bold">Precio</label>
              </div>

              <div className="col-5 no-focus d-grid bg-white rounded p-2 border">
                <label className="w-100" style={{ fontSize: 10 }}>
                  Desde COP
                </label>
                <div className="d-flex">
                  <span>$ </span>
                  <input
                    type="text"
                    value={price != null ? price[0] : 0}
                    onInput={(e: Event) => {
                      const target = e.target as HTMLInputElement;
                      setPrice(price && [target.value, price[1]]);
                    }}
                    className="border-0 rounded w-100"
                    placeholder="100.000"
                  />
                </div>
              </div>
              <div className="col-5 offset-1 no-focus d-grid bg-white rounded border p-2">
                <label className="w-100" style={{ fontSize: 10 }}>
                  Hasta COP
                </label>
                <div className="d-flex">
                  <span>$ </span>
                  <input
                    type="text"
                    value={price != null ? price[1] : 0}
                    onInput={(e: Event) => {
                      const target = e.target as HTMLInputElement;
                      setPrice(price && [price[0], target?.value]);
                    }}
                    className="border-0 rounded w-100"
                    placeholder="5.000.000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-danger">
            <b className="bi bi-box bg-danger text-white p-1 rounded"></b>&nbsp;
            <strong>Tamaño y espacios</strong>
          </div>

          <div className="alert alert-light">
            <div className="row">
              <div className="col mb-2">
                <label className="fw-bold">Área</label>
              </div>
            </div>
            <div className="row">
              <div className="col-6 no-focus d-grid rounded p-2">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={building_area && building_area[0]}
                    onInput={(e: Event) => {
                      const target = e.target as HTMLInputElement;
                      setBuilding_area(
                        building_area && [target?.value, building_area[1]],
                      );
                    }}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Desde (m2)</label>
                </div>
              </div>
              <div className="col-6 no-focus d-grid rounded p-2">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={building_area && building_area[1]}
                    onInput={(e: Event) => {
                      const target = e.target as HTMLInputElement;
                      setBuilding_area(
                        building_area && [building_area[0], target?.value],
                      );
                    }}
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Hasta (m2)</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col mb-2">
                <label className="fw-bold">Espacios</label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span>Habitaciones</span>
              </div>
              <div className="col-6 no-focus d-grid rounded p-2">
                <nav>
                  <ul className="pagination fw-bold">
                    {Rooms &&
                      Rooms.map((name) => {
                        return (
                          <li
                            className={`page-item ${
                              rooms === name ? " active" : ""
                            }`}
                            aria-current="page"
                          >
                            <a
                              className={`${
                                rooms === name
                                  ? "page-link border-danger bg-danger text-white"
                                  : "page-link border-danger bg-white text-danger"
                              }`}
                              onClick={() => setRooms(name)}
                            >
                              {name === "4" ? "4+" : name}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span>Baños</span>
              </div>
              <div className="col-6 no-focus d-grid rounded p-2">
                <nav>
                  <ul className="pagination fw-bold">
                    {Baths &&
                      Baths.map((name) => {
                        return (
                          <li
                            className={`page-item ${
                              baths === name ? " active" : ""
                            }`}
                            aria-current="page"
                          >
                            <a
                              className={`${
                                baths === name
                                  ? "page-link border-danger bg-danger text-white"
                                  : "page-link border-danger bg-white text-danger"
                              }`}
                              onClick={() => setBaths(name)}
                            >
                              {name === "4" ? "4+" : name}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <span>Parqueadero</span>
              </div>
              <div className="col-4 no-focus d-grid rounded p-2">
                <div
                  className={`btn ${
                    !parking ? "btn-outline-danger" : "btn-danger"
                  }`}
                  onClick={() => {
                    setParking(true);
                  }}
                >
                  Si
                </div>
              </div>
              <div className="col-4 no-focus d-grid rounded p-2">
                <div
                  className={`btn ${
                    !parking ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => {
                    setParking(false);
                  }}
                >
                  No
                </div>
              </div>
            </div>
          </div>

          <div className="alert">
            <span
              className="btn btn-danger"
              style={{ width: "100%" }}
              onClick={() => setModal(true)}
            >
              &nbsp;<strong>Buscar por código</strong>
              <b className="bi bi-search p-1 m-1 text-white rounded"></b>
            </span>
          </div>

          <div className="alert pt-0">
            <span
              className="btn btn-outline-danger"
              style={{ width: "100%" }}
              onClick={() => clearMyFilters()}
            >
              &nbsp;<strong>Limpiar filtros</strong>
              <b className="bi bi-stars p-1 m-1 text-danger rounded"></b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
