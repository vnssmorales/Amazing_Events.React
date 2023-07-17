import React from "react";
import { render, screen } from "@testing-library/react";
import MiComponente from "../components/MiComponente";

describe("Pruebas en <MiComponente />", () => {
    test("Debe mostrar el subtitulo enviado por props", () => {
        const saludo = "Hola, soy Goku";
        const subtitulo = "Soy un subtitulo";
        render(<MiComponente saludo={saludo} subtitulo={subtitulo} />);
        expect(screen.getByText(subtitulo)).toBeInTheDocument();
    });

    test("Debe mostrar <MiComponente /> correctamente", () => {
        const saludo = "Hola, soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = render(<MiComponente saludo={saludo} subtitulo={subtitulo} />);
        expect(wrapper).toMatchSnapshot();
    });

    test("Display the correct text", () => {
        render(<MiComponente />);
        const textElement = screen.getByText(/Hola, soy Goku/i);
        expect(textElement).toBeInTheDocument();
    });

    });