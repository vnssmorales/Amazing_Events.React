import React, { useEffect, useRef } from "react";

export const Checkbox = ({categories, onCheckboxChange}) => { //recibe 2 propiedades: las categorias y el metodo que maneja el estado selectedCategories
  const checkboxRef = useRef({}); //objeto para almacenar las referencias a los checkbox
  
  const handleCheckboxChange = () => {
   const newSelectedCategories =  Object.keys(checkboxRef.current)
   //current es necesario para acceder al elemento real al que se refiere la referencia.
   .filter((category) => checkboxRef.current[category].current.checked)//filtra las categorias que estan seleccionadas
    .map((category) => category);

    onCheckboxChange(newSelectedCategories);
};   

useEffect(() => {
  //Set crea un objeto con valores unicos a partir del array de categorias y luego lo convierte en un array con spread operator
  const uniqueCategories = [...new Set(categories)];
  
  //actualiza el objeto checkboxRef  para relejar las categorias unicas
  checkboxRef.current = uniqueCategories.reduce((refs, category) => {
    refs[category] = refs[category] || React.createRef(); //crea una referencia para cada categoria, si ya existe la usa
    return refs;
  }, checkboxRef.current); 
}, [categories]); 

  return (
    <div className="checkbox-container">
      {categories && categories.length > 0 ? 
      (Object.keys(checkboxRef.current).map((category) => (
    
        <div className="form-check form-check-inline" key={`${category}`}>
          <input
            type="checkbox"
            name="category"
            value={category}
            id={category}
            ref={checkboxRef.current[category]}
            onChange={handleCheckboxChange}
          />&nbsp;&nbsp;
          <label htmlFor={category}>{category} </label >
        </div>
      ))
      ) : (
      <div>no hay datos</div>
      )}
    </div>
  );
};

