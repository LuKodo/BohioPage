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
    const [product, setProduct] = useState<Array<iProduct | undefined> | undefined>();
    const [images, setImages] = useState<Array<image>>();
    const [image, setImage] = useState<number>(0);

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

            setProduct(response.data)
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
                <button class="btn btn-primary position-fixed end-0 me-2 bottom-0 mb-4" style={{width: 300}}>Botón Flotante</button>
                    {
                        product && (
                            <>
                                <h3>{product[0]?.name}</h3>
                                <h5 className="mt-3">Ubicación</h5>
                                <h6>{product[0]?.x_country[1].split(' ')[0]}, {product[0]?.x_city[1].split(' ')[0]}, {product[0]?.x_state[1].split('/')[0]}</h6>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center">
                                            <div className="p-4" style={{ height: 350 }}>
                                                {images && <img src={`data:image/jpeg;base64,${images[image].image_1920}`} style={{ height: 300 }} className="bd-placeholder-img" alt="" srcset="" />}
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
                                        <p>
                                            {product[0]?.name}
                                        </p>
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
                                                <span className="fw-bold">{product[0]?.rooms}</span>
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
                                                <span className="fw-bold">{product[0]?.bathrooms}</span>
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
                                                <span className="fw-bold">{product[0]?.parking}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Área construida</span>
                                                <span className="fw-bold">{product[0]?.building_area} m2</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Estrato</span>
                                                <span className="fw-bold">{product[0]?.x_estrato}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="row d-flex">
                                            <div className="col-1 d-grid align-items-center">
                                                <b className="material-icons text-danger">local_parking</b>
                                            </div>
                                            <div className="col offset-1 d-grid">
                                                <span className="small text-secondary">Precio m2</span>
                                                <span className="fw-bold">$ {product[0]?.rental_fee && product[0]?.building_area && new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(product[0].rental_fee / product[0]?.building_area)}*m2</span>
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