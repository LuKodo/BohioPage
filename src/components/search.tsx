import { Dropdown } from "./dropdown"
import { Link } from 'raviger'

interface props {
    shadow: boolean
}

export function Search(props: props) {
    return (
        <>
            <div>
                <form action="#" className={props.shadow ? 'shadow p-2' : 'p-2'}>
                    <div className="row m-0 border rounded">
                        <div className="d-grid col-lg-4 border-end no-focus">
                            <input type="email" className="border-0 text-danger ps-2" id="floatingInput" placeholder="Ubicación" />
                        </div>
                        <div className="d-grid col-lg-4 border-end no-focus">
                            <input type="email" className="border-0 text-danger" id="floatingInput" placeholder="Servicios" />
                        </div>
                        <div className="d-grid col-lg-3 border-end no-focus">
                            <Dropdown />
                        </div>
                        <div className="d-grid col p-0">
                            <Link href='/search'>
                                <span className="w-100 rounded-0 rounded-end text-white bg-danger btn border-0">
                                    <span className="material-icons">search</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}