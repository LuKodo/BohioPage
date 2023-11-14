import { render } from "preact";
import { Router, Route } from "preact-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "/src/assets/css/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { Home } from "./pages/Home.tsx";
import { ProductSearch } from "./pages/ProductSearch.tsx";
import { Product } from "./pages/ProductDetail.tsx";
import { setFilters } from "./utils/atom.tsx";
import { useEffect } from "preact/hooks";
import { About } from "./pages/About.tsx";

const Main = () => {
  useEffect(() => {
    setFilters();
  }, []);

  const handleRoute = (e: { url: any }) => {
    localStorage.setItem("url", e.url);
  };

  return (
    <>
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/search" component={ProductSearch} />
        <Route path="/search/properties" component={ProductSearch} />
        <Route path="/search/projects" component={ProductSearch} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </>
  );
};

render(<Main />, document.body!);
