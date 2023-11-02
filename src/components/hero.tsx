interface props {
    url: string
}

export function Hero(props: props) {
    return (
        <>
            <div className="my-5 text-center">
                <img className="w-100" style={{height: 500}} src={props.url} alt="" />
            </div>
        </>
    )
}