import React from "react";
import Button from "../Button";
import "./card.scss";

import iconAudio from "../../images/icon-audio-descricao.svg";
import iconBanheiro from "../../images/icon-banheiro-acessivel.png";
import iconBraile from "../../images/icon-braile.png";
import iconCaoGuia from "../../images/icon-caoguia.png";
import iconElevador from "../../images/icon-elevador.png";
import iconEstacionamento from "../../images/icon-estacionamento.png";
import iconLibras from "../../images/icon-libras.png";
import iconPisoTatil from "../../images/icon-piso-tatil.png";
import iconPortaLarga from "../../images/icon-porta-larga.png";
import iconRampa from "../../images/icon-rampa.png";

const facilities = [
  { id: 1, name: "Sinalização em Braile", icon: iconBraile },
  { id: 2, name: "Audio descrição", icon: iconAudio },
  { id: 3, name: "Banheiro acessível", icon: iconBanheiro },
  { id: 4, name: "Elevador para cadeirantes", icon: iconElevador },
  {
    id: 5,
    name: "Estacionamento para idosos / deficientes",
    icon: iconEstacionamento,
  },
  { id: 6, name: "Permite acesso de cães-guias", icon: iconCaoGuia },
  { id: 7, name: "Piso tátil de alerta", icon: iconPisoTatil },
  { id: 8, name: "Portas largas", icon: iconPortaLarga },
  { id: 9, name: "Rampas de acesso para cadeirante", icon: iconRampa },
  { id: 10, name: "Atendimento em Libras", icon: iconLibras },
];

const isChecked = (facility, place) => {
  const findedFacility = place.facilities.find((currentFacility) => {
    return currentFacility.item === facility.id;
  });

  if (!findedFacility) {
    return false;
  } else {
    return findedFacility.status;
  }
};

const Card = ({ place }) => {
  const imagePath = require('../../images' + place.image);
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={imagePath.default} alt={place.name} title={place.name} />
      </div>
      <div className="card__content">
        <h3>{place.name}</h3>
        <ul className="card__facilities">
          {facilities.map((facility) => {
            return (
              <li
                key={facility.id}
                className={`card__facilities__item card__facilities__item${
                  isChecked(facility, place) ? "" : "--unchecked"
                }`}
              >
                <img
                  src={facility.icon}
                  alt={facility.name}
                  title={facility.name}
                />
              </li>
            );
          })}
        </ul>
        <p>{place.description}</p>

        <a href={place.link} target="_blank" className="button card__button">Como chegar?</a>
      </div>
    </div>
  );
};

export default Card;
