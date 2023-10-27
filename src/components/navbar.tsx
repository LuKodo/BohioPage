import { useEffect } from "preact/hooks";
import { Age, Baths, iFilters, Rooms, Stratum, iProduct } from "../utils/interfaces.tsx";
import { initFilter } from "../pages/lookup.tsx";

interface props {
    filters: iFilters,
    setStatusFilters: (filters: iFilters) => void,
    products: Array<iProduct | undefined> | undefined,
    setProducts: (products: Array<iProduct | undefined> | undefined) => void
}

export function NavBar(props: props) {
    const { filters, setStatusFilters, products, setProducts } = props

    useEffect(() => {
        setProducts(products)
        const range: string[] = filters.age.split(" ");
        const lowerLimit: number = Number(range[0]);
        const upperLimit: number = Number(range[2]);

        const productoEncontrado: Array<iProduct | undefined> | undefined = products?.filter((product) => {
            if (product) {
                const age: number = Number(product.age);
                const baths: number = Number(filters.baths);
                const rooms: number = Number(filters.rooms);
                const stratum: string = filters.stratum;
                const isAllStratumSelected: boolean = stratum === 'Todos';
                const minBuildingArea: number = Number(filters.building_area[0]);
                const maxBuildingArea: number = Number(filters.building_area[1]);
                const minPrice: number = Number(filters.price[0]);
                const maxPrice: number = Number(filters.price[1]);
                const isAllSelected: boolean = range[0] === 'Todos';
                const isAgeValid: boolean = (isAllSelected && true) || (age >= lowerLimit && age <= upperLimit);
                const isStratumValid: boolean = (isAllStratumSelected && true) || product?.x_estrato === stratum;
                const isBathsValid: boolean = product?.bathrooms >= baths;
                const isRoomsValid: boolean = product?.rooms >= rooms;
                let isBuildingAreaValid: boolean = true
                if (maxBuildingArea > minBuildingArea) {
                    isBuildingAreaValid = (product?.building_area <= maxBuildingArea && product?.building_area >= minBuildingArea);
                }
                let isPriceValid: boolean = true
                if (maxPrice > minPrice) {
                    if (product.list_price) {
                        isPriceValid = (product.list_price <= maxPrice && product.list_price >= minPrice);
                    }
                }

                return isAgeValid && isBathsValid && isRoomsValid && isBuildingAreaValid && isPriceValid && isStratumValid;
            } else { return }
        });

        setProducts(productoEncontrado)
    }, [filters])

    return (
        <>
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
                                    <div className="row mt-3">
                                        <div className="col p-0 mb-2">
                                            <label className="fw-bold">Estrato</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-grid p-0">
                                            <div className="d-flex flex-wrap rounded">
                                                {Stratum && Stratum.map((name) => {
                                                    return (
                                                        <span onClick={() => setStatusFilters({ ...filters, ["stratum"]: name })} className={(name === filters.stratum) ? "btn btn-sm bg-danger text-white d-flex my-2 me-2 align-items-center fw-bold" : "btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold"}>
                                                            {name == "Todos" && <span className="material-icons fs-6 me-1">check_circle</span>}
                                                            <span className={name === filters.stratum ? "text-decoration-none text-white" : "text-decoration-none text-danger"} href="#">{name}</span>
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col p-0 mb-2">
                                            <label className="fw-bold">Antigüedad del inmueble</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-grid p-0">
                                            <div className="d-flex flex-wrap rounded">
                                                {Age && Age.map((name) => {
                                                    return (
                                                        <span onClick={() => setStatusFilters({ ...filters, ["age"]: name })} className={(name === filters.age) ? "btn btn-sm bg-danger text-white d-flex my-2 me-2 align-items-center fw-bold" : "btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold"}>
                                                            {name == "Todos" && <span className="material-icons fs-6 me-1">check_circle</span>}
                                                            <span className={name === filters.age ? "text-decoration-none text-white" : "text-decoration-none text-danger"} href="#">{name}</span>
                                                        </span>

                                                    )
                                                })}
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
                                                }
                                                } className="form-control" id="floatingInput" placeholder="name@example.com" />
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
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
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