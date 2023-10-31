import { useEffect, useState } from "preact/hooks"
import { typeProperty, typeService } from "../utils/interfaces";
import { SetterOrUpdater } from "recoil";

export function Dropdown(props: propertyType) {
    const [openMenu, setOpenMenu] = useState(false);
    const [statusFilters, setStatusFilter] = useState(typeProperty);

    useEffect(() => {
        setStatusFilter(typeProperty)
    }, [])

    useEffect(() => {
        getStatus() && props.setName(getStatus())
    }, [statusFilters])

    function onChangeStatus(name: string) {
        if (name === "Todos") {
            setStatusFilter(statusFilters.map((item) => { return { ...item, status: item.name === name } }))
        } else {
            setStatusFilter(statusFilters.map((item) => item.name === 'Todos' ? { ...item, status: false } : item))

            setStatusFilter((prev) =>
                prev.map((filter) => filter.name === name ? { ...filter, status: !filter.status } : filter)
            )
        }
    }

    function getStatus() {
        const filter = statusFilters.filter((f) => f.status === true);
        return filter.map((item) => item.name).join(', ');
    }

    function getStatusFilter(name: string) {
        const filter = statusFilters.find((f) => f.name === name);
        return filter && filter.status;
    }

    return (
        <div className="p-2">
            <div className="d-grid align-items-center" onClick={() => setOpenMenu(!openMenu)} type="button">
                <small className="w-100">Inmuebles</small>
                <div className="text-truncate">
                    {getStatus()} &nbsp; {openMenu ? <span className="material-icons fs-6">expand_less</span> : <span className="material-icons fs-6">expand_more</span>}
                </div>
            </div>
            {openMenu && (
                <div className="border bg-white rounded p-2 d-flex flex-wrap position-absolute mt-3" style={{ width: 410, zIndex: 1000 }}>
                    <a onClick={() => onChangeStatus("Todos")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Todos") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">check_circle</span>&nbsp;
                        <span className="text-decoration-none" href="#">Todos</span>
                    </a>
                    <a onClick={() => onChangeStatus("Apartamento")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Apartamento") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="bi bi-building-fill fs-6"></span>&nbsp;
                        <span className="text-decoration-none" href="#">Apartamento</span>
                    </a>
                    <a onClick={() => onChangeStatus("Apartaestudio")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Apartaestudio") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="bi bi-building-fill fs-6"></span>&nbsp;
                        <span className="text-decoration-none" href="#">Apartaestudio</span>
                    </a>
                    <a onClick={() => onChangeStatus("Casa")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Casa") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="bi bi-house-fill fs-6"></span>&nbsp;
                        <span className="text-decoration-none" href="#">Casa</span>
                    </a>
                    <a onClick={() => onChangeStatus("Cabaña")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Cabaña") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">villa</span>&nbsp;
                        <span className="text-decoration-none" href="#">Cabaña</span>
                    </a>
                    <a onClick={() => onChangeStatus("Casa Campestre")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Casa Campestre") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Casa Campestre</span>
                    </a>
                    <a onClick={() => onChangeStatus("Casa Lote")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Casa Lote") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Casa Lote</span>
                    </a>
                    <a onClick={() => onChangeStatus("Finca")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Finca") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Finca</span>
                    </a>
                    <a onClick={() => onChangeStatus("Habitación")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Habitación") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Habitación</span>
                    </a>
                    <a onClick={() => onChangeStatus("Lote")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Lote") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Lote</span>
                    </a>
                    <a onClick={() => onChangeStatus("Bodega")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Bodega") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Bodega</span>
                    </a>
                    <a onClick={() => onChangeStatus("Consultorio")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Consultorio") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Consultorio</span>
                    </a>
                    <a onClick={() => onChangeStatus("Local")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Local") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Local</span>
                    </a>
                    <a onClick={() => onChangeStatus("Oficina")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Oficina") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Oficina</span>
                    </a>
                    <a onClick={() => onChangeStatus("Parqueadero")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Parqueadero") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Parqueadero</span>
                    </a>
                    <a onClick={() => onChangeStatus("Edificio")} className={`btn btn-sm d-flex m-2 align-items-center ${getStatusFilter("Edificio") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">night_shelter</span>&nbsp;
                        <span className="text-decoration-none" href="#">Edificio</span>
                    </a>
                </div>
            )}

        </div>
    )
}

interface propertyType {
    setName: SetterOrUpdater<string>
}

export function DropdownServices(props: propertyType) {
    const [openMenu, setOpenMenu] = useState(false);
    const [statusFilters, setStatusFilter] = useState(typeService);

    useEffect(() => {
        setStatusFilter(typeService)
    }, [])

    useEffect(()=>{
        const text = getStatus(true)
        props.setName(text?.name !== undefined ? text.name : "")
    }, [statusFilters])

    function onChangeStatus(name: string) {
        const newStatus = statusFilters.map((filter) => {
            return {
                ...filter,
                status: filter.name === name,
            };
        });

        setStatusFilter(newStatus)
    }

    function getStatus(status: boolean) {
        const filter = statusFilters.find((f) => f.status === status);
        return filter;
    }

    function getStatusFilter(name: string) {
        const filter = statusFilters.find((f) => f.name === name);
        return filter && filter.status;
    }

    return (
        <div className="p-2">
            <div className="d-grid align-items-center" onClick={() => setOpenMenu(!openMenu)} type="button">
                <small className="w-100">Servicios</small>
                <div>
                    {getStatus(true)?.name} &nbsp; {openMenu ? <span className="material-icons fs-6">expand_less</span> : <span className="material-icons fs-6">expand_more</span>}
                </div>
            </div>
            {openMenu && (
                <div className="border bg-white rounded p-2 d-flex flex-wrap position-absolute mt-3" style={{ width: 350, zIndex: 1000 }}>
                    <a onClick={() => onChangeStatus("En Venta")} className={`btn d-flex m-2 align-items-center ${getStatusFilter("En Venta") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="material-icons fs-6">check_circle</span>&nbsp;
                        <span className="text-decoration-none" href="#">En Venta</span>
                    </a>
                    <a onClick={() => onChangeStatus("En arriendo")} className={`btn d-flex m-2 align-items-center ${getStatusFilter("En arriendo") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="bi bi-coin fs-6"></span>&nbsp;
                        <span className="text-decoration-none" href="#">En arriendo</span>
                    </a>
                    <a onClick={() => onChangeStatus("Arriendo y Venta")} className={`btn d-flex m-2 align-items-center ${getStatusFilter("Arriendo y Venta") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="bi bi-coin fs-6"></span>&nbsp;
                        <span className="text-decoration-none" href="#">Arriendo y Venta</span>
                    </a>
                    <a onClick={() => onChangeStatus("Vacacional")} className={`btn d-flex m-2 align-items-center ${getStatusFilter("Vacacional") ? 'bg-danger text-white' : 'border-danger text-danger'}`}>
                        <span className="bi bi-umbrella fs-6"></span>&nbsp;
                        <span className="text-decoration-none" href="#">Vacacional</span>
                    </a>
                </div>
            )}
        </div>
    )
}