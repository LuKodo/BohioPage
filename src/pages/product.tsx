import { useEffect, useState } from "preact/hooks";
import { iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";
import { Footer, Header, MapboxMap, WhatsappButton } from "../components";

interface product {
  id: string;
}

interface image {
  id: number;
  image_1920: string;
}

export const Product = (props: product) => {
  const { id } = props;
  const [product, setProduct] = useState<iProduct | undefined>();
  const [images, setImages] = useState<Array<image>>();
  const [modal, setModal] = useState<boolean>(false);

  const options = {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  const loadData = async () => {
    const queryParams = {
      model: "product.template",
      fields:
        '["name", "rooms", "bathrooms", "property_template_image_ids", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
      domain: `[["is_property", "=", "true"], ["id", "=", "${id}"]]`,
      limit: 1,
    };

    try {
      const response = await instance("search_read", {
        params: queryParams,
      });

      setProduct(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImages = async () => {
    const queryParamsPhoto = {
      model: "property.image",
      fields: '["image_1920"]',
      domain: `[["product_tmpl_id.id", "=", "${id}"]]`,
    };

    const responsePhoto = await instance("search_read", {
      params: queryParamsPhoto,
    });

    setImages(responsePhoto.data);
  };

  useEffect(() => {
    loadImages();
  }, [product]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <WhatsappButton />
      <Header />
      <div style={{ paddingTop: "6rem" }}>
        <main className="">
          <div className="container mt-2 p-4">
            <div
              class={`modal ${modal ? "d-block fade show" : "d-none"}`}
              tabIndex={-1}
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      onClick={() => setModal(false)}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body mt-0 mx-3 d-grid">
                    <p class="modal-title mb-5 mt-3">
                      Escoge una opción para contactarte con el anunciante
                    </p>
                    <a href="#" class="btn btn-danger mb-3">
                      Quiero que me contacten
                    </a>
                    <a href="#" class="btn btn-outline-danger mb-3">
                      Ver teléfono
                    </a>
                    <a href="#" class="btn btn-outline-danger">
                      Contactar por Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {product && (
              <>
                <div
                  class="card position-fixed p-2 d-none d-md-block"
                  style={{
                    width: "18rem",
                    bottom: 200,
                    right: 20,
                    zIndex: 1000,
                  }}
                >
                  <div class="card-body d-grid">
                    <h6 class="card-subtitle small mb-2 text-body-secondary">
                      Precio total (COP)
                    </h6>
                    <h3 class="card-title fw-bold">
                      {new Intl.NumberFormat("es-CO", options).format(
                        product.rental_fee,
                      )}
                    </h3>
                    <p class="card-text fw-bold text-secondary">
                      ¿Te interesó este inmueble?
                    </p>
                    <a href="#" class="btn btn-danger mb-3">
                      Quiero que me contacten
                    </a>
                    <a href="#" class="btn btn-outline-danger mb-3">
                      Ver teléfono
                    </a>
                    <a href="#" class="btn btn-outline-danger">
                      Contactar por Whatsapp
                    </a>
                  </div>
                </div>

                <div class="position-fixed bg-white p-3 shadow-lg border-top border-danger d-md-none d-sm-block end-0 w-100 bottom-0">
                  <div class="row">
                    <div className="col">
                      <h6 class="card-subtitle small mb-2 text-body-secondary">
                        Precio total (COP)
                      </h6>
                      <h5 class="card-title fw-bold">
                        {new Intl.NumberFormat("es-CO", options).format(
                          product.rental_fee,
                        )}
                      </h5>
                    </div>
                    <div className="col d-grid">
                      <button
                        onClick={() => setModal(true)}
                        class="btn btn-sm btn-danger"
                      >
                        Contactar anunciante
                      </button>
                    </div>
                  </div>
                </div>

                <h3>{product.name}</h3>
                <h6 className="mt-3 fw-bold">Ubicación</h6>
                <h6 className="text-secondary">
                  {product.x_country[1].split(" ")[0]},{" "}
                  {product.x_city[1].split(" ")[0]},{" "}
                  {product.x_state[1].split(" ")[0]}
                </h6>

                <div className="row">
                  <div className="col-md-12">
                    <div id="carouselExample" class="carousel slide">
                      <div class="carousel-inner">
                        {images &&
                          images.map((item, index) => {
                            return (
                              <div
                                class={`carousel-item ${
                                  index === 0 && "active"
                                }`}
                              >
                                {images && images[index] && (
                                  <img
                                    alt=""
                                    class="d-block w-100"
                                    src={`data:image/jpeg;base64,${item.image_1920}`}
                                  />
                                )}
                              </div>
                            );
                          })}
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12">
                    <p className="fw-bold">{product.note}</p>
                  </div>
                  <div className="col-12">
                    <p className="fw-bold">Código: {product.code}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="row d-flex">
                      <div className="col-1 d-grid align-items-center">
                        <b className="material-icons text-danger">bed</b>
                      </div>
                      <div className="col offset-1 d-grid">
                        <span className="small text-secondary">
                          Habitaciones
                        </span>
                        <span className="fw-bold">{product.rooms}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
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

                  <div className="col-md-3 col-sm-6">
                    <div className="row d-flex">
                      <div className="col-1 d-grid align-items-center">
                        <b className="material-icons text-danger">
                          local_parking
                        </b>
                      </div>
                      <div className="col offset-1 d-grid">
                        <span className="small text-secondary">
                          Parqueaderos
                        </span>
                        <span className="fw-bold">{product.parking}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-3 col-sm-6">
                    <div className="row d-flex">
                      <div className="col-1 d-grid align-items-center">
                        <b className="material-icons text-danger">
                          square_foot
                        </b>
                      </div>
                      <div className="col offset-1 d-grid">
                        <span className="small text-secondary">
                          Área construida
                        </span>
                        <span className="fw-bold">
                          {product.building_area} m2
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
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

                  <div className="col-md-3 col-sm-6">
                    <div className="row d-flex">
                      <div className="col-1 d-grid align-items-center">
                        <b className="material-icons text-danger">
                          monetization_on
                        </b>
                      </div>
                      <div className="col offset-1 d-grid">
                        <span className="small text-secondary">Precio m2</span>
                        <span className="fw-bold">
                          ${" "}
                          {product.rental_fee &&
                            product.building_area &&
                            new Intl.NumberFormat(undefined, {
                              maximumFractionDigits: 0,
                            }).format(
                              product.rental_fee / product.building_area,
                            )}
                          *m2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-5">
                  <h6 className="mt-5 fw-bold">Ubicación</h6>

                  <MapboxMap accessToken="pk.eyJ1IjoibWVwaGlzdG9wczEiLCJhIjoiY2xvZjd6NnZlMDk3ODJxbDVnY3RmNjNlOCJ9.J7uBGEv2uJIQNtDpMf0u3g" />
                </div>
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
