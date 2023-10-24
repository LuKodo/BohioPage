function CardTypeOne() {
    return (
        <div class="card bg-danger text-white" style="width: 100%;">
            <img src="src/assets/img/card-3.png" class="card-img-top p-3" height={300} alt="..." />
            <div class="card-body d-grid pt-0">
                <h5 class="card-title text-center border-bottom pb-2">VACACIONALES</h5>
                <p class="card-text text-center">Las propiedades más exclusivas a precios fabulosos, para tus vacaciones en lugares espectaculares.</p>
                <div className="row text-center pb-2">
                    <div className="col">
                        <b className="bi bi-phone fs-1"></b>
                        <br />
                        <span className="small">Encuentra propiedades para tus vacaciones</span>
                    </div>
                    <div className="col">
                        <b className="bi bi-hand-index-thumb fs-1"></b>
                        <br />
                        <span className="small">Encuentra propiedades para tus vacaciones</span>
                    </div>
                    <div className="col">
                        <b className="bi bi-umbrella fs-1"></b>
                        <br />
                        <span className="small">Encuentra propiedades para tus vacaciones</span>
                    </div>
                </div>
                <a href="#" class="btn bg-white rounded-pill text-danger fw-bold btn-sm"><b className="bi bi-play-fill"></b> Ver mas...</a>
            </div>
        </div>
    )
}

function CardTypeTwo() {
    return (
        <div class="card mb-4 rounded-3 shadow-sm position-relative">
            <span class="position-absolute mt-2 badge rounded-pill bg-danger" style={{ right: 10 }}>
                Arriendo
            </span>

            <span class="position-absolute badge rounded bg-secondary" style={{ right: 5, top: 170 }}>
                <b className="bi bi-plus"></b>
            </span>

            <span class="position-absolute badge rounded bg-secondary" style={{ right: 35, top: 170 }}>
                <b className="bi bi-heart"></b>
            </span>

            <span class="position-absolute badge rounded bg-secondary" style={{ right: 65, top: 170 }}>
                <b className="bi bi-arrows-angle-expand"></b>
            </span>

            <span class="position-absolute badge rounded-pill bg-secondary" style={{ left: 5, top: 170 }}>
                $ 1.300.000.000 COP
            </span>

            <img src="src/assets/img/card-3.png" class="card-img-top" height={200} alt="..." />

            <div class="card-body">
                <h6 class="card-title mb-0">
                    <b className="bi bi-house"></b> Casa El Recreo
                </h6>
                <small className="border-bottom pb-2">El Recreo, Montería, Córdoba, Colombia</small>

                <div className="row mt-3 mb-0 pb-0">
                    <div className="col border-end">
                        <p className="fs-4 d-flex align-items-center mb-0">3 <span class="material-icons">bed</span></p>
                        <small className="mt-0">Habitaciones</small>
                    </div>
                    <div className="col border-end">
                        <p className="fs-4 d-flex align-items-center mb-0">4 <span class="material-icons">shower</span></p>
                        <small className="mt-0">Baños</small>
                    </div>
                    <div className="col">
                        <p className="fs-4 d-flex align-items-center mb-0">500 <span class="material-icons">square_foot</span></p>
                        <small className="mt-0 pt-0">m2</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CardTypeOne, CardTypeTwo }