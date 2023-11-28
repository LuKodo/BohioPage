import { CardTypeOne } from "./Cards/Cards.tsx";

export function Carousel() {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-5 carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-home-sliders-1.jpg?raw=true"
              className="d-block w-100"
              alt=""
              srcset=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-home-sliders-2.jpg?raw=true"
              className="d-block w-100"
              alt=""
              srcset=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-home-sliders-3.jpg?raw=true"
              className="d-block w-100"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
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
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export function CarouselCards() {
  return (
    <>
      <div className="row my-4 d-none d-md-flex">
        <div className="col-sm-12 col-md-4 p-3">
          <CardTypeOne
            detalles={`Estás buscando un inmueble para arrendar o quieres comprar uno usado. Anímate.`}
            titulo={"Arriendo y Venta de Usados"}
            image={
              "https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/destacada-1.png?raw=true"
            }
          />
        </div>
        <div className="col-sm-12 col-md-4 p-3">
          <CardTypeOne
            detalles={
              "Sé el primero en conocer los nuevos proyectos de vivienda sobre planos, podrás elegir de muchas opciones"
            }
            titulo={"Proyectos Sobre Planos"}
            image={
              "https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/destacada-2.png?raw=true"
            }
          />
        </div>
        <div className="col-sm-12 col-md-4 p-3">
          <CardTypeOne
            detalles={
              "Booking, propiedades exclusivas a precios fabulosos, disponibilidad por días, semanas, temporadas"
            }
            titulo={"Vacacionales"}
            image={
              "https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/destacada-3.png?raw=true"
            }
          />
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
              <CardTypeOne
                detalles={`Estás buscando un inmueble para arrendar o quieres comprar uno usado. Anímate.`}
                titulo={"Arriendo y Venta de Usados"}
                image={
                  "https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/destacada-1.png?raw=true"
                }
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-sm-12 col-md-4 py-3">
              <CardTypeOne
                detalles={
                  "Sé el primero en conocer los nuevos proyectos de vivienda sobre planos, podrás elegir de muchas opciones"
                }
                titulo={"Proyectos Sobre Planos"}
                image={
                  "https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/destacada-2.png?raw=true"
                }
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-sm-12 col-md-4 py-3">
              <CardTypeOne
                detalles={
                  "Booking, propiedades exclusivas a precios fabulosos, disponibilidad por días, semanas, temporadas"
                }
                titulo={"Vacacionales"}
                image={
                  "https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/destacada-3.png?raw=true"
                }
              />
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
    </>
  );
}
