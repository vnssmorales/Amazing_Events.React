import React from "react";
import "./buscador.css";
export const Buscador = ({ onSearchInputChange }) => {
//cuando el usuario escribe en el input se llama a onSearchInputChange pasando el valor del input como argumento
  const handleInputChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    onSearchInputChange(searchValue); 
  };

  return (
    <div className="buscador-input">
      <input 
        className="form-control"
        aria-label="Search"
        type="text"
        placeholder="Buscar por palabra"
        onChange={handleInputChange}
      />
    </div>
  );
};
