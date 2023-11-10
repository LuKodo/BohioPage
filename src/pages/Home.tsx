import { useState } from "preact/hooks";
import {
  Carousel,
  ModalSearch,
  Footer,
  Header,
  Hero,
  ProductsRecommended,
  Search,
  WhatsappButton,
} from "../components";
import { PSEButton } from "../components/PSEButton.tsx";
import { CarouselCards } from "../components/Carousel.tsx";

export function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalTxt, setModalTxt] = useState<string>("");
  const productsSaved = localStorage.getItem("products");
  const [products, setProducts] = useState(
    productsSaved && JSON.parse(productsSaved),
  );

  return (
    <>
      <ModalSearch
        modal={modal}
        setModal={setModal}
        error={error}
        setError={setError}
        modalTxt={modalTxt}
        setModalTxt={setModalTxt}
      />

      <WhatsappButton />
      <PSEButton />

      <Header />
      <div style={{ paddingTop: "5rem" }}>
        <div className="container-fluid m-0 p-0">
          <Carousel />
        </div>

        <div className="container">
          <div className="p-3 shadow rounded-3 ">
            <Search products={products} setProducts={setProducts} />
          </div>

          <div className="row mb-md-5 mt-2">
            <form action="#" className="">
              <div className="row">
                <div className="col-md-3 offset-md-9 col-sm-12 text-center">
                  <div className="row d-grid">
                    <div className="col-12 mt-3" onClick={() => setModal(true)}>
                      <span>¿Tienes un código de inmueble? </span>
                      <div className="rounded-pill btn bg-danger text-white btn-sm fw-bold">
                        Código
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <CarouselCards />
        </div>

        <ProductsRecommended />

        <Hero />
      </div>
      <Footer />
    </>
  );
}
