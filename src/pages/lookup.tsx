import { useState } from "preact/hooks";
import { CardTypeTwo } from "../components/cardComponent";
import { Footer } from "../components/footer";
import { HeaderSearch } from "../components/header-search";
import { NavBar } from "../components/navbar";

export const LookUp = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <HeaderSearch setOpenMenu={setOpenMenu} />
            <main>
                <div class={openMenu ? 'offcanvas offcanvas-start show' : 'offcanvas offcanvas-start'} tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasLabel">
                            <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true" width={50} alt="" srcset="" />
                        </h5>
                        <button type="button" class="btn-close" onClick={() => setOpenMenu(false)} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <NavBar />
                    </div>
                </div>

                <div className="container mt-2 p-4">
                    <div className="row">
                        <div className="col-md-4 d-none d-md-block">
                            <NavBar />
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-md-4">
                                    <CardTypeTwo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}