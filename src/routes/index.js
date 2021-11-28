import { Fragment, useState } from "react";
import { Routes as Switich, Route } from "react-router-dom";

import { LocationContext } from "../contexts/LocationContext";
import { FilterContext } from "../contexts/FilterContext";

import Header from "../components/Header";
import Home from "../pages/Home";
import Places from "../components/Places";
import Curator from "../components/Curator";

const Routes = (props) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [filteredPlace, setFilteredPlace] = useState("");

  return (
    <FilterContext.Provider value={{ filteredPlace, setFilteredPlace }}>
      <LocationContext.Provider value={{ city, setCity, state, setState }}>
        <Header />
        <Switich>
          <Route
            path=":state/:city"
            element={
              <Fragment>
                <Home />
                <Places />
                <Curator />
              </Fragment>
            }
          />
        </Switich>
      </LocationContext.Provider>
    </FilterContext.Provider>
  );
};

export default Routes;
