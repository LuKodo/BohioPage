export function Footer() {
    return (
        <>
            <footer className="bd-footer">
                <div className="container py-4 py-md-5 px-4 px-md-3 text-danger border-top">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 mb-3">
                            <h5>Nosotros</h5>
                            <ul className="list-unstyled">
                                <li className="my-3"><a className="text-danger text-decoration-none" href="https://getbootstrap.com/">Contáctanos</a></li>
                                <li className="my-3"><a className="text-danger text-decoration-none" href="https://getbootstrap.com/docs/5.3/">FAQ - Preguntas Frecuentes</a></li>
                                <li className="my-3"><a className="text-danger text-decoration-none" href="https://getbootstrap.com/docs/5.3/examples/">BLOG</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-3">
                            <h5>Legales</h5>
                            <ul className="list-unstyled">
                                <li className="my-3"><a className="text-danger text-decoration-none" href="https://getbootstrap.com/">Términos y Condiciones</a></li>
                                <li className="my-3"><a className="text-danger text-decoration-none" href="https://getbootstrap.com/docs/5.3/">Póliticas de Tratamiento de Datos</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-3">
                            <a className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap">
                                <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true" alt="" srcset="" width={80} />
                            </a>
                            <ul className="list-unstyled small">
                                <li className="mb-2"><b className="material-icons small">copyright</b>Todos los derechos reservados - 2022</li>
                            </ul>

                            <div className="">
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
                </div>
            </footer>
        </>
    )
}