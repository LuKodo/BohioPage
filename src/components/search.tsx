import { useEffect, useState } from "preact/hooks";
import { Dropdown, DropdownServices } from "./dropdown";
import { Link, navigate } from "raviger";
import { instance } from "../utils/instance";
import { iLocation } from "../utils/interfaces";
import { useRecoilState } from "recoil";
import { filtersState } from "../utils/atom";

export function Search() {
  const [location, setLocation] = useState<iLocation[]>();
  const [list, setList] = useState<string[]>();
  const [openMenu, setOpenMenu] = useState(false);

  const [filters, setFilters] = useRecoilState(filtersState);

  const loadData = async () => {
    const queryParams = {
      model: "res.country.state.city",
      fields: '["name", "country_id", "state_id"]',
      domain: "[]",
    };

    try {
      const response = await instance("search_read", {
        params: queryParams,
      });

      const locationClean = response.data.map((item: iLocation) => {
        item.country = item.country_id[1];
        item.state = item.state_id[1];
        return item;
      });
      setLocation(locationClean);
    } catch (error) {
      console.log(error);
    }
  };

  const search = (e: Event) => {
    const target = e.target as HTMLInputElement;
    let term = target.value;
    setFilters({...filters, location: term});

    if (term.length >= 3) {
      setOpenMenu(true);
      let res: string[] = [];

      location &&
        location.map((item) => {
          res.push(
            item.country.split(" ")[0] +
              ", " +
              item.state.split(" ")[0] +
              ", " +
              item.name,
          );
        });

      res = res.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase()),
      );
      setList(res.slice(0, 2));
    } else {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <form action="#">
        <div className="bg-danger-subtle p-3 shadow rounded-3 d-sm-block d-md-none">
          <div className="row m-0">
            <h6 className="fw-bold">Busca tu próximo inmueble</h6>
            <div class="input-group p-2">
              <input
                onChange={search}
                value={filters.location}
                type="text"
                class="form-control"
                placeholder="Buscar inmueble"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <Link href="/search">
                <span
                  class="input-group-text bg-danger text-white"
                  id="basic-addon1"
                >
                  <b className="bi bi-arrow-right"></b>
                </span>
              </Link>
            </div>
            {openMenu && (
              <div
                className="border bg-white rounded p-2 d-grid position-absolute"
                style={{ marginTop: "80px", width: 330, zIndex: 1000 }}
              >
                {list &&
                  list.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setFilters({...filters, location: item});
                          setOpenMenu(false);
                        }}
                        className="btn text-start m-2"
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
                onChange={search}
                value={filters.location}
                type="text"
                className="border-0 ps-2 text-danger"
                placeholder="Ubicación"
              />
              {openMenu && (
                <ul
                  className="border bg-white rounded p-2 d-grid position-absolute"
                  style={{ marginTop: "220px", width: 400, zIndex: 1000 }}
                >
                  {list &&
                    list.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            setFilters({...filters, location: item});
                            setOpenMenu(false);
                          }}
                          className="btn text-start m-2"
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
              <Dropdown />
            </div>
            <div
              onClick={() => navigate("/search")}
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
