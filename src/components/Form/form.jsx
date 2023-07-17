import React from "react";
import './form.css';

export const Form = () => {
    return (
        <>
        <div className="contenedor-form">
        <form action="" method="POST">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Nombre" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" required />
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
        </form>
        </div>
        </>
    );
};