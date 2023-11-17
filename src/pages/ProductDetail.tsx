import { useEffect, useState } from "preact/hooks";
import { iProduct } from "../utils/interfaces";
import { instance } from "../utils/instance";
import { Footer, Header, MapboxMap } from "../components";
import { getImageType } from "../utils/filterProducts.tsx";

interface productDetail {
  id: string;
}

interface image {
  id: number;
  image_1920: string;
}

export const Product = (props: productDetail) => {
  const { id } = props;
  const [product, setProduct] = useState<iProduct | undefined>();
  const [images, setImages] = useState<Array<image>>();
  const [propertiesItems, setPropertiesItems] = useState<Array<any>>();
  const [propertiesTitles, setPropertiesTitles] = useState<Array<any>>();
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
        '["name", "rooms", "status", "note", "latitude", "longitude", "bathrooms", "ptype", "constructed", "rental", "building_area", "code", "rental_fee", "x_estrato", "x_country", "x_state", "x_city", "code"]',
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
      fields: "['image_1920']",
      domain: `[["product_tmpl_id.id", "=", "${id}"]]`,
    };

    const responsePhoto = await instance("search_read", {
      params: queryParamsPhoto,
    });

    setImages(responsePhoto.data);
  };

  const loadProperties = async () => {
    const queryParamsPhoto = {
      model: "product.template.attribute.value",
      fields: '["attribute_line_id", "name"]',
      domain: `[["product_tmpl_id.id", "=", "${id}"]]`,
    };

    const responseProperties = await instance("search_read", {
      params: queryParamsPhoto,
    });

    interface PropertyData {
      attribute_line_id: any[]; // Assuming attribute_line_id is an array of numbers
      name: string;
    }

    const propertiesList = responseProperties.data.map(
      (item: PropertyData) => ({
        index: item["attribute_line_id"][1],
        name: item.name,
      }),
    );

    let propertiesTitlesLoad: string[] = Array.from(
      new Set(propertiesList.map((item: { index: any }) => item.index)),
    );

    setPropertiesTitles(propertiesTitlesLoad);
    setPropertiesItems(propertiesList);
  };

  useEffect(() => {
    loadImages();
    loadProperties();
  }, [product]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "6rem" }}>
        <main className="">
          <div className="container mt-2 p-4">
            <div
              className={`modal ${modal ? "d-block fade show" : "d-none"}`}
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setModal(false)}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body mt-0 mx-3 d-grid">
                    <p className="modal-title mb-5 mt-3">
                      Escoge una opción para contactarte con el anunciante
                    </p>
                    <a href="#" className="btn btn-danger mb-3">
                      Quiero que me contacten
                    </a>
                    <a href="#" className="btn btn-outline-danger mb-3">
                      Ver teléfono
                    </a>
                    <a href="#" className="btn btn-outline-danger">
                      Contactar por Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {product && (
              <>
                <div
                  className="card position-fixed p-2 d-none d-md-block"
                  style={{
                    width: "18rem",
                    bottom: 200,
                    right: 20,
                    zIndex: 1000,
                  }}
                >
                  <div className="card-body d-grid">
                    <h6 className="card-subtitle small mb-2 text-body-secondary">
                      Precio total (COP)
                    </h6>
                    <h3 className="card-title fw-bold">
                      {new Intl.NumberFormat("es-CO", options).format(
                        product.rental_fee,
                      )}
                    </h3>
                    <p className="card-text fw-bold text-secondary">
                      ¿Te interesó este inmueble?
                    </p>
                    <a href="#" className="btn btn-danger mb-3">
                      Quiero que me contacten
                    </a>
                    <a href="#" className="btn btn-outline-danger mb-3">
                      Ver teléfono
                    </a>
                    <a href="#" className="btn btn-outline-danger">
                      Contactar por Whatsapp
                    </a>
                  </div>
                </div>

                <div className="position-fixed bg-white p-3 shadow-lg border-top border-danger d-md-none d-sm-block end-0 w-100 bottom-0">
                  <div className="row">
                    <div className="col">
                      <h6 className="card-subtitle small mb-2 text-body-secondary">
                        Precio total (COP)
                      </h6>
                      <h5 className="card-title fw-bold">
                        {new Intl.NumberFormat("es-CO", options).format(
                          product.rental_fee,
                        )}
                      </h5>
                    </div>
                    <div className="col d-grid">
                      <button
                        onClick={() => setModal(true)}
                        className="btn btn-sm btn-danger"
                      >
                        Contactar anunciante
                      </button>
                    </div>
                  </div>
                </div>

                <h3>{product.name}</h3>
                <h6 className="mt-3 fw-bold">Ubicación</h6>
                <h6 className="text-secondary">
                  {product.x_city[1].split(" ")[0]},{" "}
                  {product.x_city[1].split(" ")[2]}
                </h6>

                <div className="row">
                  <div className="col-md-12">
                    <div id="carouselExample" className="carousel slide">
                      <div className="carousel-inner">
                        {images &&
                          images.map((item, index) => {
                            return (
                              <div
                                className={`carousel-item ${
                                  index === 0 && "active"
                                }`}
                              >
                                {images && images[index] && (
                                  <>
                                    <img
                                      alt=""
                                      className="d-block w-100 h-50"
                                      src={`data:${getImageType(
                                        item.image_1920,
                                      )};base64,${item.image_1920}`}
                                    />
                                  </>
                                )}
                              </div>
                            );
                          })}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
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
                        data-bs-target="#carouselExample"
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
                </div>
                {product.note && (
                  <div className="row">
                    <h6 className="fw-bold">Descripción general</h6>
                    <div
                      className="col-md-9 col-sm-12"
                      dangerouslySetInnerHTML={{ __html: product.note }}
                    ></div>
                    <div className="col-12">
                      <p className="fw-bold">Código: {product.code}</p>
                    </div>
                  </div>
                )}

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
                <div className="row">
                  <h6 className="mt-5 fw-bold">Características</h6>
                  <div className="col-6">
                    {propertiesTitles &&
                      propertiesTitles.map((title: string) => {
                        return (
                          <>
                            <div className="fw-bold mt-3">{title}</div>

                            {propertiesItems &&
                              propertiesItems.map(
                                (item: { index: string; name: string }) => {
                                  if (item.index === title) {
                                    return (
                                      <div className="badge rounded-pill text-bg-danger me-2">
                                        {item.name}
                                      </div>
                                    );
                                  }
                                },
                              )}
                          </>
                        );
                      })}
                  </div>
                </div>

                {product.latitude && (
                  <div className="row mt-5">
                    <h6 className="mt-5 fw-bold">Ubicación</h6>
                    <MapboxMap
                      latitude={product.latitude}
                      longitude={product.longitude}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
