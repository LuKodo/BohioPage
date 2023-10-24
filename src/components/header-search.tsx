import { Search } from "./search";

export function HeaderSearch() {
    return (
        <>
            <div className="container-fluid shadow mb-4">
                <header className="py-3 px-5">
                    <div className="row">
                        <div className="col-1">
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true" width={50} alt="" srcset="" />
                            </a>
                        </div>

                        <div className="col-6">
                            <Search shadow={false} />
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}