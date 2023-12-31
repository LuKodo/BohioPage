import { Component } from "preact";
import { DropdownPropertyType, DropdownServices } from "./index.tsx";
import { iLocation, iProduct } from "../utils/interfaces";
import { Link, route } from "preact-router";
import { filterProducts } from "../utils/filterProducts.tsx";

interface SearchProps {
  products: Array<iProduct | undefined> | undefined | null;
  setProducts: (products: null | undefined | (iProduct | undefined)[]) => void;
}

interface SearchState {
  location: iLocation[] | null;
  locationSelected: string;
  list: string[] | null;
  openMenu: boolean;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      location: null,
      locationSelected: "",
      list: null,
      openMenu: false,
    };
  }

  removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  search = (e: Event) => {
    const target = e.target as HTMLInputElement;
    let term = target.value;
    this.setState({ locationSelected: term });
    localStorage.setItem("location", term);

    if (term.length >= 3) {
      this.setState({ openMenu: true });
      let res: string[] = [];

      this.state.location &&
        this.state.location.map((item) => {
          if (item.city) {
            res.push(
              item.name.toLowerCase() +
                ", " +
                item.city.toLowerCase() +
                ", " +
                item.state.toLowerCase(),
            );
          } else {
            res.push(item.name.toLowerCase() + ", " + item.state.toLowerCase());
          }
        });

      res = res.filter((item) => {
        const sanitizedItem = this.removeAccents(
          item.toLowerCase().replace(",", ""),
        );
        const sanitizedSearchTerm = this.removeAccents(
          term.toLowerCase().replace(",", ""),
        );
        return sanitizedItem.includes(sanitizedSearchTerm);
      });
      this.setState({ list: res });
    } else {
      this.setState({ openMenu: false });
    }
  };

  componentDidMount() {
    const cities = localStorage.getItem("cities");
    const neighborhood = localStorage.getItem("neighborhood");
    let locationClean = [];
    const selected = localStorage.getItem("location");
    selected && this.setState({ locationSelected: selected });

    if (cities !== null) {
      locationClean = JSON.parse(cities).map((item: iLocation) => {
        item.country = item.country_id[1].split(" ")[0];
        item.state = item.state_id[1].split(" ")[0];
        return item;
      });
    }

    if (neighborhood !== null) {
      let filtrados = locationClean;

      locationClean = JSON.parse(neighborhood).map((item: iLocation) => {
        item.country = item.country_id[1].split(" ")[0];
        item.state = item.state_id[1].split(" ")[0];
        item.city = item.city[1].split(" ")[0];
        item.neighborhood = item.name;
        return item;
      });

      locationClean = [...filtrados, ...locationClean];
    }

    this.setState({ location: locationClean });
  }

  render() {
    return (
      <>
        <form action="#">
          <div className="bg-danger-subtle p-3 shadow rounded-3 d-sm-block d-md-none">
            <div className="row m-0">
              <h6 className="fw-bold">Busca tu próximo inmueble</h6>
              <div className="input-group p-2">
                <input
                  onInput={this.search}
                  value={this.state.locationSelected}
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="Ciudad o Barrio"
                />
                <Link href="/search">
                  <span
                    className="input-group-text bg-danger text-white"
                    id="basic-addon1"
                  >
                    <b className="bi bi-arrow-right"></b>
                  </span>
                </Link>
              </div>
              {this.state.openMenu && (
                <div
                  className="border bg-white rounded p-2 d-grid position-absolute"
                  style={{
                    marginTop: "80px",
                    width: 330,
                    zIndex: 1000,
                    overflowY: "auto",
                    height: 300,
                  }}
                >
                  {this.state.list &&
                    this.state.list.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            this.setState({ locationSelected: item });
                            this.setState({ openMenu: false });
                            localStorage.setItem("location", item);
                          }}
                          className="btn text-start mx-2 text-capitalize"
                        >
                          {item}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          <div className="d-none d-md-block">
            <div className="row m-0 border rounded">
              <div className="d-grid col-lg-4 align-items-center border-end no-focus">
                <input
                  onInput={this.search}
                  value={this.state.locationSelected}
                  type="text"
                  className="border-0 ps-2 text-danger text-capitalize"
                  placeholder="Ciudad o Barrio"
                />
                {this.state.openMenu && (
                  <ul
                    className="border bg-white rounded p-2 d-grid position-absolute overflow-y-auto"
                    style={{
                      marginTop: "270px",
                      width: 400,
                      zIndex: 1000,
                      height: 200,
                    }}
                  >
                    {this.state.list &&
                      this.state.list.map((item) => {
                        return (
                          <div
                            onClick={() => {
                              this.setState({ locationSelected: item });
                              this.setState({ openMenu: false });
                              localStorage.setItem("location", item);
                            }}
                            className="btn text-start m-2 text-capitalize"
                          >
                            {item}
                          </div>
                        );
                      })}
                  </ul>
                )}
              </div>
              <div className="d-grid col-lg-4 border-end no-focus">
                <DropdownServices />
              </div>
              <div className="d-grid col-lg-3 border-end no-focus">
                <DropdownPropertyType />
              </div>
              <div
                onClick={() => {
                  this.props.setProducts(filterProducts(this.props.products));
                  route("search", true);
                }}
                className="d-flex col justify-content-center align-items-center bg-danger rounded-end"
              >
                <span className="text-white">
                  <span className="material-icons">search</span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Search;
