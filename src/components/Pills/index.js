import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Pills = ({ local, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`pills__container ${
        selected ? "pills__container--active" : ""
      }`}
    >
      {local}
    </div>
  );
};

Pills.propType = {
  local: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Pills;
