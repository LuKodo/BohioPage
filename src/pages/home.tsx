import { Cards } from "../components/cards";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Recomended } from "../components/recomended";
import { Search } from "../components/search";

export const Home = () => {
    return (
        <>
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
                                        <div className="col-12 mt-3">
                                            <span>¿Tienes un código de inmueble? </span>
                                            <button type="submit" className="rounded-pill btn bg-danger text-white btn-sm fw-bold">Código</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <Cards />
                </div>

                <div className="container-fluid m-0 p-0 d-none d-md-block">
                    <Hero />
                </div>

                <div className="container">
                    <Recomended />
                </div>

                <div className="container-fluid m-0 p-0 d-none d-md-block">
                    <Hero />
                </div>
            </main>
            <Footer />
        </>
    )
}