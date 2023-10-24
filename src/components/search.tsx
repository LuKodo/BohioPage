import { Dropdown } from "./dropdown"

interface props {
    shadow: boolean
}

export function Search(props: props) {
    return (
        <>
            <div>
                <form action="#" class={props.shadow ? 'shadow p-2' : 'p-2'}>
                    <div class="row m-0 border rounded">
                        <div class="d-grid col-lg-4 border-end no-focus">
                            <input type="email" class="border-0 text-danger ps-2" id="floatingInput" placeholder="Ubicación" />
                        </div>
                        <div class="d-grid col-lg-4 border-end no-focus">
                            <input type="email" class="border-0 text-danger" id="floatingInput" placeholder="Servicios" />
                        </div>
                        <div class="d-grid col-lg-3 border-end no-focus">
                            <Dropdown />
                        </div>
                        <div className="d-grid col p-0">
                            <button type="submit" class="w-100 rounded-0 rounded-end text-white bg-danger btn border-0">
                                <span class="material-icons">search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}