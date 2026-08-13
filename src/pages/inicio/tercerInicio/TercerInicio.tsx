import { useEffect, useRef, useState } from "react";
import "./TercerInicio.css";
import entrada from "../../../assets/entrada.jpg";
import tilde from "../../../assets/tilde.png";

const slides = [
    {
        titulo: "Jornadas Ginecológicas",
        texto:
            "Una jornada mensual junto a nuestra Médica Ginecóloga, donde podés acceder a los siguientes estudios:",
        imagen: entrada,
        color: "#FFE9F2",
        mostrarLista: true,
    },
    {
        titulo: "Segundo título",
        texto:
            "Este es el contenido del segundo slide.",
        imagen: entrada,
        color: "#BDE0FE",
    },
    {
        titulo: "Tercer título",
        texto:
            "Este es el contenido del tercer slide.",
        imagen: entrada,
        color: "#CDECCF",
    },
];

export const TercerInicio = () => {
    const [indice, setIndice] = useState(0);

    const siguiente = () => {
        if (indice < slides.length - 1) {
            setIndice(indice + 1);
        }
    };

    const anterior = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        }
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

        if (jornadaRef.current) {
            observer.observe(jornadaRef.current);
        }

        return () => {
            if (jornadaRef.current) {
                observer.unobserve(jornadaRef.current);
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
                            <div className="prueba-contenido">

                                <h2>
                                    {slide.titulo}
                                </h2>

                                <p>
                                    {slide.texto}
                                </p>

                                {/* LISTA SOLO PARA EL SLIDE QUE TENGA mostrarLista: true */}
                                {slide.mostrarLista && (
                                    <ul>
                                        <li>
                                            <img
                                                src={tilde}
                                                alt=""
                                            />
                                            Consulta ginecológica
                                        </li>

                                        <li>
                                            <img
                                                src={tilde}
                                                alt=""
                                            />
                                            Colposcopía y Papanicolau
                                        </li>

                                        <li>
                                            <img
                                                src={tilde}
                                                alt=""
                                            />
                                            Mamografía
                                        </li>

                                        <li>
                                            <img
                                                src={tilde}
                                                alt=""
                                            />
                                            Ecografía mamaria y axilar
                                        </li>

                                        <li>
                                            <img
                                                src={tilde}
                                                alt=""
                                            />
                                            Densitometría ósea (si la indica el profesional)
                                        </li>
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