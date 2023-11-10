import { Component } from "preact";
import { DropdownPropertyType, DropdownServices } from "./index.tsx";
import { iLocation } from "../utils/interfaces";
import { Link } from "preact-router";

interface SearchProps {}

interface SearchState {
  location: iLocation[] | null;
  list: string[] | null;
  openMenu: boolean;
  filters: any;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      location: null,
      list: null,
      openMenu: false,
      filters: {},
    };
  }

  search = (e: Event) => {
    const target = e.target as HTMLInputElement;
    let term = target.value;
    this.setState({ filters: { ...this.state.filters, location: term } });

    if (term.length >= 3) {
      this.setState({ openMenu: true });
      let res: string[] = [];

      this.state.location &&
        this.state.location.map((item) => {
          res.push(
            item.name.toLowerCase() +
              ", " +
              item.state.split(" ")[0].toLowerCase(),
          );
        });

      res = res.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase()),
      );
      this.setState({ list: res });
    } else {
      this.setState({ openMenu: false });
    }
  };

  componentDidMount() {
    const cities = localStorage.getItem("cities");

    if (cities !== null) {
      const locationClean = JSON.parse(cities).map((item: iLocation) => {
        item.country = item.country_id[1];
        item.state = item.state_id[1];
        return item;
      });
      this.setState({ location: locationClean });
    }
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
                  onChange={this.search}
                  value={this.state.filters.location}
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="Buscar inmueble"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
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
                            this.setState({
                              filters: {
                                ...this.state.filters,
                                location: item,
                              },
                            });
                            this.setState({ openMenu: false });
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

          <div className="p-3 shadow rounded-3 d-none d-md-block">
            <div className="row m-0 border rounded">
              <div className="d-grid col-lg-4 align-items-center border-end no-focus">
                <input
                  onChange={this.search}
                  value={this.state.filters.location}
                  type="text"
                  className="border-0 ps-2 text-danger text-capitalize"
                  placeholder="Ubicación"
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
                              this.setState({
                                filters: {
                                  ...this.state.filters,
                                  location: item,
                                },
                              });
                              localStorage.setItem("location", item);
                              this.setState({ openMenu: false });
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
              <Link
                href="/search"
                className="d-flex col justify-content-center align-items-center bg-danger rounded-end"
              >
                <span className="text-white">
                  <span className="material-icons">search</span>
                </span>
              </Link>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Search;
