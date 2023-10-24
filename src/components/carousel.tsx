export function Carousel() {
    return (
        <>
            <div id="myCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="src/assets/img/bohio-home-sliders-1.jpg" class="bd-placeholder-img" alt="" srcset="" />
                    </div>
                    <div class="carousel-item">
                        <img src="src/assets/img/bohio-home-sliders-2.jpg" class="bd-placeholder-img" alt="" srcset="" />
                    </div>
                    <div class="carousel-item">
                        <img src="src/assets/img/bohio-home-sliders-3.jpg" class="bd-placeholder-img" alt="" srcset="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}