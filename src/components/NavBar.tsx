import { useEffect, useState } from "preact/hooks";
import { Baths, iProduct, Rooms } from "../utils/interfaces.tsx";
import { ModalSearch } from "./ModalSearch.tsx";
import { filterProducts } from "../utils/filterProducts.tsx";

interface props {
  products: Array<iProduct | undefined> | undefined;
  setProducts: (products: Array<iProduct | undefined> | undefined) => void;
}

export function NavBar(props: props) {
  const [modal, setModal] = useState<boolean>(false);
  const [modalTxt, setModalTxt] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [baths, setBaths] = useState<number>();
  const [parking, setParking] = useState<boolean>();
  const [rooms, setRooms] = useState<number>();
  const [building_area, setBuilding_area] = useState<string[]>();
  const [price, setPrice] = useState<string[]>();

  useEffect(() => {
    setBaths(Number(localStorage.getItem("baths")));
    setParking(Boolean(localStorage.getItem("parking")));
    setRooms(Number(localStorage.getItem("rooms")));
    setBuilding_area(
      JSON.parse(localStorage.getItem("building_area") as string),
    );
    setPrice(JSON.parse(localStorage.getItem("price") as string));
  }, []);

  useEffect(() => {
    filterProducts(props.products);
  }, []);

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
        <div className="no-focus">
          <div className="accordion w-100" id="accordionExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <b className="bi bi-coin bg-success p-1 text-white rounded"></b>
                  &nbsp;<strong>Valor y estado</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show bg-danger-subtle"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col p-0 mb-2">
                      <label className="fw-bold">Precio</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5 no-focus d-grid bg-white rounded p-2">
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
                    <div className="col-5 offset-1 no-focus d-grid bg-white rounded p-2">
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
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b className="bi bi-box bg-warning p-1 rounded"></b>&nbsp;
                  <strong>Tamaño y espacios</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse bg-danger-subtle"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
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
                              building_area && [
                                target?.value,
                                building_area[1],
                              ],
                            );
                          }}
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Desde (m2)</label>
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
                              building_area && [
                                building_area[0],
                                target?.value,
                              ],
                            );
                          }}
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Hasta (m2)</label>
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
                                    rooms === Number(name) ? " active" : ""
                                  }`}
                                  aria-current="page"
                                >
                                  <a
                                    className={`${
                                      rooms === Number(name)
                                        ? "page-link border-danger bg-danger text-white"
                                        : "page-link border-danger bg-white text-danger"
                                    }`}
                                    onClick={() => setRooms(Number(name))}
                                  >
                                    {name}
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
                                    baths === Number(name) ? " active" : ""
                                  }`}
                                  aria-current="page"
                                >
                                  <a
                                    className={`${
                                      baths === Number(name)
                                        ? "page-link border-danger bg-danger text-white"
                                        : "page-link border-danger bg-white text-danger"
                                    }`}
                                    onClick={() => setBaths(Number(name))}
                                  >
                                    {name}
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
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  onClick={() => setModal(true)}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <b className="bi bi-star bg-primary p-1 text-white rounded"></b>
                  &nbsp;<strong>Buscar por código</strong>
                </button>
              </h2>
            </div>
            <div className="border-top mt-2 text-center">
              <span className="btn border mt-3" style={{ width: "80%" }}>
                <strong>Limpiar filtros</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
