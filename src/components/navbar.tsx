import { useEffect } from "preact/hooks";
import { Age, Baths, iFilters, Rooms, Stratum, iProduct } from "../utils/data";

interface props {
    filters: iFilters,
    setStatusFilters: (filters: iFilters) => void,
    products: iProduct[],
    setProducts: (products: iProduct[]) => void
}

export function NavBar(props: props) {
    const { filters, setStatusFilters, products, setProducts } = props

    useEffect(() => {
        const range: string[] = filters.age.split(" ");
        const lowerLimit: number = Number(range[0]);
        const upperLimit: number = Number(range[2]);

        const productoEncontrado: iProduct[] = products.filter((product) => {
            const age: number = Number(product.age)

            if (range[0] === 'Más') {
                return age >= 30 &&
                    product.baths >= Number(filters.baths)
            } else if (range[0] === "Todos") {
                return product.baths >= Number(filters.baths)
            } else {
                return age <= upperLimit && age >= lowerLimit &&
                    product.baths >= Number(filters.baths)
            }
        })

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
                                                <input type="text" value={filters.price[0]} onInput={(e: Event) =>
                                                    {
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
                                                <input type="text" value={filters.price[1]} onInput={(e: Event) =>
                                                {
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
                                                    setStatusFilters({ ...filters, ["building_area"]: [target?.value, filters.building_area[1]] })}
                                                } className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Desde (m2)</label>
                                            </div>
                                        </div>
                                        <div className="col-6 no-focus d-grid rounded p-2">
                                            <div className="form-floating mb-3">
                                                <input type="text" value={filters.building_area[1]} onInput={(e: Event) => {
                                                    const target = e.target as HTMLInputElement;
                                                    setStatusFilters({ ...filters, ["building_area"]: [filters.building_area[0], target?.value] })}
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
                            <span className="btn border mt-3" style={{ width: "80%" }}>
                                <strong>Limpiar filtros</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}