import React, { useEffect, useState } from "react";
import "./card.css";
import { fetchData } from "../Data/dataAxios";
import { Button } from "../Button/button";
import { Filtros } from "../Filtros/filtros";

 const Card = ({currenRoute}) => { // recibe la ruta actual desde el componente padre(Home, Upcoming, Past)
  //inicializo los estados
  const [data, setData] = useState([]); //data es el estado que almacena los datos de la API
  const [filteredData, setFilteredData] = useState([]); //almacena los datos filtrados segun las categorias seleccionadas y el input de busqueda
  const [selectedCategories, setSelectedCategories] = useState([]);//almacena las categorias seleccionadas por el usuario
  const [searchValue, setSearchValue] = useState(""); //almacena el valor del input de busqueda ingresado por el usuario


  //controlador de eventos para actualizar los estados de las categorias
  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  //controlador de eventos para actualizar los estado del input de busqueda
  const handleSearchInputChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  //controlador de eventos para solicitar los datos cuando el componente se monta por primera vez
  useEffect(() => {
    const getData = async () => { //funcion asincrona para solicitar los datos utilizando la funcion fetchData
      try{
        const result = await fetchData();
        setData(result); //si la promesa se resuelve correctamente, actualiza el estado data con los datos de la API utilizando el metodo setData
      }catch(error){
        console.log("Error fetching data:",error);
      }
    };
    getData();
  }, []);


  //controlador de eventos para filtrar los datos en funcion de los cmbioa en los estados
  //de data, currenRoute, selectedCategories y searchValue
  useEffect(() => {
       let filteredEvents = data;

       //si hay categorias seleccionadas, filtra los datos en funcion de las categorias seleccionadas
    if(selectedCategories.length > 0){
      filteredEvents = filteredEvents.filter((item) =>
      selectedCategories.includes(item.category)
      );
    }

    //si hay un valor en el input de busqueda, filtra los datos en funcion del valor ingresado
    if(searchValue){
      const lowerCaseSearchValue = searchValue.toLowerCase();
      filteredEvents = filteredEvents.filter(
        (item) => ////filtra los datos en funcion del nombre, la categoria y la descripcion
        item.name.toLowerCase().includes(lowerCaseSearchValue) || 
        item.description.toLowerCase().includes(lowerCaseSearchValue) 
      );
    }

    //si la ruta actual es upcoming, filtra los datos en funcion de los eventos que tienen fecha estimada
     if(currenRoute === "upcoming"){
       filteredEvents = filteredEvents.filter((item) => item.estimate);
      //si la ruta actual es pastEvents, filtra los datos en funcion de los eventos que tienen asistencia
     }else if(currenRoute === "pastEvents"){
       filteredEvents = filteredEvents.filter((item) => item.assistance);
     }
      setFilteredData(filteredEvents); //actualiza el estado filteredData con los datos filtrados
  }, [data, currenRoute, selectedCategories, searchValue]); //se ejecuta cuando cambia alguno de los estados data, currenRoute, selectedCategories y searchValue

  //mientras espera que los datos se carguen desde la API.
  if (data.length === 0) { //si no hay datos, muestra un mensaje de cargando
    return <div>Cargando...</div>;
  }

  return (
   
    <>
     <div className="contenedor-filtros">
     <Filtros 
     categories={data.map((item) => item.category)}
     onCategoryChange={handleCategoryChange}  
     onSearchInputChange={handleSearchInputChange}
      />
    </div>

      <div className="contenedor-card">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {filteredData.map((item) => (
                <div className="col mb-4" key={item._id}>
                  <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h3 className="card-title">{item.name}</h3>
                      <h4 className="card-text">{item.category}</h4>
                      <p className="card-text">{item.description}</p>
                      <h3 className="card-text">Capacity: {item.capacity}</h3>
                      {item.assistance ? (
                        <h3 className="card-text">Assistance: {item.assistance}</h3>
                       ) : null}
                      {item.estimate ? ( 
                     <h3 className="card-text">Estimate: {item.estimate}</h3>
                      ) : null}
                    </div>
                    <div className="card-footer">
                      <h4 className="text-muted">Precio: ${item.price}</h4>
                      </div>
                      <Button _id={item._id} />
                  </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Card;