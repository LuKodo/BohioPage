import { useEffect, useState } from "preact/hooks";
import { Baths, Rooms, iProduct } from "../utils/interfaces.tsx";
import { useRecoilState } from "recoil";
import { filtersState } from "../utils/atom.tsx";
import { ModalSearch } from "./ModalSearch.tsx";

interface props {
  products: Array<iProduct | undefined> | undefined;
  setProducts: (products: Array<iProduct | undefined> | undefined) => void;
}

export function NavBar(props: props) {
  const { products, setProducts } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [modalTxt, setModalTxt] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [filters, setStatusFilters] = useRecoilState(filtersState);

  useEffect(() => {
    setProducts(products);
    const tiposActivos = filters.property
      .filter((f) => f.status)
      .map((tipo) => tipo.name);

    let productoEncontrado: Array<iProduct | undefined> | undefined =
      products?.filter((product) => {
        if (product) {
          const baths: number = Number(filters.baths);
          const parking: boolean = filters.parking;
          const rooms: number = Number(filters.rooms);
          const minBuildingArea: number = Number(filters.building_area[0]);
          const maxBuildingArea: number = Number(filters.building_area[1]);
          const minPrice: number = Number(filters.price[0]);
          const maxPrice: number = Number(filters.price[1]);
          const isBathsValid: boolean = product?.bathrooms >= baths;
          const isRoomsValid: boolean = product?.rooms >= rooms;
          let isBuildingAreaValid: boolean = true;
          if (maxBuildingArea > minBuildingArea) {
            isBuildingAreaValid =
              product?.building_area <= maxBuildingArea &&
              product?.building_area >= minBuildingArea;
          }
          let isPriceValid: boolean = true;
          if (maxPrice > minPrice) {
            if (product.rental_fee) {
              isPriceValid =
                product.rental_fee <= maxPrice &&
                product.rental_fee >= minPrice;
            }
          }

          return (
            isBathsValid &&
            isRoomsValid &&
            isBuildingAreaValid &&
            isPriceValid &&
            parking
          );
        } else {
          return;
        }
      });

    const filterTypeProduct =
      productoEncontrado &&
      productoEncontrado.filter((property) => {
        return (
          property &&
          (tiposActivos.includes("Todos") ||
            tiposActivos.includes(property.ptype[1]))
        );
      });

    const filterServiceProduct =
      filterTypeProduct &&
      filterTypeProduct.filter((property) => {
        return (
          property &&
          property.sale_lease &&
          property.sale_lease.includes(filters.service)
        );
      });

    setProducts(filterServiceProduct);
  }, [filters]);

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
                          value={filters.price[0]}
                          onInput={(e: Event) => {
                            const target = e.target as HTMLInputElement;
                            setStatusFilters({
                              ...filters,
                              price: [target.value, filters.price[1]],
                            });
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
                          value={filters.price[1]}
                          onInput={(e: Event) => {
                            const target = e.target as HTMLInputElement;
                            setStatusFilters({
                              ...filters,
                              price: [filters.price[0], target?.value],
                            });
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
                          value={filters.building_area[0]}
                          onInput={(e: Event) => {
                            const target = e.target as HTMLInputElement;
                            setStatusFilters({
                              ...filters,
                              building_area: [
                                target?.value,
                                filters.building_area[1],
                              ],
                            });
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
                          value={filters.building_area[1]}
                          onInput={(e: Event) => {
                            const target = e.target as HTMLInputElement;
                            setStatusFilters({
                              ...filters,
                              building_area: [
                                filters.building_area[0],
                                target?.value,
                              ],
                            });
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
                                    filters.rooms === name ? " active" : ""
                                  }`}
                                  aria-current="page"
                                >
                                  <a
                                    className={`${
                                      filters.rooms === name
                                        ? "page-link border-danger bg-danger text-white"
                                        : "page-link border-danger bg-white text-danger"
                                    }`}
                                    onClick={() =>
                                      setStatusFilters({
                                        ...filters,
                                        rooms: name,
                                      })
                                    }
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
                                    filters.baths === name ? " active" : ""
                                  }`}
                                  aria-current="page"
                                >
                                  <a
                                    className={`${
                                      filters.baths === name
                                        ? "page-link border-danger bg-danger text-white"
                                        : "page-link border-danger bg-white text-danger"
                                    }`}
                                    onClick={() =>
                                      setStatusFilters({
                                        ...filters,
                                        baths: name,
                                      })
                                    }
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
                        class="btn btn-danger"
                        onClick={() => {
                          setStatusFilters({
                            ...filters,
                            parking: true,
                          });
                        }}
                      >
                        Si
                      </div>
                    </div>
                    <div className="col-4 no-focus d-grid rounded p-2">
                      <div
                        class="btn btn-danger"
                        onClick={() => {
                          setStatusFilters({
                            ...filters,
                            parking: false,
                          });
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
