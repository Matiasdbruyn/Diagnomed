import { useEffect, useRef, useState } from "react";
import "./TercerInicio.css";
import gineco2 from "../../../assets/gineco2.jpg";
import clinicaMedica3 from "../../../assets/clinicaMedica3.jpg";

const slides = [
    {
        titulo: "Jornadas Ginecológicas",
        texto:
            "Una jornada mensual junto a nuestras ginecólogas con consultas y estudios ginecológicos en la mismo día:",
        imagen: gineco2,
        color: "#FFE9F2",
        colorTitulo: "#BA1397",
        colorTexto: "#ED40C4",
        lista: [
            "Consulta ginecológica",
            "Colposcopía y Papanicolau",
            "Mamografía",
            "Ecografía mamaria y axilar",
        ],
    },
    {
        titulo: "Jornada de Chequeos Médicos",
        texto:
            "Una jornada pensada para ponerte al día con tu salud general, con consultas de clínica médica y estudios básicos de control como:",
        imagen: clinicaMedica3,
        color: "#BDE0FE",
        colorTitulo: "#0B4F8A",
        colorTexto: "#1E7FD6",
        lista: [
            "Consulta de clínica médica",
            "Electrocardiograma",
            "Radiografía de tórax",
            "Ecografías abdominal y tiroides",
        ],
    },
];

export const TercerInicio = () => {
    const [indice, setIndice] = useState(0);

    const siguiente = () => {
        setIndice((actual) => Math.min(actual + 1, slides.length - 1));
    };

    const anterior = () => {
        setIndice((actual) => Math.max(actual - 1, 0));
    };

    const jornadaRef = useRef<HTMLDivElement>(null);
    const [enVista, setEnVista] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setEnVista(entry.isIntersecting),
            {
                threshold: 0.5,
            }
        );

        const elementoActual = jornadaRef.current;

        if (elementoActual) {
            observer.observe(elementoActual);
        }

        return () => {
            if (elementoActual) {
                observer.unobserve(elementoActual);
            }
        };
    }, []);

    return (
        <section
            className="prueba-carrusel"
            id="jornada"
            ref={jornadaRef}
            style={{
                backgroundColor: enVista
                    ? slides[indice].color
                    : "transparent",
                transition: "background-color 1s ease",
            }}
        >
            {/* FLECHA IZQUIERDA */}
            <button
                type="button"
                className="prueba-flecha prueba-flecha-izquierda"
                onClick={anterior}
                aria-label="Anterior"
            >
                ‹
            </button>

            {/* VENTANA DEL CARRUSEL */}
            <div className="prueba-ventana">
                <div
                    className="prueba-track"
                    style={{
                        transform: `translateX(-${indice * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            className="prueba-slide"
                            key={index}
                        >
                            {/* IMAGEN */}
                            <div className="imagen-contenido">
                                <img
                                    src={slide.imagen}
                                    alt=""
                                />
                            </div>

                            {/* CONTENIDO */}
                            <div
                                className="prueba-contenido"
                                style={
                                    {
                                        "--color-titulo": slide.colorTitulo,
                                        "--color-texto": slide.colorTexto,
                                    } as React.CSSProperties
                                }
                            >
                                <h2>
                                    {slide.titulo}
                                </h2>

                                <p>
                                    {slide.texto}
                                </p>

                                {/* LISTA PROPIA DE CADA SLIDE */}
                                {slide.lista && (
                                    <ul>
                                        {slide.lista.map((item, i) => (
                                            <li key={i}>
                                                - {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FLECHA DERECHA */}
            <button
                type="button"
                className="prueba-flecha prueba-flecha-derecha"
                onClick={siguiente}
                aria-label="Siguiente"
            >
                ›
            </button>
        </section>
    );
};