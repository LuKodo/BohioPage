import { Link } from "raviger";
import { Search } from "./search";

interface props {
    setOpenMenu: (boolean: boolean) => void,
}

export function HeaderSearch(props: props) {
    return (
        <>
            <nav class="navbar bg-white navbar-expand-md fixed-top shadow">
                <div class="container-fluid">
                    <Link href="/">
                        <span class="navbar-brand">
                            <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true" width={40} alt="" srcset="" />
                        </span>
                    </Link>

                    <button class="navbar-toggler collapsed" onClick={() => props.setOpenMenu(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span class="material-icons">tune</span>
                    </button>

                    <div class="navbar-collapse collapse" id="navbarCollapse" style="">
                        <ul class="navbar-nav me-auto ms-5 mb-2 mb-md-0 text-danger">
                            <Search />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}