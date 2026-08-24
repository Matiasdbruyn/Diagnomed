import { useState } from "react";
import "./Especialidades.css";

// Fotos
import fotoClinicaMedica from "../../assets/clinica_médica.jpg"
import fotoGinecologia from "../../assets/gineco.jpg"
import fotoTraumatologia from "../../assets/traumato.jpg"
import fotoCardiologia from "../../assets/cardiologia.jpeg"
import fotoRadiologia from "../../assets/radiologia.jpg"
import fotoNefrologia from "../../assets/nefrologia.jpg"
import fotoPediatria from "../../assets/pediatria.jpeg"
import fotoKinesiologia from "../../assets/kinesio.jpg"
import fotoReumatologia from "../../assets/reumatologia.jpg"
import fotoFlebologia from "../../assets/flebología.jpg"
import fotoOtorrinolaringologia from "../../assets/otorrinolaringologia.jpg"
import fotoNutricion from "../../assets/clinicaMedica3.jpg"
import fotoEstudio from "../../assets/clinicaMedica2.jpg"
import fotoCardiologiaInfantil from "../../assets/cardiologiaInfantil.jpg"
import fotoDopplerCuello from "../../assets/dopplerCuello.jpg"
import fotoDopplerPeriferico from "../../assets/dopplerPeriferico.jpg"
import fotoEcografias from "../../assets/ecografias.jpg"
import fotoHolter from "../../assets/holter.jpg"
import fotoPresurometria from "../../assets/presurometria.jpg"

// Íconos
import iconoOtorrinolaringologia from "../../assets/icons/otorrinolaringologia.png"
import iconoClinicaMedica from "../../assets/icons/clinicaMedica.png"
import iconoTraumatologia from "../../assets/icons/traumatologia.png"
import iconoGinecologia from "../../assets/icons/ginecologia.png"
import iconoCardiologia from "../../assets/icons/cardiologia.png"
import iconoNutricion from "../../assets/icons/nutricion.png"
import iconoPediatria from "../../assets/icons/pediatria.png"
import iconoReumatologia from "../../assets/icons/reumatologia.png"
import iconoNefrologia from "../../assets/icons/nefrologia.png"
import iconoEcografias from "../../assets/icons/ecografias.png"
import iconoHolter from "../../assets/icons/holter.png"
import iconoEcocardiograma from "../../assets/icons/ecocardiograma.png"

type Categoria = "especialidad" | "estudio"

type Tarjeta = {
    id: number;
    categoria: Categoria;
    titulo: string;
    descripcion: string;
    imagen: string;
    icono?: string;
};

const tarjetas: Tarjeta[] = [
    // ===== ESPECIALIDADES =====
    {
        id: 1,
        categoria: "especialidad",
        titulo: "Otorrinolaringología",
        descripcion:
            "Atiende oídos, nariz y garganta. Desde dolores de garganta que se repiten hasta problemas de audición o sinusitis.",
        imagen: fotoOtorrinolaringologia,
        icono: iconoOtorrinolaringologia,
    },
    {
        id: 2,
        categoria: "especialidad",
        titulo: "Clínica Médica",
        descripcion:
            "Atiende problemas generales, controles y chequeos. Si no sabés a qué especialista ir, empezá por acá.",
        imagen: fotoClinicaMedica,
        icono: iconoClinicaMedica,
    },
    {
        id: 3,
        categoria: "especialidad",
        titulo: "Traumatología",
        descripcion:
            "Consultá al traumatólogo si tenés dolor persistente, una lesión o molestias al moverse en tus huesos, músculos o articulaciones.",
        imagen: fotoTraumatologia,
        icono: iconoTraumatologia,
    },
    {
        id: 4,
        categoria: "especialidad",
        titulo: "Ginecología",
        descripcion:
            "Acompaña la salud de la mujer en todas las etapas (controles anuales, PAP, anticoncepción y consultas específicas).",
        imagen: fotoGinecologia,
        icono: iconoGinecologia,
    },
    {
        id: 5,
        categoria: "especialidad",
        titulo: "Cardiología",
        descripcion:
            "Cuida tu corazón con estudios como electrocardiograma, ecocardiograma y Doppler cardíaco. Clave para prevenir y controlar la presión.",
        imagen: fotoCardiologia,
        icono: iconoCardiologia,
    },
    {
        id: 6,
        categoria: "especialidad",
        titulo: "Cardiología Infantil",
        descripcion:
            "Cuida el corazón de los más chicos, desde el control preventivo hasta el seguimiento de soplos o antecedentes familiares adaptados a cada edad.",
        imagen: fotoCardiologiaInfantil,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 7,
        categoria: "especialidad",
        titulo: "Nutrición",
        descripcion:
            "Te acompaña a mejorar tu alimentación con un plan pensado para tu cuerpo, tu rutina y tus objetivos de salud.",
        imagen: fotoNutricion,
        icono: iconoNutricion,
    },
    {
        id: 8,
        categoria: "especialidad",
        titulo: "Pediatría",
        descripcion:
            "Acompaña el crecimiento de los chicos con controles, vacunación y atención de todas las consultas de la infancia.",
        imagen: fotoPediatria,
        icono: iconoPediatria,
    },
    {
        id: 9,
        categoria: "especialidad",
        titulo: "Reumatología",
        descripcion:
            "Trata dolores articulares, musculares y enfermedades como la artritis. Consultá si el dolor se repite o te limita en el día a día.",
        imagen: fotoReumatologia,
        icono: iconoReumatologia,
    },
    {
        id: 10,
        categoria: "especialidad",
        titulo: "Flebología",
        descripcion:
            "Se ocupa de la salud de tus venas: várices, piernas cansadas, hinchazón y problemas de circulación.",
        imagen: fotoFlebologia,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 11,
        categoria: "especialidad",
        titulo: "Nefrología",
        descripcion:
            "Cuida el funcionamiento de tus riñones. Fundamental si tenés presión alta, diabetes o antecedentes familiares.",
        imagen: fotoNefrologia,
        icono: iconoNefrologia,
    },
    {
        id: 12,
        categoria: "especialidad",
        titulo: "Kinesiología",
        descripcion:
            "Te ayuda a recuperar el movimiento después de una lesión, cirugía o dolor crónico. La atención se coordina por lista de espera para asegurar continuidad en el tratamiento.",
        imagen: fotoKinesiologia,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },

    // ===== ESTUDIOS =====
    {
        id: 13,
        categoria: "estudio",
        titulo: "Ecografías",
        descripcion:
            "Estudio que usa ondas de sonido para ver por dentro, sin radiación y sin dolor. Se aplica a abdomen, riñones, tiroides, mamas y más zonas.",
        imagen: fotoEcografias,
        icono: iconoEcografias,
    },
    {
        id: 14,
        categoria: "estudio",
        titulo: "Presurometría / MAPA",
        descripcion:
            "Registra tu presión arterial durante 24 horas. Detecta variaciones que una sola medición en el consultorio no llega a mostrar.",
        imagen: fotoPresurometria,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 15,
        categoria: "estudio",
        titulo: "Holter Cardíaco",
        descripcion:
            "Registra la actividad de tu corazón durante 24 horas. Detecta arritmias o síntomas que no llegan a aparecer en un electrocardiograma común.",
        imagen: fotoHolter,
        icono: iconoHolter,
    },
    {
        id: 16,
        categoria: "estudio",
        titulo: "Radiografía",
        descripcion:
            "Una imagen rápida de huesos y órganos internos. Es clave para diagnosticar fracturas, dolores o problemas respiratorios.",
        imagen: fotoRadiologia,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 17,
        categoria: "estudio",
        titulo: "Ecocardiograma",
        descripcion:
            "Ecografía del corazón que permite ver cómo late, cómo bombea y el estado de sus válvulas.",
        imagen: fotoCardiologia,
        icono: iconoEcocardiograma,
    },
    {
        id: 18,
        categoria: "estudio",
        titulo: "Doppler periférico",
        descripcion:
            "Evalúa cómo circula la sangre por las venas y arterias de brazos y piernas.",
        imagen: fotoDopplerPeriferico,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 19,
        categoria: "estudio",
        titulo: "Doppler de vasos del cuello",
        descripcion:
            "Estudia las arterias que llevan sangre al cerebro para detectar obstrucciones a tiempo.",
        imagen: fotoDopplerCuello,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 20,
        categoria: "estudio",
        titulo: "Punciones",
        descripcion:
            "Es un estudio de mayor complejidad que requiere una orden médica específica. Antes de darte el turno revisamos la indicación para asegurarnos de que esté todo correcto.",
        imagen: fotoEstudio,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
    },
    {
        id: 21,
        categoria: "estudio",
        titulo: "Mamografías",
        descripcion:
            "Detecta cambios en la mama mucho antes de que puedan sentirse al tacto. Dura pocos minutos y, si bien puede resultar incómodo, la molestia es breve y el estudio es clave para cuidarte a tiempo.",
        imagen: fotoEstudio,
        // TODO: sumar ícono cuando llegue el de la carpeta de la familia
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

    const especialidades = tarjetas.filter((t) => t.categoria === "especialidad");
    const estudios = tarjetas.filter((t) => t.categoria === "estudio");

    return (
        <>

            <section className="informacion informacion--primera">
                <h1>Especialidades</h1>
                <div className="informacion-grid">
                    {especialidades.map((tarjeta) => (
                        <article
                            key={tarjeta.id}
                            className="tarjeta tarjeta--especialidad"
                            onClick={() => abrirTarjeta(tarjeta)}
                        >
                            <div className="tarjeta-icono">
                                {tarjeta.icono && <img src={tarjeta.icono} alt="" />}
                            </div>

                            <h3>{tarjeta.titulo}</h3>

                            <span>Ver más</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="informacion">
                <h1>Estudios</h1>
                <div className="informacion-grid">
                    {estudios.map((tarjeta) => (
                        <article
                            key={tarjeta.id}
                            className="tarjeta tarjeta--estudio"
                            onClick={() => abrirTarjeta(tarjeta)}
                        >
                            <div className="tarjeta-icono">
                                {tarjeta.icono && <img src={tarjeta.icono} alt="" />}
                            </div>

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
                        className={`informacion-modal informacion-modal--${abierta.categoria}`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button type="button" className="informacion-cerrar" onClick={cerrarTarjeta} aria-label="Cerrar">×</button>

                        <div>
                            <img src={abierta.imagen} alt="" />
                            <h2>{abierta.titulo}</h2>
                            <p>{abierta.descripcion}</p>

                            <a
                                href="https://v2.soloturnos.com/empresa/diagnome"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="informacion-agenda"
                            >
                                Revisá la agenda
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
