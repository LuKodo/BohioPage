import { useState } from "preact/hooks";
import { CardTypeOne, Carousel, CodeSearch, Footer, Header, Hero, Recomended, Search } from "../components";

export const Home = () => {
    const [modal, setModal] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [modalTxt, setModalTxt] = useState<string>("");

    return (
        <>
            <CodeSearch modal={modal} setModal={setModal} error={error} setError={setError} modalTxt={modalTxt} setModalTxt={setModalTxt} />

            <Header />
            <main>
                <div className="d-none d-md-block">
                    <Carousel />
                </div>

                <div className="container mt-2">
                    <div className="w-100">
                        <Search />
                    </div>

                    <div className="mb-md-5 mt-2">
                        <form action="#" className="">
                            <div className="row">
                                <div className="col-md-3 offset-md-9 col-sm-12 text-center">
                                    <div className="row d-grid">
                                        <div className="col-12 mt-3" onClick={() => setModal(true)}>
                                            <span>¿Tienes un código de inmueble? </span>
                                            <div className="rounded-pill btn bg-danger text-white btn-sm fw-bold">Código</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="row my-4">
                        <div className="col">
                            <CardTypeOne />
                        </div>
                        <div className="col">
                            <CardTypeOne />
                        </div>
                        <div className="col">
                            <CardTypeOne />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Recomended />
                </div>

                <div className="container-fluid m-0 p-0 d-none d-md-block">
                    <Hero url="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-pasos-proceso-digital-background.jpg?raw=true" />
                </div>
            </main>
            <Footer />
        </>
    )
}