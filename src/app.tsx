import { Cards } from "./components/cards";
import { Carousel } from "./components/carousel";
import { Header } from "./components/header";
import { Search } from "./components/search";

export function App() {

  return (
    <>
      <Header />
      <main>
        <Carousel />
        <div className="container">
          <Search />
          
          <Cards />
        </div>
      </main>
    </>
  )
}
