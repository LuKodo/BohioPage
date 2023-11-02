export function Carousel() {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-5 d-none d-md-block"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-home-sliders-1.jpg?raw=true"
              className="bd-placeholder-img"
              alt=""
              srcset=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-home-sliders-2.jpg?raw=true"
              className="bd-placeholder-img"
              alt=""
              srcset=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://github.com/LuKodo/BohioPage/blob/main/src/assets/img/bohio-home-sliders-3.jpg?raw=true"
              className="bd-placeholder-img"
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
