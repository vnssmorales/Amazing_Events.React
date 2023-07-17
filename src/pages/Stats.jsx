import { useEffect, useState } from "react";
import { Header } from "../components/Header/header";
import { Table } from "../components/Table/table";
import { fetchData } from "../components/Data/dataAxios";

export const Stats = () => {
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
        <Header title={"Estadisticas"} />
        <Table />
        </>
    );
};