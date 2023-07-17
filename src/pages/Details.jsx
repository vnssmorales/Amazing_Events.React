import { DetailsCard } from "../components/Card/DetailsCard/detailsCard";
import { Header } from "../components/Header/header";
import { fetchData } from "../components/Data/dataAxios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

 export const Details = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchDataFromAPI = async () => {
        try {
          const result = await fetchData();
          setData(result);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
      fetchDataFromAPI();
    }, []);

    if(!data) {
        return <div>Cargando...</div>;
    }

    const event = data.find((item) => item._id == id);
   // console.log(event);
    
    return (
        <>
        <Header title={"Detalles"} />
          {event ? <DetailsCard event={event} /> : <div>Evento no encontrado</div>}

        </>
    );
 };