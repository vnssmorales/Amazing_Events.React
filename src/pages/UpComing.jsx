import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/header";
import  Card  from "../components/Card/card";
import { fetchData } from "../components/Data/dataAxios";


export const Upcoming = () => {
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
  }, []);
    
    return (
        <>
        <Header title={"Upcoming"} />

        <Card data={data} currenRoute="upcoming" />
        </>
    )
};