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
                <Carousel />
                <div className="container">
                    <Search />

                    <div class="mb-5 mt-2">
                        <form action="#" class="">
                            <div class="row">
                                <div class="col-3 offset-9">
                                    <div className="row d-grid">
                                        <div className="col-12 mt-3">
                                            <span>¿Tienes un código de inmueble? </span>
                                            <button type="submit" class="rounded-pill btn btn-danger btn-sm fw-bold">Código</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <Cards />
                </div>

                <div className="container-fluid m-0 p-0">
                    <Hero />
                </div>

                <div className="container">
                    <Recomended />
                </div>

                <div className="container-fluid m-0 p-0">
                    <Hero />
                </div>
            </main>
            <Footer />
        </>
    )
}