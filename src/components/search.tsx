export function Search() {
    return (
        <>
            <form action="#" class="">
                <div class="row">
                    <div className="col-12">
                        <div className="row m-0 border rounded">
                            <div class="d-flex align-items-center col-lg-3 border-end">
                                <input type="email" class="border-0 form-control text-danger" id="floatingInput" placeholder="Ubicación" />
                            </div>
                            <div class="d-flex align-items-center col-lg-3 border-end">
                                <input type="email" class="border-0 form-control text-danger" id="floatingInput" placeholder="Servicios" />
                            </div>
                            <div class="d-flex align-items-center col-lg-3">
                                <input type="email" class="form-control bg-body-tertiary text-danger" id="floatingInput" placeholder="Inmueble" />
                            </div>
                            <div className="col-1">
                                <button type="submit" class="text-white bg-danger btn">
                                    <span class="material-icons">search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}