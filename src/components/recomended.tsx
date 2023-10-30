import { useEffect, useState } from "preact/hooks";
import { iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";
import { Link } from "raviger";

export function Recomended() {
    const [tenancy, setTenancy] = useState<Array<iProduct | undefined> | undefined>();
    const [sale, setSale] = useState<Array<iProduct | undefined> | undefined>();

    const loadData = async () => {
        const queryParams = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "ptype", "constructed", "rental", "building_area", "code", "list_price", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: '[["is_property", "=", "true"], ["sale_lease", "=", "for_tenancy"]]',
            limit: 5
        }
        const queryParamsSale = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "ptype", "constructed", "rental", "building_area", "code", "list_price", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: '[["is_property", "=", "true"], ["sale_lease", "=", "for_sale"]]',
            limit: 5
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })
            const responseSale = await instance("search_read", {
                params: queryParamsSale
            })

            setTenancy(response.data)
            setSale(responseSale.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h3 className="mb-0">
                        <span className="mb-0 rounded-end-4 rounded-start-0 badge bg-danger">Venta</span>
                    </h3>
                    <hr className="mt-0 text-danger" />
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-5 mb-3">
                {sale && sale.map((product) => {
                    return (
                        <Link href={`/product/${product?.id}`}>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm position-relative">
                                    <span className="position-absolute mt-2 badge rounded-pill bg-danger" style={{ right: 10 }}>
                                        En Venta
                                    </span>

                                    <span className="position-absolute badge rounded bg-secondary" style={{ right: 5, top: 170 }}>
                                        <b className="bi bi-plus"></b>
                                    </span>

                                    <span className="position-absolute badge rounded bg-secondary" style={{ right: 35, top: 170 }}>
                                        <b className="bi bi-heart"></b>
                                    </span>

                                    <span className="position-absolute badge rounded bg-secondary" style={{ right: 65, top: 170 }}>
                                        <b className="bi bi-arrows-angle-expand"></b>
                                    </span>

                                    <span className="position-absolute badge rounded-pill bg-secondary" style={{ left: 5, top: 170 }}>
                                        $ {product?.list_price} COP
                                    </span>

                                    <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/card-3.png?raw=true" className="card-img-top" height={200} alt="..." />

                                    <div className="card-body">
                                        <h6 className="card-title mb-0">
                                            <b className="bi bi-house"></b> {product?.name}
                                        </h6>
                                        <small className="border-bottom pb-2">{product?.x_state && product.x_state[1].split(" ")[0]}, {product?.x_city && product.x_city[1].split(" ")[0]}, {product?.x_country && product.x_country[1].split(" ")[0]}</small>

                                        <div className="row mt-3 mb-0 pb-0">
                                            <div className="col border-end">
                                                <p className="fs-6 d-flex align-items-center mb-0 small">{product?.rooms} <span className="material-icons">bed</span></p>
                                                <small className="mt-0">Cuartos</small>
                                            </div>
                                            <div className="col border-end">
                                                <p className="fs-6 d-flex align-items-center mb-0 small">{product?.bathrooms} <span className="material-icons">shower</span></p>
                                                <small className="mt-0">Baños</small>
                                            </div>
                                            <div className="col">
                                                <p className="fs-6 d-flex align-items-center mb-0 small">{product?.building_area} <span className="material-icons">square_foot</span></p>
                                                <small className="mt-0 pt-0">m2</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div >

            <div className="row">
                <div className="col-6">
                    <h3 className="mb-0">
                        <span className="mb-0 rounded-end-4 rounded-start-0 badge bg-danger">Arriendo</span>
                    </h3>
                    <hr className="mt-0 text-danger" />
                </div>

                <div className="row row-cols-1 row-cols-md-5 mb-3">
                    {tenancy && tenancy.map((product) => {
                        return (
                            <Link href={`/product/${product?.id}`}>
                                <div className="col">
                                    <div className="card mb-4 rounded-3 shadow-sm position-relative">
                                        <span className="position-absolute mt-2 badge rounded-pill bg-danger" style={{ right: 10 }}>
                                            Arriendo
                                        </span>

                                        <span className="position-absolute badge rounded bg-secondary" style={{ right: 5, top: 170 }}>
                                            <b className="bi bi-plus"></b>
                                        </span>

                                        <span className="position-absolute badge rounded bg-secondary" style={{ right: 35, top: 170 }}>
                                            <b className="bi bi-heart"></b>
                                        </span>

                                        <span className="position-absolute badge rounded bg-secondary" style={{ right: 65, top: 170 }}>
                                            <b className="bi bi-arrows-angle-expand"></b>
                                        </span>

                                        <span className="position-absolute badge rounded-pill bg-secondary" style={{ left: 5, top: 170 }}>
                                            $ {product?.list_price} COP
                                        </span>

                                        <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/card-3.png?raw=true" className="card-img-top" height={200} alt="..." />

                                        <div className="card-body">
                                            <h6 className="card-title mb-0 small">
                                                <b className="bi bi-house"></b> {product?.name}
                                            </h6>
                                            <small className="border-bottom pb-2">{product?.x_state && product.x_state[1].split(" ")[0]}, {product?.x_city && product.x_city[1].split(" ")[0]}, {product?.x_country && product.x_country[1].split(" ")[0]}</small>

                                            <div className="row mt-3 mb-0 pb-0">
                                                <div className="col border-end">
                                                    <p className="fs-6 d-flex align-items-center mb-0 small">{product?.rooms} <span className="material-icons">bed</span></p>
                                                    <small className="mt-0">Cuartos</small>
                                                </div>
                                                <div className="col border-end">
                                                    <p className="fs-6 d-flex align-items-center mb-0 small">{product?.bathrooms} <span className="material-icons">shower</span></p>
                                                    <small className="mt-0">Baños</small>
                                                </div>
                                                <div className="col">
                                                    <p className="fs-6 d-flex align-items-center mb-0 small">{product?.building_area} <span className="material-icons">square_foot</span></p>
                                                    <small className="mt-0 pt-0">m2</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div >
            </div >
        </>
    )
}