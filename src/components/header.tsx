import { Link } from "raviger";

export function Header() {
    return (
        <div className="">
            <nav class="navbar shadow bg-white navbar-expand-md fixed-top">
                <div class="container">
                    <Link href="/">
                        <span class="navbar-brand">
                            <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true" width={42} alt="" srcset="" />
                        </span>
                    </Link>

                    <div class="navbar-collapse collapse" id="navbarCollapse" style="">
                        <ul class="navbar-nav ms-auto mb-2 mb-md-0 text-danger">
                            <div className="row d-flex align-items-center me-2">
                                <div className="col-1">
                                    <b className="bi bi-telephone fs-4"></b>
                                </div>
                                <div className="col offset-1 small">
                                    <small className="m-0 fw-bold">+604 791 7070</small>
                                    <br />
                                    <small className="m-0">contacto@bohioconsultores.com</small>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center me-2">
                                <div className="col-1">
                                    <b className="bi bi-geo-alt fs-4"></b>
                                </div>
                                <div className="col offset-1 small">
                                    <small className="m-0 fw-bold">Montería</small>
                                    <br />
                                    <small className="m-0">Colombia</small>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-1">
                                    <b className="bi bi-clock fs-4"></b>
                                </div>
                                <div className="col offset-1 small">
                                    <small className="m-0 fw-bold">Lun - Vie 7:30a.m. - 12m | 2:00p.m. - 6:00p.m</small>
                                </div>
                            </div>
                        </ul>

                        <div className="d-flex">
                            <a href="#" className="d-inline text-danger fs-5 px-2">
                                <b className="bi bi-instagram"></b>
                            </a>

                            <a href="#" className="d-inline text-danger fs-5 px-2">
                                <b className="bi bi-facebook"></b>
                            </a>

                            <a href="#" className="d-inline text-danger fs-5 px-2">
                                <b className="bi bi-youtube"></b>
                            </a>

                            <a href="#" className="d-inline text-danger fs-5 px-2">
                                <b className="bi bi-twitter"></b>
                            </a>

                            <a href="#" className="d-inline text-danger fs-5 px-2">
                                <b className="bi bi-tiktok"></b>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand navbar-dark fixed-top bg-danger px-5 d-none d-md-block" style={{ top: 62 }}>
                <div className="container">
                    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarsExample02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NOSOTROS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SERVICIOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PROPIEDADES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PROYECTOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}