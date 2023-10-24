import Router from 'preact-router'
import { render } from 'preact';

import '/src/assets/css/bootstrap.css'
import '/src/assets/js/bootstrap.js'
import '/src/assets/css/main.css'
import '/src/assets/css/carousel.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Home } from './pages/home.tsx'
import { LookUp } from './pages/lookup.tsx'

const Main = () => {
    return (
        <Router>
            <Home path="/" />
            <LookUp path="/search" />
        </Router>
    )
}

render(<Main />, document.body!)
