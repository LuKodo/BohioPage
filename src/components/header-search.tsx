import { Link } from "raviger";
import { Search } from "./search";

interface props {
  setOpenMenu: (boolean: boolean) => void;
}

export function HeaderSearch(props: props) {
  return (
    <>
      <nav class="navbar bg-white navbar-expand-md fixed-top shadow">
        <div class="container">
          <Link href="/">
            <span class="navbar-brand">
              <img
                src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true"
                width={40}
                alt=""
                srcset=""
              />
            </span>
          </Link>

          <button
            class="btn bg-danger-subtle text-dark navbar-toggler collapsed fw-bold"
            onClick={() => props.setOpenMenu(true)}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Filtrar
          </button>

          <div
            class="navbar-collapse collapse"
            id="navbarCollapse"
            style="width: 100%;"
          >
            <ul class="navbar-nav ms-5 text-danger w-100">
              <div className="w-75">
                <Search />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
