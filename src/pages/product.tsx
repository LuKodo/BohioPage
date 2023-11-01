import { useEffect, useState } from "preact/hooks";
import { Footer } from "../components/footer";
import { iFilters, iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";
import { Header } from "../components/header";

export const initFilter: iFilters = {
    price: ["", ""],
    stratum: "Todos",
    age: "Todos",
    building_area: ["0", "0"],
    rooms: "1",
    baths: "1",
    parking: false
}

interface product {
    id: string
}

interface image {
    id: number,
    image_1920: string
}

export const Product = (props: product) => {
    const { id } = props
    const [product, setProduct] = useState<iProduct | undefined>();
    const [images, setImages] = useState<Array<image>>();
    const [image, setImage] = useState<number>(0);
    const options = {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    };

    const loadData = async () => {
        const queryParams = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "property_template_image_ids", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: `[["is_property", "=", "true"], ["id", "=", "${id}"]]`,
            limit: 1
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })

            setProduct(response.data[0])
        } catch (error) {
            console.log(error)
        }
    }


    const loadImages = async () => {
        const queryParamsPhoto = {
            model: "property.image",
            fields: '["image_1920"]',
            domain: `[["product_tmpl_id.id", "=", "${id}"]]`
        }


        const responsePhoto = await instance("search_read", {
            params: queryParamsPhoto
        })

        setImages(responsePhoto.data)
    }


    useEffect(() => {
        loadImages()
    }, [product]);

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Header />
            <main className="mt-5">

                <div className="container mt-2 p-4">
                    <div class="btn bg-success circle position-fixed end-0 me-3 bottom-0 mb-3 rounded-circle" style={{ width: 60, height: 60 }}>
                        <b className="bi bi-whatsapp fs-2 text-white"></b>
                    </div>

                    {
                        product && (
                            <>
                                <div class="card position-fixed p-2" style={{ width: "18rem", bottom: 300, right: 20 }}>
                                    <div class="card-body d-grid">
                                        <h6 class="card-subtitle small mb-2 text-body-secondary">Precio total (COP)</h6>
                                        <h3 class="card-title fw-bold">{new Intl.NumberFormat('es-CO', options).format(product.rental_fee)}</h3>
                                        <p class="card-text fw-bold text-secondary">¿Te interesó este inmueble?</p>
                                        <a href="#" class="btn btn-danger mb-3">Quiero que me contacten</a>
                                        <a href="#" class="btn btn-outline-danger mb-3">Ver teléfono</a>
                                        <a href="#" class="btn btn-outline-danger">Contactar por Whatsapp</a>
                                    </div>
                                </div>

                                <h3>{product.name}</h3>
                                <h6 className="mt-3 fw-bold">Ubicación</h6>
                                <h6 className="text-secondary">{product.x_country[1].split(' ')[0]}, {product.x_city[1].split(' ')[0]}, {product.x_state[1].split(' ')[0]}</h6>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4" style={{ height: 350 }}>
                                                {images && images[image] && <img src={`data:image/jpeg;base64,${images[image].image_1920}`} style={{ height: 300 }} className="bd-placeholder-img" alt="" srcset="" />}
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {images && images.map((item, index) => {
                                                return (
                                                    <div className="px-4" style={{ height: 150 }}>
                                                        <img onClick={() => setImage(index)} width={100} src={`data:image/jpeg;base64,${item.image_1920}`} className="bd-placeholder-img" alt="" srcset="" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-12">
                                        <p className="fw-bold">{product.note}</p>
                                    </div>
                                    <div className="col-12">
                                        <p className="fw-bold">Código: {product.id}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">bed</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Habitaciones</span>
                                                <span className="fw-bold">{product.rooms}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">shower</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Baños</span>
                                                <span className="fw-bold">{product.bathrooms}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Parqueaderos</span>
                                                <span className="fw-bold">{product.parking}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">square_foot</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Área construida</span>
                                                <span className="fw-bold">{product.building_area} m2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">stairs</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Estrato</span>
                                                <span className="fw-bold">{product.x_estrato}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">monetization_on</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Precio m2</span>
                                                <span className="fw-bold">$ {product.rental_fee && product.building_area && new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(product.rental_fee / product.building_area)}*m2</span>
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