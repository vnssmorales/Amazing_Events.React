import React, { useEffect, useState } from "react";
import { fetchData } from "../Data/dataAxios";
import "./table.css";

export const Table = () => {
    const [events, setEvents] = useState([]); //events nuevo estado para almacenar los datos y setEvents es el metodo que lo maneja

    useEffect(() => {
        const getData = async () => { //funcion asincrona para solicitar los datos utilizando la funcion fetchData
            try {
                const allEvents = await fetchData();

                //Obtener evento con mayor porcentaje de asistencia, funcion reductora
                const eventMaxAssistance = allEvents.reduce((max, event) => {
                    const percentageAssistance = (event.assistance / event.capacity) * 100;
                    return percentageAssistance > (max.assistance / max.capacity) * 100 ? event : max;
                    });

                //Obtener evento con menor porcentaje de asistencia
                const eventMinAssistance = allEvents.reduce((min, event) => {
                    const percentageAssistance = (event.assistance / event.capacity) * 100;
                    return percentageAssistance < (min.assistance / min.capacity) * 100 ? event : min;
                });

                //Obtener evento con mayor capacidad
                const eventMaxCapacity = allEvents.reduce((max, event) => 
                    event.capacity > max.capacity ? event : max);

                //Filtrar eventos pasados, es decir,  que tengan la propiedad capacity y assistance
                const pastEvents = allEvents.filter((event) => event.capacity && event.assistance);

                //calcular estadisticas por categoria para eventos pasados
                const categories = {}; //objeto vacio para almacenar las estadisticas
                pastEvents.forEach((event) => { //Recorre el array de eventos pasados
                    if (!categories[event.category]) { //si la categoria no existe en el objeto categories, la crea utilizando el nombre de la categoria como clave
                        categories[event.category] = {//crea la categoria con las propiedades revenue, totalAttendance y totalCapacity inicializadas en 0
                            revenue: 0,
                            totalAttendance: 0,
                            totalCapacity: 0,
                        };
                    }
                    
                    const revenue = event.capacity * event.price; //calcula el ingreso del evento
                    categories[event.category].revenue += revenue; //actualiza las ganancias de la categoria
                    categories[event.category].totalAttendance += event.assistance; //actualiza la asistencia de la categoria
                    categories[event.category].totalCapacity += event.capacity; //actualiza la capacidad de la categoria
                });

                //filtrar eventos futuros, es decir, que tengan la propiedad estimate y capacity
                const upcomingEvents = allEvents.filter((event) => event.capacity && event.estimate);

                //calcular estadisticas por categoria para eventos futuros
                const categoriesUp = {}; 
                upcomingEvents.forEach((event) => {
                    if (!categoriesUp[event.category]) {
                        categoriesUp[event.category] = {
                            revenue: 0,
                            totalEstimate: 0,
                            totalCapacity: 0,
                        };
                    }

                    const revenue = event.capacity * event.price;
                    categoriesUp[event.category].revenue += revenue;
                    categoriesUp[event.category].totalEstimate += event.estimate;
                    categoriesUp[event.category].totalCapacity += event.capacity;
                });

                 //actualiza el estado events con los datos obtenidos
                 setEvents({
                    eventMaxAssistance,
                    eventMinAssistance,
                    eventMaxCapacity,
                    categories,
                    categoriesUp,
                 });

             } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        getData();
    }, []);

    if (events.length === 0) { //si no hay datos, muestra un mensaje de cargando
      return <div>Cargando...</div>;
    }
  
  return (
    <>
      <div className="container-table">

        <table>
        <thead>
          <tr>
            <td className="title" colSpan="4">
              Events statistics
            </td>
          </tr>
          <tr>
            <th>Evento con mayor porcentaje de asistencia</th>
            <th>Evento con menor porcentaje de asistencia</th>
            <th>Evento con mayor capacidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{events.eventMaxAssistance?.name} </td>
            <td>{events.eventMinAssistance?.name}</td>
            <td>{events.eventMaxCapacity?.name}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <td className="title" colSpan="4">
              Upcoming Events statistics by category
            </td>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Estimado</th>
          </tr>
        </thead>
        <tbody>
            {Object.entries(events.categoriesUp || {}).map(([category, stats]) => (
            <tr key={category}>
                <td>{category}</td>
                <td>${stats.revenue}</td>
                <td>
                    {Math.round((stats.totalEstimate / stats.totalCapacity) * 100)}%
                </td>
                </tr>
        ))}
        </tbody>

        <thead>
          <tr>
            <td className="title" colSpan="4">
              Past Events statistics by category
            </td>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>% de asistencia</th>
          </tr>
        </thead>
        <tbody>
          
            {Object.entries(events.categories || {}).map(([category, stats]) => (
            <tr key={category}>
                <td>{category}</td>
                <td>${stats.revenue}</td>
                <td>
                    {Math.round((stats.totalAttendance / stats.totalCapacity) * 100)}%
                </td>
                </tr>
        ))}
        </tbody>

        </table>
      </div>
    </>
  );
};
