import { useEffect, useState } from "preact/hooks";
import { CardTypeTwo } from "../components/cardComponent";
import { Footer } from "../components/footer";
import { HeaderSearch } from "../components/header-search";
import { NavBar } from "../components/navbar";
import { iFilters, iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";

export const initFilter: iFilters = {
    price: ["", ""],
    stratum: "Todos",
    age: "Todos",
    building_area: ["0", "0"],
    rooms: "1",
    baths: "1"
}
export const LookUp = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [statusFilters, setStatusFilters] = useState<iFilters>(initFilter);
    const [products, setProducts] = useState<Array<iProduct | undefined> | undefined>();
    const [productsView, setProductsView] = useState<Array<iProduct | undefined> | undefined>();

    const loadData = async () => {
        const queryParams = {
            model: "product.template",
            fields: '["name", "rooms", "bathrooms", "ptype", "constructed", "rental", "building_area", "code", "list_price", "x_estrato", "x_country", "x_state", "x_city", "code"]',
            domain: '[["is_property", "=", "true"]]'
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })
            setProducts(response.data)
            setProductsView(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData();
    }, []);


    useEffect(() => {
        setProductsView(productsView)
    }, [productsView])

    return (
        <>
            <HeaderSearch setOpenMenu={setOpenMenu} />
            <main className="mt-5">
                <div class={openMenu ? 'offcanvas offcanvas-start show' : 'offcanvas offcanvas-start'} tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasLabel">
                            <img src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true" width={50} alt="" srcset="" />
                        </h5>
                        <button type="button" class="btn-close" onClick={() => setOpenMenu(false)} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <NavBar filters={statusFilters} setStatusFilters={setStatusFilters} products={products} setProducts={setProductsView} />
                    </div>
                </div>

                <div className="container mt-2 p-4">
                    <div className="row">
                        <div className="col-md-4 d-none d-md-block">
                            <NavBar filters={statusFilters} setStatusFilters={setStatusFilters} products={products} setProducts={setProductsView} />
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                {
                                    productsView && productsView.map((product, index) => {
                                        return (
                                            product && (
                                                <div className="col-md-4" key={index}>
                                                    <CardTypeTwo product={product} />
                                                </div>
                                            )
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}