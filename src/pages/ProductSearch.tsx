import { useEffect, useState } from "preact/hooks";
import { Footer, HeaderSearch, NavBar, WhatsappButton } from "../components";
import { iProduct } from "../utils/interfaces";
import { CardProductSearch } from "../components/Cards.tsx";
import { filterProducts } from "../utils/filterProducts.tsx";

export const ProductSearch = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [products, setProducts] = useState<
    Array<iProduct | undefined> | undefined
  >();
  const [productsView, setProductsView] = useState<
    Array<iProduct | undefined> | undefined
  >();

  useEffect(() => {
    const productsLoad = localStorage.getItem("products");
    const productsFilter = productsLoad
      ? filterProducts(JSON.parse(productsLoad))
      : [];
    productsFilter && setProducts(productsFilter);
  }, []);

  useEffect(() => {
    const productsLoad = filterProducts(products);
    productsLoad && setProductsView(productsLoad);
  }, [productsView]);

  return (
    <>
      <WhatsappButton />
      <HeaderSearch setOpenMenu={setOpenMenu} />
      <div style={{ paddingTop: "6rem" }}>
        <main className="">
          <div
            className={
              openMenu
                ? "offcanvas offcanvas-start show"
                : "offcanvas offcanvas-start"
            }
            tabIndex={-1}
            id="offcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                <img
                  src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio_logo.png?raw=true"
                  width={50}
                  alt=""
                  srcset=""
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setOpenMenu(false)}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <NavBar products={products} setProducts={setProductsView} />
            </div>
          </div>

          <div className="container mt-2 p-4">
            <div className="row">
              <div className="col-md-4 d-none d-md-block">
                <NavBar products={products} setProducts={setProductsView} />
              </div>

              <div className="col-md-8">
                <div className="row">
                  {productsView &&
                    productsView.map((product, index) => {
                      return (
                        product && (
                          <div className="col-md-4" key={index}>
                            <CardProductSearch product={product} />
                          </div>
                        )
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
