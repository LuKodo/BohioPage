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
      <div style={{ paddingTop: "5 rem" }}>
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

          <div className="row my-4">
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
