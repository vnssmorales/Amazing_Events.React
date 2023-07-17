import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/header";
import  Card  from "../components/Card/card";
import { fetchData } from "../components/Data/dataAxios";

export const Home = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getData();
  }, []); //El [] indica que el efecto solo se ejecuta una vez, al montar el componente

    return (
       <>
       <Header title={"Home"} />
       <Card data={data} currenRoute="home" />
       </>
    );
};