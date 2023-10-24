import { CardTypeTwo } from "../components/cardComponent";
import { Footer } from "../components/footer";
import { HeaderSearch } from "../components/header-search";
import { NavBar } from "../components/navbar";

export const LookUp = () => {
    return (
        <>
            <HeaderSearch />
            <main>
                <div className="container mb-3">
                    <div className="row">
                        <NavBar />

                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-4">
                                    <CardTypeTwo />
                                </div>
                                <div className="col-4">
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