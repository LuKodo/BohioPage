import { Footer, Header, WhatsappButton } from "../components";
import { PSEButton } from "../components/PSEButton.tsx";

export function About() {
  return (
    <>
      <WhatsappButton />
      <PSEButton />

      <Header />
      <div style={{ paddingTop: "7rem" }}>
        <div className="parallax align-items-center">
          <div className="row pt-4">
            <div class="col-6 offset-3">
              <div class="card">
                <div class="card-body">
                  <div class="car-title fw-bold h5 text-center mb-4">
                    BOHÍO Consultores S.A.S.
                  </div>
                  <p class="card-text">
                    <span className="fw-bold">
                      Objetivo General De La Empresa
                    </span>
                    <br />
                    Alcanzar una solidez económica que permita generar una
                    riqueza recíproca entre empresa, empleados y aliados, a
                    través de la prestación de servicios inmobiliarios con
                    calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold">Misión</span>
                    <br />
                    Somos una empresa comprometida con nuestros clientes,
                    generadora de ideas y soluciones inmobiliarias de calidad.
                    Entregamos toda nuestra experiencia y trabajo acorde con los
                    principios de Amabilidad, Responsabilidad, Eficiencia e
                    Innovación. <br />
                    <br />
                    La calidez humana es prioridad en el desarrollo de la
                    actividad diaria con nuestros clientes y aportar valor a sus
                    vidas nos permite crear relaciones duraderas con ellos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold">Visión</span>
                    <br />
                    Bohío Consultores Inmobiliarios, a través de un mejoramiento
                    continuo de su actividad, se propone ser en el 2024 una
                    empresa líder en servicios inmobiliarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold">Valores</span>
                    <br />
                    En <b>BOHÍO CONSULTORES INMOBILIARIOS</b> somos{" "}
                    <b>HONESTOS</b>. Nos comportamos y expresamos con coherencia
                    y sinceridad, de acuerdo a los valores morales.
                    <br />
                    <br />
                    Somos <b>AMABLES</b>. Nuestro personal presta sus servicios
                    de manera sencilla y delicada para hacer posible una
                    relación duradera y universal. Tenemos una excelente{" "}
                    <b>ACTITUD DE SERVICIO</b>. Trabajamos para convertir en
                    realidad los deseos de nuestros clientes, porque representa
                    un beneficio mutuo. Actuamos con <b>RESPONSABILIDAD</b>.
                    Reflexionamos, orientamos y valoramos las consecuencias de
                    nuestro servicio, siempre buscando la mejor opción para
                    nuestro cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-4 pb-4">
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold">Respeto</span>
                    <br />
                    Guardamos <b>RESPETO POR EL MEDIO AMBIENTE</b>. En la
                    construcción de obras urbanas y en el avance de nuestro
                    objeto social, desarrollamos prácticas adecuadas para lograr
                    un equilibrio ambiental. La <b>INVERSIÓN SOCIAL</b> es uno
                    de los pilares fundacionales de nuestra empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
