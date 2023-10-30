import { useEffect, useState } from "preact/hooks";
import { CardTypeTwo } from "../components/cardComponent";
import { Footer } from "../components/footer";
import { HeaderSearch } from "../components/header-search";
import { NavBar } from "../components/navbar";
import { iFilters, iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";
import { Header } from "../components/header";

export const initFilter: iFilters = {
    price: ["", ""],
    stratum: "Todos",
    age: "Todos",
    building_area: ["0", "0"],
    rooms: "1",
    baths: "1"
}

interface product {
    id: number
}

interface image {
    id: number,
    image_1920: string
}

export const Product = (props: product) => {
    const { id } = props
    const [products, setProducts] = useState<Array<iProduct | undefined> | undefined>();
    const [images, setImages] = useState<Array<image>>();

    const loadData = async () => {
        const queryParams = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "property_template_image_ids", "ptype", "constructed", "rental", "building_area", "code", "list_price", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: `[["is_property", "=", "true"], ["id", "=", "${id}"]]`,
            limit: 1
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })

            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const loadImages = async () => {
        if (products) {
            const queryParamsPhoto = {
                model: "property.image",
                fields: '["image_1920"]',
                domain: products[0]?.property_template_image_ids,
                limit: 1
            }

            const responsePhoto = await instance("search_read", {
                params: queryParamsPhoto
            })

            setImages(responsePhoto.data)
        }
    }

    useEffect(() => {
        loadImages()
    }, [products]);

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Header />
            <main className="mt-5">
                <div className="container mt-2 p-4">
                    {
                        products && (
                            <>
                                <h3>{products[0]?.name}</h3>
                                <h5 className="mt-3">Ubicación</h5>
                                <h6>{products[0]?.x_country[1].split(' ')[0]}, {products[0]?.x_city[1].split(' ')[0]}, {products[0]?.x_state[1].split('/')[0]}</h6>


                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div id="myCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    {images && images.map((item) => {
                                                        return (
                                                            <div className="carousel-item active">
                                                                <img src={`data:image/jpeg;base64,${item.image_1920}`} className="bd-placeholder-img" alt="" srcset="" />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">bed</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Habitaciones</span>
                                                <span className="fw-bold">{products[0]?.rooms}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">shower</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Baños</span>
                                                <span className="fw-bold">{products[0]?.bathrooms}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Parqueaderos</span>
                                                <span className="fw-bold">{products[0]?.parking}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-4">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Área construida</span>
                                                <span className="fw-bold">{products[0]?.building_area} m2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Estrato</span>
                                                <span className="fw-bold">{products[0]?.x_estrato}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Precio m2</span>
                                                <span className="fw-bold">$ {products[0]?.list_price/products[0]?.building_area}*m2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}