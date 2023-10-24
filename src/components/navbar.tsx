export function NavBar() {
    return (

        <div className="border rounded col-4 p-3">
            <div className="no-focus">
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b className="bi bi-coin bg-success p-1 text-white rounded"></b>&nbsp;<strong>Valor y estado</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show bg-danger-subtle" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
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
                                            <input type="text" className="border-0 rounded w-100" placeholder="100.000" />
                                        </div>
                                    </div>
                                    <div className="col-5 offset-1 no-focus d-grid bg-white rounded p-2">
                                        <label className="w-100" style={{ fontSize: 10 }}>Hasta COP</label>
                                        <div className="d-flex">
                                            <span>$ </span>
                                            <input type="text" className="border-0 rounded w-100" placeholder="5.000.000" />
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
                                            <a class="btn btn-sm bg-danger text-white d-flex my-2 me-2 align-items-center fw-bold">
                                                <span className="material-icons fs-6">check_circle</span>&nbsp;
                                                <span class="text-decoration-none text-white" href="#">Todos</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">Campestre</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">1</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">2</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">3</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">4</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">5</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">6</span>
                                            </a>
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
                                            <a class="btn btn-sm bg-danger text-white d-flex my-2 me-2 align-items-center fw-bold">
                                                <span className="material-icons fs-6">check_circle</span>&nbsp;
                                                <span class="text-decoration-none text-white" href="#">Todos</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">1 A 8 Años</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">9 A 15 Años</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">16 A 30 Años</span>
                                            </a>
                                            <a class="btn btn-sm border-danger bg-white text-danger d-flex my-2 me-2 align-items-center fw-bold">
                                                <span class="text-decoration-none text-danger" href="#">Más De 30 Años</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b className="bi bi-box bg-warning p-1 rounded"></b>&nbsp;<strong>Tamaño y espacios</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse bg-danger-subtle" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col mb-2">
                                        <label className="fw-bold">Área</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 no-focus d-grid rounded p-2">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Desde (m2)</label>
                                        </div>
                                    </div>
                                    <div className="col-6 no-focus d-grid rounded p-2">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
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
                                            <ul class="pagination fw-bold">
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">4+</a></li>
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
                                            <ul class="pagination fw-bold">
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">4+</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <span>Parqueaderos</span>
                                    </div>
                                    <div className="col-6 no-focus d-grid rounded p-2">
                                        <nav>
                                            <ul class="pagination fw-bold">
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link border-danger bg-white text-danger" href="#">4+</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <b className="bi bi-star bg-primary p-1 text-white rounded"></b>&nbsp;<strong>Buscar por código</strong>
                            </button>
                        </h2>
                    </div>
                    <div class="border-top mt-2 text-center">
                        <span class="btn border mt-3" style={{ width: "80%" }}>
                            <strong>Limpiar filtros</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}