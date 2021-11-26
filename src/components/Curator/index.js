import React from "react";
import "./curator.scss";
import curatorPhoto from "../../images/curator-photo.png";

const Curator = () => {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto do curador Jocimar B. A. Huss" />
      </div>
      <div className="curator__details">
        <div>
          <h3>Jocimar B. A. Huss</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Desenvolvedor desde 2006, atualmente trabalhando como desenvolvedor
          sênior no DB1 Group.
        </p>
      </div>
    </div>
  );
};

export default Curator;
