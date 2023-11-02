import { useState } from "preact/hooks";
import {
  CardTypeOne,
  Carousel,
  CodeSearch,
  Footer,
  Header,
  Hero,
  Recommended,
  Search,
  WhatsappButton,
} from "../components";
import { PSEButton } from "../components/PSEButton.tsx";

export const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalTxt, setModalTxt] = useState<string>("");

  return (
    <>
      <CodeSearch
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
        <div class="container-fluid m-0 p-0">
          <Carousel />
        </div>

        <div className="container">
          <Search />

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

          <div className="row my-4 d-none d-md-flex">
            <div className="col-sm-12 col-md-4 p-3">
              <CardTypeOne />
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <CardTypeOne />
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <CardTypeOne />
            </div>
          </div>

          <div
            id="carouselExampleIndicators"
            className="carousel slide d-md-none d-sm-flex"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="col-sm-12 col-md-4 py-3">
                  <CardTypeOne />
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-sm-12 col-md-4 py-3">
                  <CardTypeOne />
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-sm-12 col-md-4 py-3">
                  <CardTypeOne />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <Recommended />
        <div class="container-fluid m-0 p-0">
          <Hero />
        </div>
      </div>
      <Footer />
    </>
  );
};
