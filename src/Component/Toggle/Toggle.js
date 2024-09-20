import React from "react";
import "./Toggle.css";

const Toggle = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <>
      <div className="togglebtn">
        <i className="fas fa-minus dec" onClick={() => setDecrease()}></i>
        <div className="input">{quantity}</div>
        <i className="fas fa-plus inc" onClick={() => setIncrease()}></i>
      </div>
    </>
  );
};

export default Toggle;
