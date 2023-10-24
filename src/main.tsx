import { render } from 'preact';
import { useRoutes } from 'raviger';

import '/src/assets/css/bootstrap.css'
import '/src/assets/js/bootstrap.js'
import '/src/assets/css/main.css'
import '/src/assets/css/carousel.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Home } from './pages/home.tsx'
import { LookUp } from './pages/lookup.tsx'

const routes = {
    '/': () => <Home />,
    '/search': () => <LookUp />,
}

export default function Main() {
    let route = useRoutes(routes)
    return (
        <div>
            {route}
        </div>
    )
}

render(<Main />, document.body!)
