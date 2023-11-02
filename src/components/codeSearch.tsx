import { navigate } from "raviger";
import { instance } from "../utils/instance";

interface modalprops {
    modal: boolean,
    setModal: (x: boolean) => void,
    modalTxt: string,
    setModalTxt: (x: string) => void,
    error: boolean,
    setError: (x: boolean) => void
}

const CodeSearch = (props: modalprops) => {
    const handleInputChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        props.setModalTxt(target.value)
    }

    const searchByCode = async (code: string) => {
        const queryParams = {
            model: "product.template",
            domain: `[["is_property", "=", "true"], ["code", "=", "${code}"]]`,
            limit: 1
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })

            navigate(`/product/${response.data[0].id}`)
        } catch (error) {
            props.setError(true)
        }
    }

    return (
        <div class={`modal ${props.modal ? "d-block fade show" : "d-none"}`} tabIndex={-1} onClick={() => props.setModal(false)}>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body mt-0 mx-3">
                        <h5 class="modal-title mb-0 mt-3">Buscar por código</h5>
                        <p className="small mb-3">Ingresa el código del inmueble que quieres encontrar</p>
                        <input type="text" value={props.modalTxt} onChange={handleInputChange} name="" placeholder="Código del inmueble" className="form-control form-control-lg" />
                        <span className={`small text-danger ${props.error ? 'd-block' : 'd-none'}`}>Código incorrecto o no existe</span>
                    </div>
                    <div class="modal-footer border-0 mx-3 row">
                        <button type="button" class="btn btn-outline-danger col-3" onClick={() => props.setModal(false)} data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger col-3" onClick={() => searchByCode(props.modalTxt)}>Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CodeSearch };