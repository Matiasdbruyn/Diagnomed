import { useState } from "react";
import "./ComunidadReels.css";

import reel1 from "../../../assets/reels/reel1.jpg";
import reel2 from "../../../assets/reels/reel2.jpg";
import reel3 from "../../../assets/reels/reel3.jpg";
import reel4 from "../../../assets/reels/reel4.jpg";
import reel5 from "../../../assets/reels/reel5.jpg";
import reel6 from "../../../assets/reels/reel6.jpg";

type Reel = {
    imagen: string;
    url: string;
};

const REELS: Reel[] = [
    { imagen: reel1, url: "https://www.instagram.com/diagnomed.rm/reel/C0O5NeIsK2t/" },
    { imagen: reel2, url: "https://www.instagram.com/diagnomed.rm/reel/CzxFJU2tnjk/" },
    { imagen: reel3, url: "https://www.instagram.com/diagnomed.rm/reel/C91-I-nx3r9/" },
    { imagen: reel4, url: "https://www.instagram.com/diagnomed.rm/reel/C7xVboAv0Xp/" },
    { imagen: reel5, url: "https://www.instagram.com/diagnomed.rm/reel/DRFKHz7jrWi/" },
    { imagen: reel6, url: "https://www.instagram.com/diagnomed.rm/reel/DdJ_5TnvoGn/" },
];

const TOTAL = REELS.length;

// Distancia circular con signo: cuántos "lugares" separan a i de indice,
// yendo por el camino más corto (negativo = a la izquierda, positivo = a la derecha).
const distanciaCircular = (i: number, indice: number) => {
    const cruda = i - indice;
    return (((cruda + TOTAL / 2) % TOTAL) + TOTAL) % TOTAL - TOTAL / 2;
};

export const ComunidadReels = () => {
    const [indice, setIndice] = useState(0);

    const anterior = () => {
        setIndice((actual) => (actual - 1 + TOTAL) % TOTAL);
    };

    const siguiente = () => {
        setIndice((actual) => (actual + 1) % TOTAL);
    };

    return (
        <section className="reels">
            <p className="reels-label">Instagram</p>
            <h2 className="reels-titulo">Mirá nuestros últimos reels</h2>

            <div className="reels-carrusel">
                <button
                    type="button"
                    className="reels-flecha reels-flecha-izquierda"
                    onClick={anterior}
                    aria-label="Anterior"
                >
                    ‹
                </button>

                <div className="reels-pista-contenedor">
                    {REELS.map((reel, i) => {
                        const diferencia = distanciaCircular(i, indice);
                        const distancia = Math.abs(diferencia);
                        // Más allá del vecino inmediato queda invisible: así la tarjeta que
                        // "da la vuelta" al circuito lo hace siempre oculta, sin cruzar a la vista.
                        const oculta = distancia >= 1.5;
                        const escala = distancia < 0.5 ? 1 : 0.85;
                        const opacidad = distancia < 0.5 ? 1 : distancia < 1.5 ? 0.5 : 0;

                        return (
                            <a
                                key={reel.url}
                                href={reel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reels-tarjeta"
                                tabIndex={oculta ? -1 : undefined}
                                aria-hidden={oculta}
                                style={{
                                    transform: `translate(-50%, -50%) translateX(calc(${diferencia} * (var(--reel-w) + var(--reel-gap)))) scale(${escala})`,
                                    opacity: opacidad,
                                    pointerEvents: oculta ? "none" : "auto",
                                    zIndex: 10 - Math.round(distancia),
                                }}
                            >
                                <img src={reel.imagen} alt="" />
                            </a>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="reels-flecha reels-flecha-derecha"
                    onClick={siguiente}
                    aria-label="Siguiente"
                >
                    ›
                </button>
            </div>

            <a
                className="reels-boton"
                href="https://www.instagram.com/diagnomed.rm/"
                target="_blank"
                rel="noopener noreferrer"
            >
                @diagnomed.rm
            </a>
        </section>
    );
};
