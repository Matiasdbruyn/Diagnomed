import "./Comentarios.css";

type Review = {
    id: number;
    name: string;
    rating: number;
    text: string;
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Joel Bled",
        rating: 5,
        text: "Las recepcionistas son muy atentas y atienden siempre con amabilidad. Los turnos para realizar estudios complementarios se consiguen con muy pocos días de demora y el equipo de técnicos también tiene muy buen trato.",
    },
    {
        id: 2,
        name: "Nélida Magdalena Gonzalez",
        rating: 5,
        text: "Excelente atención de las recepcionistas y profesionales. Fui a través de PAMI, encontré verdadera calidez humana y contención. Lo recomiendo de verdad. Mil gracias.",
    },
    {
        id: 3,
        name: "Alf Ciccone",
        rating: 5,
        text: "Quisiera resaltar la excelente atención brindada por las recepcionistas y los profesionales del sector Radiografía y Ecografía. Todos muy atentos, buena voluntad y empatía.",
    },
    {
        id: 4,
        name: "Lolo A",
        rating: 4,
        text: "La atención y empatía de los profesionales como las personas de recepcion es formidable, siempre que voy la atencion es excelente sigan asi son un gran equipo y eso se nota!",
    },
    {
        id: 5,
        name: "Susana Cornaglia",
        rating: 5,
        text: "Excelente atención en recepción y además insuperable el dr Dávila. Como profesional y calidad humana. La recepcionista ,más amable. Los descubrí en el 25 y se superan GRACIAS... GRACIAS. LES RECOMIENDO DIAGNOMED",
    },
    {
        id: 6,
        name: "Nancy Sanchez",
        rating: 5,
        text: "Muy buena atención de las chicas de recepción y los técnicos.Facil para comunicarse y solicitar turnos",
    },
];

const infiniteReviews = [...reviews, ...reviews];

function Comentarios() {
    return (
        <section className="comentarios">

            <div className="comentarios-wrapper">

                <div className="comentarios-track">

                    {infiniteReviews.map((review, index) => (
                        <article
                            className="comentario-card"
                            key={`${review.id}-${index}`}
                        >

                            <div className="comentario-header">

                                <div className="avatar">
                                    {review.name.charAt(0)}
                                </div>

                                <div className="comentario-info">
                                    <h3>{review.name}</h3>
                                </div>

                                <div className="estrellas-comentario">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </div>

                            </div>

                            <p>{review.text}</p>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Comentarios;