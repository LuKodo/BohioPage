import { render } from 'preact'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '/src/assets/css/main.css'
import '/src/assets/css/carousel.css'
import Router from 'preact-router'
import { Home } from './pages/home.tsx'
import { LookUp } from './pages/lookup.tsx'

export function Main() {
    return (
        <Router>
            <Home path="/" />
            <LookUp path="/search" />
        </Router>
    )
}

render(<Main />, document.body!)
