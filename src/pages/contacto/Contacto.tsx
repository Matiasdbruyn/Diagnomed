import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Contacto.css";

// Mismas especialidades que se muestran en /especialidades
const ESPECIALIDADES = [
    "Otorrinolaringología",
    "Clínica Médica",
    "Traumatología",
    "Ginecología",
    "Cardiología",
    "Cardiología Infantil",
    "Nutrición",
    "Pediatría",
    "Reumatología",
    "Flebología",
    "Nefrología",
    "Kinesiología",
];

type Faq = {
    pregunta: string;
    respuesta: string;
};

const FAQS: Faq[] = [
    {
        pregunta: "¿Qué obras sociales aceptan?",
        respuesta:
            "Trabajamos con IOMA (cobertura 100% en estudios seleccionados), OSPIT, PROSAL y PAMI (para estudios seleccionados). También aceptamos prepagas para estudios de imágenes y atendemos a pacientes particulares. Ante la duda, escribinos por WhatsApp y te confirmamos tu cobertura.",
    },
    {
        pregunta: "¿Necesito orden médica para sacar un turno?",
        respuesta:
            "Depende del estudio o la especialidad. Te recomendamos consultarnos por WhatsApp antes de tu turno para confirmar qué necesitás traer.",
    },
    {
        pregunta: "¿Tengo que ir en ayunas para una ecografía?",
        respuesta:
            "Algunos estudios requieren preparación previa (como ayuno u otras indicaciones) y otros no. Te lo confirmamos al momento de sacar el turno, según el tipo de ecografía que te corresponda.",
    },
    {
        pregunta: "¿Cómo saco un turno?",
        respuesta:
            "Podés escribirnos por WhatsApp al 11 4914-9441 o llamarnos al 4625-0007 / 4654-2801, de lunes a viernes de 9 a 18 hs y sábados de 9 a 13 hs.",
    },
    {
        pregunta: "¿Puedo cambiar o cancelar un turno?",
        respuesta:
            "Sí, contactanos con anticipación por WhatsApp o teléfono y te ayudamos a reprogramarlo.",
    },
    {
        pregunta: "¿Cuánto tarda en estar listo el resultado de un estudio?",
        respuesta:
            "El tiempo varía según el tipo de estudio. Te lo informamos al momento de realizarlo.",
    },
];

// TODO: confirmar que este es el número de WhatsApp correcto en formato internacional
// (54 9 11 4914-9441, siguiendo el formato que pide wa.me para números argentinos).
// Probarlo apenas se suba a producción.
const WHATSAPP_NUMERO = "5491149149441";

type FormState = {
    nombre: string;
    telefono: string;
    especialidad: string;
    consulta: string;
};

const FORM_INICIAL: FormState = {
    nombre: "",
    telefono: "",
    especialidad: "",
    consulta: "",
};

export const Contacto = () => {
    const [form, setForm] = useState<FormState>(FORM_INICIAL);
    const [faqAbierta, setFaqAbierta] = useState<number | null>(0);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const lineas = [
            "Hola, quiero hacer una consulta desde la web de Diagnomed.",
            `Nombre: ${form.nombre}`,
            `Teléfono: ${form.telefono}`,
        ];

        if (form.especialidad) {
            lineas.push(`Especialidad de interés: ${form.especialidad}`);
        }

        lineas.push(`Consulta: ${form.consulta}`);

        const mensaje = encodeURIComponent(lineas.join("\n"));
        window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`, "_blank", "noopener,noreferrer");

        setForm(FORM_INICIAL);
    };

    const toggleFaq = (indice: number) => {
        setFaqAbierta((actual) => (actual === indice ? null : indice));
    };

    return (
        <>
            <section className="contacto-hero">
                <h1>Contactanos</h1>
                <p>¿Tenés una consulta o querés más información? Escribinos y te respondemos a la brevedad.</p>
            </section>

            <section className="contacto-formulario">
                <form onSubmit={handleSubmit}>
                    <div className="contacto-campo">
                        <label htmlFor="nombre">Nombre y apellido</label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contacto-campo">
                        <label htmlFor="telefono">Teléfono / WhatsApp</label>
                        <input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            value={form.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contacto-campo">
                        <label htmlFor="especialidad">
                            Especialidad de interés <span>(opcional)</span>
                        </label>
                        <select
                            id="especialidad"
                            name="especialidad"
                            value={form.especialidad}
                            onChange={handleChange}
                        >
                            <option value="">Seleccioná una especialidad</option>
                            {ESPECIALIDADES.map((especialidad) => (
                                <option key={especialidad} value={especialidad}>
                                    {especialidad}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="contacto-campo contacto-campo--vacio" aria-hidden="true" />

                    <div className="contacto-campo contacto-campo--full">
                        <label htmlFor="consulta">Tu consulta</label>
                        <textarea
                            id="consulta"
                            name="consulta"
                            rows={5}
                            value={form.consulta}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="contacto-campo--full contacto-enviar">
                        <button type="submit">Enviar consulta</button>

                        <p className="contacto-ayuda">
                            Al enviar tu consulta, un integrante de nuestro equipo te va a contactar por WhatsApp o
                            email a la brevedad.
                        </p>

                        <a
                            className="contacto-email-alt"
                            href="mailto:turnos.diagno@gmail.com?subject=Consulta%20desde%20la%20web"
                        >
                            ¿Preferís email? Escribinos a turnos.diagno@gmail.com
                        </a>
                    </div>
                </form>
            </section>

            <section className="contacto-comunidad">
                <div className="contacto-comunidad-card">
                    <h2>Enterate antes que nadie</h2>
                    <p>
                        Sumate a nuestro canal de WhatsApp y enterate primero de jornadas, turnos disponibles y
                        novedades de Diagnomed.
                    </p>

                    {/* TODO: reemplazar "#" por el link real del canal de difusión cuando lo pasen */}
                    <a
                        href="#"
                        className="contacto-comunidad-boton"
                        onClick={(e) => e.preventDefault()}
                    >
                        Unirme al canal de WhatsApp
                    </a>
                </div>
            </section>

            <section className="contacto-faq">
                <h2>Preguntas frecuentes</h2>

                <div className="contacto-faq-lista">
                    {FAQS.map((faq, indice) => {
                        const abierta = faqAbierta === indice;

                        return (
                            <div
                                className={`contacto-faq-item${abierta ? " contacto-faq-item--abierta" : ""}`}
                                key={faq.pregunta}
                            >
                                <button
                                    type="button"
                                    className="contacto-faq-pregunta"
                                    onClick={() => toggleFaq(indice)}
                                    aria-expanded={abierta}
                                >
                                    <span>{faq.pregunta}</span>
                                    <span className="contacto-faq-icono" aria-hidden="true">
                                        {abierta ? "–" : "+"}
                                    </span>
                                </button>

                                {abierta && <p className="contacto-faq-respuesta">{faq.respuesta}</p>}
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};
