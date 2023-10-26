import { Dropdown } from "./dropdown"
import { Link } from 'raviger'

export function Search() {
    return (
        <>
            <div>
                <form action="#">
                    <div className="bg-danger-subtle p-3 shadow rounded-3 d-sm-block d-md-none">
                        <div className="row m-0">
                            <h6 className="fw-bold">Busca tu próximo inmueble</h6>
                            <div class="input-group p-2">
                                <input type="text" class="form-control" placeholder="Buscar inmueble" aria-label="Username" aria-describedby="basic-addon1" />
                                <Link href='/search'>
                                    <span class="input-group-text bg-danger text-white" id="basic-addon1">
                                        <b className="bi bi-arrow-right"></b>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 shadow rounded-3 d-none d-md-block">
                        <div className="row m-0 border rounded">
                            <div className="d-grid col-lg-4 border-end no-focus">
                                <input type="text" className="border-0 text-danger ps-2" id="floatingInput" placeholder="Ubicación" />
                            </div>
                            <div className="d-grid col-lg-4 border-end no-focus">
                                <input type="text" className="border-0 text-danger ps-2" id="floatingInput" placeholder="Servicios" />
                            </div>
                            <div className="d-grid col-lg-3 border-end no-focus">
                                <Dropdown />
                            </div>
                            <div className="d-grid col p-0">
                                <Link href='/search'>
                                    <span className="w-100 rounded-0 rounded-end text-white bg-danger btn border-0">
                                        <span className="material-icons">search</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}