import { render } from 'preact';
import { useRoutes } from 'raviger';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '/src/assets/css/main.css'
import '/src/assets/css/carousel.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Home } from './pages/home.tsx'
import { LookUp } from './pages/lookup.tsx'
import { Product } from './pages/product.tsx';
import { RecoilRoot } from 'recoil'

interface id {
    id: string
}

const routes = {
    '/': () => <Home />,
    '/search': () => <LookUp />,
    '/product/:id': ({ id }: id) => <Product id={id} />,
}

const Main = () => {
    let route = useRoutes(routes)
    return (
        <>
            <RecoilRoot>
                {route}
            </RecoilRoot>
        </>
    )
}

render(<Main />, document.body!)
