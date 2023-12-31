import { Link } from "preact-router";
import { Search } from "../components/index.tsx";
import { iProduct } from "../utils/interfaces.tsx";
import { useEffect, useState } from "preact/hooks";

function Header() {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const loadURl = localStorage.getItem("url");
    loadURl && setUrl(loadURl);
  }, []);

  return (
    <div className="">
      <nav className="navbar shadow bg-white navbar-expand-md fixed-top">
        <div className="container">
          <Link href="/">
            <span className="navbar-brand ms-3">
              <img
                src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true"
                width={42}
                alt=""
                srcset=""
              />
            </span>
          </Link>

          <div
            className="navbar-collapse collapse"
            id="navbarCollapse"
            style=""
          >
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-danger">
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
                  <small className="m-0 fw-bold">
                    Lun - Vie 7:30a.m. - 12m | 2:00p.m. - 6:00p.m
                  </small>
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

      <nav
        className="navbar navbar-expand navbar-dark fixed-top bg-danger px-5 d-none d-md-block"
        style={{ top: 60 }}
      >
        <div className="container">
          <div
            className="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbarsExample02"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${url === "/" && "active"}`}
                  aria-current="page"
                  href="/"
                >
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${url === "/about" && "active"}`}
                  href="/about"
                >
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    url === "/search/properties" && "active"
                  }`}
                  href="/search/properties"
                >
                  PROPIEDADES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    url === "/search/projects" && "active"
                  }`}
                  href="/search/projects"
                >
                  PROYECTOS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

interface props {
  setOpenMenu: (boolean: boolean) => void;
  products: Array<iProduct | undefined> | undefined | null;
  setProducts: (products: null | undefined | (iProduct | undefined)[]) => void;
}
function HeaderSearch(props: props) {
  return (
    <>
      <nav className="navbar bg-white navbar-expand-md fixed-top shadow">
        <div className="container">
          <a href="/">
            <span className="navbar-brand">
              <img
                src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true"
                width={40}
                alt=""
                srcset=""
              />
            </span>
          </a>

          <button
            className="btn bg-danger-subtle late text-dark navbar-toggler collapsed fw-bold"
            onClick={() => props.setOpenMenu(true)}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Filtrar
          </button>

          <div
            className="navbar-collapse collapse"
            id="navbarCollapse"
            style="width: 100%;"
          >
            <ul className="navbar-nav ms-5 text-danger w-100">
              <div className="w-75">
                <Search
                  products={props.products}
                  setProducts={props.setProducts}
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { HeaderSearch, Header };
