import { useState } from "preact/hooks";
import { Cards } from "../components/cards";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Recomended } from "../components/recomended";
import { Search } from "../components/search";
import { navigate } from "raviger";
import { instance } from "../utils/instance";

export const Home = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [modalTxt, setModalTxt] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleInputChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setModalTxt(target.value)
    }

    const searchByCode = async (code: string) => {
        const queryParams = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "property_template_image_ids", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: `[["is_property", "=", "true"], ["id", "=", "${code}"]]`,
            limit: 1
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })

            navigate(`/product/${response.data[0].id}`)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    return (
        <>
            <div class={`modal ${modal ? "d-block fade show" : "d-none"}`} tabIndex={-1}>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body mt-0 mx-3">
                            <h5 class="modal-title mb-0 mt-3">Buscar por código</h5>
                            <p className="small mb-3">Ingresa el código del inmueble que quieres encontrar</p>
                            <input type="text" value={modalTxt} onChange={handleInputChange} name="" placeholder="Código del inmueble" className="form-control form-control-lg" />
                            <span className={`small text-danger ${error ? 'd-block' : 'd-none'}`}>Código incorrecto o no existe</span>
                        </div>
                        <div class="modal-footer border-0 mx-3 row">
                            <button type="button" class="btn btn-outline-danger col-3" onClick={() => setModal(false)} data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger col-3" onClick={() => searchByCode(modalTxt)}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>

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
                                            <button type="submit" className="rounded-pill btn bg-danger text-white btn-sm fw-bold">Código</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <Cards />
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