import React from 'react';
import './detailsCard.css';

export const DetailsCard = (props) => {
    const {name, category, description, date, place, capacity, assistance, estimate, price, image} = props.event;
    console.log(props);
    return (
        <div className="card-details">
          <img src={image} alt={name} />
          <div className="card-body">
            <h3>{name}</h3>
            <h5>Categoría: {category}</h5>
            <p>Fecha: {date}</p>
            <p><em>Description: {description}</em></p>
            <p>Lugar: {place}</p>
            <p>Capacidad: {capacity}</p>
            {assistance && <p>Asistencia: {assistance}</p>}
            {estimate && <p>Estimación: {estimate}</p>}
            <div className="card-footer">
              <h3>Precio: $ {price}</h3>
            </div>
          </div>
        </div>
      );

}