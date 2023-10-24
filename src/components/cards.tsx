import { CardTypeOne } from "./cardComponent";

export function Cards() {
    return (
        <>
            <div className="row mb-4">
                <div className="col-4 pe-5">
                    <CardTypeOne />
                </div>
                <div className="col-4 px-4">
                    <CardTypeOne />
                </div>
                <div className="col-4 ps-5">
                    <CardTypeOne />
                </div>
            </div>
        </>
    )
}