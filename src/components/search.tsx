import { useEffect, useState } from "preact/hooks"
import { Dropdown, DropdownServices } from "./dropdown"
import { Link } from 'raviger'
import { instance } from "../utils/instance"
import { iLocation } from "../utils/interfaces"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { locationState, propertiesState, servicesState } from "../utils/data"

export function Search() {
    const [location, setLocation] = useState<iLocation[]>()
    const [list, setList] = useState<string[]>()
    const [openMenu, setOpenMenu] = useState(false);

    const locationTxt = useRecoilValue(locationState);
    const setLocationState = useSetRecoilState(locationState);
    const setProperties = useSetRecoilState(propertiesState);
    const setServices = useSetRecoilState(servicesState);

    const loadData = async () => {
        const queryParams = {
            model: "res.country.state.city",
            fields: '["name", "country_id", "state_id"]',
            domain: '[]'
        }

        try {
            const response = await instance("search_read", {
                params: queryParams
            })

            const locationClean = response.data.map((item: iLocation) => {
                item.country = item.country_id[1]
                item.state = item.state_id[1]
                return item
            })
            setLocation(locationClean)
        } catch (error) {
            console.log(error)
        }
    }

    const search = (term: string) => {
        let res: string[] = [];
        term = term.toLowerCase()

        location && location.map((item) => {
            res.push(item.country.split(' ')[0] + ", " + item.state.split(' ')[0] + ", " + item.name)
        })

        if (term !== "") {
            res = res.filter((item) => item.toLowerCase().includes(term))
        }

        setList(res.slice(0, 2))
        setLocationState(term)
    }

    useEffect(() => {
        loadData()
        search("")
    }, [])

    return (
        <>
            <form action="#">
                <div className="bg-danger-subtle p-3 shadow rounded-3 d-sm-block d-md-none">
                    <div className="row m-0">
                        <h6 className="fw-bold">Busca tu próximo inmueble</h6>
                        <div class="input-group p-2">
                            <input type="text" class="form-control" placeholder="Buscar inmueble" aria-label="Username" aria-describedby="basic-addon1" />
                            <Link href='/search'>
                                <span class="input-group-text bg-danger text-white" id="basic-addon1">
                                    <b className="bi bi-arrow-right"></b>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-3 shadow rounded-3 d-none d-md-block">
                    <div className="row m-0 border rounded">
                        <div className="d-grid col-lg-4 align-items-center border-end no-focus">
                            <input list="list" onChange={(e: Event) => {
                                const target = e.target as HTMLInputElement;
                                if (target.value.length >= 3) {
                                    setOpenMenu(true)
                                } else {
                                    setOpenMenu(false)
                                }
                                search(target.value)
                            }} value={locationTxt} type="text" className="border-0 ps-2" id="floatingInput" placeholder="Ubicación" />
                            {openMenu && (
                                <ul className="border bg-white rounded p-2 d-grid position-absolute" style={{ marginTop: "220px", width: 400, zIndex: 1000 }}>
                                    {list && list.map((item) => { return <div onClick={() => { setLocationState(item), setOpenMenu(false) }} className="btn text-start m-2">{item}</div> })}
                                </ul>
                            )}
                        </div>
                        <div className="d-grid col-lg-4 border-end no-focus">
                            <DropdownServices setName={setServices} />
                        </div>
                        <div className="d-grid col-lg-3 border-end no-focus">
                            <Dropdown setName={setProperties} />
                        </div>
                        <div className="d-flex col justify-content-center align-items-center bg-danger rounded-end">
                            <Link href='/search'>
                                <span className="text-white">
                                    <span className="material-icons">search</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}