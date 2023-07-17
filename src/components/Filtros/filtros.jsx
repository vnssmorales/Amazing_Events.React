import { useState } from "react";
import { Checkbox } from "./Checkbox/checkbox";
import { Buscador } from "./Buscador/buscador";

export const Filtros = ({ categories, onCategoryChange,onSearchInputChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);  //selectedCategories nuevo estado y setSelectedCategories es el metodo que lo maneja

  const handleCategoryChange = (selectedCategories) => { 
    setSelectedCategories(selectedCategories); 
    onCategoryChange(selectedCategories); //llama a onCategoryChange del componente padre
  };

  const handleSearchInputChange = (searchValue) => {
    setSearchValue(searchValue);
    onSearchInputChange(searchValue); //llama a onSearchInputChange del componente padre
  };

  return (
    <>
      <Checkbox
        categories={categories}
        onCheckboxChange={handleCategoryChange}
      />
      <Buscador onSearchInputChange={handleSearchInputChange} />
    </>
  );
};
