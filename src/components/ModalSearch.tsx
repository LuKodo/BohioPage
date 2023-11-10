import { instance } from "../utils/instance";
import { route } from "preact-router";

interface props {
  modal: boolean;
  setModal: (x: boolean) => void;
  modalTxt: string;
  setModalTxt: (x: string) => void;
  error: boolean;
  setError: (x: boolean) => void;
}

function ModalSearch(props: props) {
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    props.setModalTxt(target.value);
  };

  const searchByCode = async (code: string) => {
    const queryParams = {
      model: "product.template",
      fields: '["name"]',
      domain: `[["is_property", "=", "true"], ["code", "=", "${code}"]]`,
      limit: 1,
    };

    try {
      const response = await instance("search_read", {
        params: queryParams,
      });

      route(`/product/${response.data[0].id}`, true);
    } catch (error) {
      props.setError(true);
    }
  };

  return (
    <div
      className={`modal ${props.modal ? "d-block fade show" : "d-none"}`}
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body mt-0 mx-3">
            <h5 className="modal-title mb-0 mt-3">Buscar por código</h5>
            <p className="small mb-3">
              Ingresa el código del inmueble que quieres encontrar
            </p>
            <input
              type="text"
              value={props.modalTxt}
              onChange={handleInputChange}
              name=""
              placeholder="Código del inmueble"
              className="form-control form-control-lg"
            />
            <span
              className={`small text-danger ${
                props.error ? "d-block" : "d-none"
              }`}
            >
              Código incorrecto o no existe
            </span>
          </div>
          <div className="modal-footer border-0 mx-3 row">
            <button
              type="button"
              className="btn btn-outline-danger col-3"
              onClick={() => props.setModal(false)}
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger col-3"
              onClick={() => searchByCode(props.modalTxt)}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalSearch };
