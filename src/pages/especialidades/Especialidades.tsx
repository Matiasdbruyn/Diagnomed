import { useState } from "react";
import "./Especialidades.css";

type Tarjeta = {
    id: number;
    titulo: string;
    descripcion: string;
};

const tarjetas: Tarjeta[] = [
    {
        id: 1,
        titulo: "Ginecología",
        descripcion:
            "Acá va toda la información correspondiente a la primera sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 2,
        titulo: "Cardiología\n (adultos e infantil)",
        descripcion:
            "Acá va toda la información correspondiente a la segunda sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 3,
        titulo: "Traumatología",
        descripcion:
            "Acá va toda la información correspondiente a la tercera sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 4,
        titulo: "Radiología",
        descripcion:
            "Acá va toda la información correspondiente a la cuarta sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 5,
        titulo: "Flebología",
        descripcion:
            "Acá va toda la información correspondiente a la quinta sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 6,
        titulo: "Kinesiología",
        descripcion:
            "Acá va toda la información correspondiente a la sexta sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 7,
        titulo: "Reumatología",
        descripcion:
            "Acá va toda la información correspondiente a la séptima sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 8,
        titulo: "Otorrinolaringología",
        descripcion:
            "Acá va toda la información correspondiente a la octava sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 9,
        titulo: "Nefrología",
        descripcion:
            "Acá va toda la información correspondiente a la octava sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 10,
        titulo: "Pediatría",
        descripcion:
            "Acá va toda la información correspondiente a la octava sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 11,
        titulo: "Clínica Médica",
        descripcion:
            "Acá va toda la información correspondiente a la octava sección. Podés poner todo el texto que necesites.",
    },
    {
        id: 12,
        titulo: "Estudios diagnósticos",
        descripcion:
            "ELECTROCARDIOGRAMA - ECOGRAFIA GENERAL - RADIOGRAFÍAS - DENSITOMETRÍA - MAMOGRAFÍAS - ECODOPPLER CARDÍACO - ECODOPPLER PERIFERICO - PRESUROMETRIA - HOLTER CARDÍACO - PAPA Y COLPO - COLOCACIÓN Y EXTRACCIÓN DEL DIU",
    },
];

export const Especialidades = () => {
    const [abierta, setAbierta] = useState<Tarjeta | null>(null);

    const abrirTarjeta = (tarjeta: Tarjeta) => {
        setAbierta(tarjeta);
    };

    const cerrarTarjeta = () => {
        setAbierta(null);
    };

    return (
        <>

            <section className="informacion">
                <h1>Especialidades</h1>
                <div className="informacion-grid">
                    {tarjetas.map((tarjeta) => (
                        <article
                            key={tarjeta.id}
                            className="tarjeta"
                            onClick={() => abrirTarjeta(tarjeta)}
                        >
                            <h3>{tarjeta.titulo}</h3>

                            <span>Ver más</span>
                        </article>
                    ))}
                </div>
            </section>

            {abierta && (
                <div
                    className="informacion-overlay"
                    onClick={cerrarTarjeta}
                >
                    <div
                        className="informacion-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            type="button"
                            className="informacion-cerrar"
                            onClick={cerrarTarjeta}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>

                        <h2>{abierta.titulo}</h2>

                        <p>{abierta.descripcion}</p>
                    </div>
                </div>
            )}
        </>
    );
};