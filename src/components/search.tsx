export function Search() {
    return (
        <>
            <div>
                <form action="#" class="">
                    <div class="row shadow-lg">
                        <div className="col-10">
                            <div className="row">
                                <div class="d-flex align-items-center col-lg-4 p-3">
                                    <input type="email" class="rounded-pill form-control bg-body-tertiary text-danger" id="floatingInput" placeholder="Ubicación" />
                                </div>
                                <div class="d-flex align-items-center col-lg-4 p-3">
                                    <input type="email" class="rounded-pill form-control bg-body-tertiary text-danger" id="floatingInput" placeholder="Servicios" />
                                </div>
                                <div class="d-flex align-items-center col-lg-4 p-3">
                                    <input type="email" class="rounded-pill form-control bg-body-tertiary text-danger" id="floatingInput" placeholder="Inmueble" />
                                </div>
                            </div>
                        </div>

                        <div class="col-2 bg-danger">
                            <div className="row">
                                <div className="d-grid col-12 mt-3">
                                    <button type="submit" class="h-100 rounded-pill text-danger btn bg-white fw-bold">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="mb-5 mt-2">
                <form action="#" class="">
                    <div class="row">
                        <div class="col-3 offset-9">
                            <div className="row d-grid">
                                <div className="col-12 mt-3">
                                    <span>¿Tienes un código de inmueble? </span>
                                    <button type="submit" class="rounded-pill btn btn-danger btn-sm fw-bold">Código</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}