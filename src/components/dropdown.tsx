import { useState } from "preact/hooks"

export function Dropdown() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className="p-2">
            <div className="d-flex align-items-center" onClick={() => setOpenMenu(!openMenu)} type="button">
                Inmueble {openMenu ? <span className="material-icons fs-6">expand_less</span> : <span className="material-icons fs-6">expand_more</span>}
            </div>
            {openMenu && (
                <div className="border bg-white rounded p-2 d-flex flex-wrap position-absolute mt-3" style={{ width: 410, zIndex: 1000 }}>
                    <a className="btn btn-sm bg-danger text-white d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">check_circle</span>&nbsp;
                        <span className="text-decoration-none text-white" href="#">Todos</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="bi bi-building-fill fs-6"></span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Apartamento</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="bi bi-building-fill fs-6"></span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Apartaestudio</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="bi bi-house-fill fs-6"></span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Casa</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">villa</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Cabaña</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Casa Campestre</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Casa Lote</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Finca</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Habitación</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Lote</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Bodega</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Consultorio</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Local</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Oficina</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Parqueadero</span>
                    </a>
                    <a className="btn btn-sm border-danger text-danger d-flex m-2 align-items-center">
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none text-danger" href="#">Edificio</span>
                    </a>
                </div>
            )}

        </div>
    )
}
