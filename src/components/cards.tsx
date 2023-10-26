import { CardTypeOne } from "./cardComponent";

export function Cards() {
    return (
        <>
            <div className="row mb-4">
                <div className="col-md-4 pe-md-5 d-none d-md-block">
                    <CardTypeOne />
                </div>
                <div className="col-md-4 px-md-4 d-none d-md-block">
                    <CardTypeOne />
                </div>
                <div className="col-md-4 ps-md-5 d-none d-md-block">
                    <CardTypeOne />
                </div>
            </div>
        </>
    )
}