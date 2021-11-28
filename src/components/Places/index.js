import React, { useContext } from "react";
import Slider from "../Slider";
import "./places.scss";
import { FilterContext } from "../../contexts/FilterContext";

const Places = () => {
  const { filteredPlace, setFilteredPlace } = useContext(FilterContext);

  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          {filteredPlace ? filteredPlace + ' ' : 'Locais '} <span>Acessíveis</span>
        </h2>
        <div className="places__select">
          <h5>Ordenar por: </h5>
          <select>
            <option>Distância</option>
            <option>Alfabeto</option>
          </select>
        </div>
      </div>
      <div className="places__content">
        <Slider />
      </div>
    </section>
  );
};

export default Places;
