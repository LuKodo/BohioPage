import { render } from "preact";
import { Router, Route } from "preact-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "/src/assets/css/main.css";
import "/src/assets/css/carousel.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { Home } from "./pages/Home.tsx";
import { ProductSearch } from "./pages/ProductSearch.tsx";
import { Product } from "./pages/ProductDetail.tsx";
import { setFilters } from "./utils/atom.tsx";
import { useEffect } from "preact/hooks";

const Main = () => {
  useEffect(() => {
    setFilters();
  }, []);

  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/search" component={ProductSearch} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </>
  );
};

render(<Main />, document.body!);
