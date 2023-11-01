import { useEffect, useState } from "preact/hooks";
import { Baths, iFilters, Rooms, iProduct } from "../utils/interfaces.tsx";
import { initFilter } from "../pages/lookup.tsx";
import { instance } from "../utils/instance.tsx";
import { navigate } from "raviger";

interface props {
    filters: iFilters,
    setStatusFilters: (filters: iFilters) => void,
    products: Array<iProduct | undefined> | undefined,
    setProducts: (products: Array<iProduct | undefined> | undefined) => void
}

export function NavBar(props: props) {
    const { filters, setStatusFilters, products, setProducts } = props
    const [modal, setModal] = useState<boolean>(false)
    const [modalTxt, setModalTxt] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleInputChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setModalTxt(target.value)
    }

    const searchByCode = async (code: string) => {
        const queryParams = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "property_template_image_ids", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: `[["is_property", "=", "true"], ["code", "=", "${code}"]]`,
            limit: 1
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })

            navigate(`/product/${response.data[0].id}`)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    useEffect(() => {
        setProducts(products)

        const productoEncontrado: Array<iProduct | undefined> | undefined = products?.filter((product) => {
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
                let isBuildingAreaValid: boolean = true
                if (maxBuildingArea > minBuildingArea) {
                    isBuildingAreaValid = (product?.building_area <= maxBuildingArea && product?.building_area >= minBuildingArea);
                }
                let isPriceValid: boolean = true
                if (maxPrice > minPrice) {
                    if (product.rental_fee) {
                        isPriceValid = (product.rental_fee <= maxPrice && product.rental_fee >= minPrice);
                    }
                }

                return isBathsValid && isRoomsValid && isBuildingAreaValid && isPriceValid && parking;
            } else { return }
        });

        setProducts(productoEncontrado)
    }, [filters])

    return (
        <>
            <div class={`modal ${modal ? "d-block fade show" : "d-none"}`} tabIndex={-1}>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body mt-0 mx-3">
                            <h5 class="modal-title mb-0 mt-3">Buscar por código</h5>
                            <p className="small mb-3">Ingresa el código del inmueble que quieres encontrar</p>
                            <input type="text" value={modalTxt} onChange={handleInputChange} name="" placeholder="Código del inmueble" className="form-control form-control-lg" />
                            <span className={`small text-danger ${error ? 'd-block' : 'd-none'}`}>Código incorrecto o no existe</span>
                        </div>
                        <div class="modal-footer border-0 mx-3 row">
                            <button type="button" class="btn btn-outline-danger col-3" onClick={() => setModal(false)} data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger col-3" onClick={() => searchByCode(modalTxt)}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border rounded p-3">
                <div className="no-focus">
                    <div className="accordion w-100" id="accordionExample">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <b className="bi bi-coin bg-success p-1 text-white rounded"></b>&nbsp;<strong>Valor y estado</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show bg-danger-subtle" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col p-0 mb-2">
                                            <label className="fw-bold">Precio</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5 no-focus d-grid bg-white rounded p-2">
                                            <label className="w-100" style={{ fontSize: 10 }}>Desde COP</label>
                                            <div className="d-flex">
                                                <span>$ </span>
                                                <input type="text" value={filters.price[0]} onInput={(e: Event) => {
                                                    const target = e.target as HTMLInputElement;
                                                    setStatusFilters({ ...filters, ["price"]: [target.value, filters.price[1]] })
                                                }
                                                } className="border-0 rounded w-100" placeholder="100.000" />
                                            </div>
                                        </div>
                                        <div className="col-5 offset-1 no-focus d-grid bg-white rounded p-2">
                                            <label className="w-100" style={{ fontSize: 10 }}>Hasta COP</label>
                                            <div className="d-flex">
                                                <span>$ </span>
                                                <input type="text" value={filters.price[1]} onInput={(e: Event) => {
                                                    const target = e.target as HTMLInputElement;
                                                    setStatusFilters({ ...filters, ["price"]: [filters.price[0], target?.value] })
                                                }
                                                } className="border-0 rounded w-100" placeholder="5.000.000" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b className="bi bi-box bg-warning p-1 rounded"></b>&nbsp;<strong>Tamaño y espacios</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse bg-danger-subtle" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col mb-2">
                                            <label className="fw-bold">Área</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 no-focus d-grid rounded p-2">
                                            <div className="form-floating mb-3">
                                                <input type="text" value={filters.building_area[0]} onInput={(e: Event) => {
                                                    const target = e.target as HTMLInputElement;
                                                    setStatusFilters({ ...filters, ["building_area"]: [target?.value, filters.building_area[1]] })
                                                }
                                                } className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Desde (m2)</label>
                                            </div>
                                        </div>
                                        <div className="col-6 no-focus d-grid rounded p-2">
                                            <div className="form-floating mb-3">
                                                <input type="text" value={filters.building_area[1]} onInput={(e: Event) => {
                                                    const target = e.target as HTMLInputElement;
                                                    setStatusFilters({ ...filters, ["building_area"]: [filters.building_area[0], target?.value] })
                                                }} className="form-control" id="floatingInput" placeholder="name@example.com" />
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
                                                    {
                                                        Rooms && Rooms.map((name) => {
                                                            return (
                                                                <li className={`page-item ${filters.rooms === name ? ' active' : ''}`} aria-current="page">
                                                                    <a className={`${filters.rooms === name ? 'page-link border-danger bg-danger text-white' : 'page-link border-danger bg-white text-danger'}`} onClick={() => setStatusFilters({ ...filters, ["rooms"]: name })}>{name}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
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
                                                    {
                                                        Baths && Baths.map((name) => {
                                                            return (
                                                                <li className={`page-item ${filters.baths === name ? ' active' : ''}`} aria-current="page">
                                                                    <a className={`${filters.baths === name ? 'page-link border-danger bg-danger text-white' : 'page-link border-danger bg-white text-danger'}`} onClick={() => setStatusFilters({ ...filters, ["baths"]: name })}>{name}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <span>Parqueadero</span>
                                        </div>
                                        <div className="col-4 no-focus d-grid rounded p-2">
                                            <input type="checkbox" class="btn-check btn-danger" checked={filters.parking} onClick={() => {
                                                    setStatusFilters({ ...filters, ["parking"]: !filters.parking })
                                                }} />
                                            <label class="btn btn-primary" for="btn-check">Si</label>
                                        </div>
                                        <div className="col-4 no-focus d-grid rounded p-2">
                                            <input type="checkbox" class="btn-check btn-danger" checked={!filters.parking} onClick={() => {
                                                    setStatusFilters({ ...filters, ["parking"]: !filters.parking })
                                                }} />
                                            <label class="btn btn-primary" for="btn-check">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" onClick={() => setModal(true)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <b className="bi bi-star bg-primary p-1 text-white rounded"></b>&nbsp;<strong>Buscar por código</strong>
                                </button>
                            </h2>
                        </div>
                        <div className="border-top mt-2 text-center">
                            <span className="btn border mt-3" style={{ width: "80%" }} onClick={() => setStatusFilters(initFilter)}>
                                <strong>Limpiar filtros</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}