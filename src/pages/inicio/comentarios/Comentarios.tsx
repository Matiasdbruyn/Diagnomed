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
        name: "María González",
        rating: 5,
        text: "Excelente atención. Muy recomendable, quedé súper conforme.",
    },
    {
        id: 2,
        name: "Juan Pérez",
        rating: 5,
        text: "Muy buena experiencia. La atención fue excelente.",
    },
    {
        id: 3,
        name: "Lucía Fernández",
        rating: 5,
        text: "Excelente servicio, muy atentos y profesionales.",
    },
    {
        id: 4,
        name: "Carlos Rodríguez",
        rating: 4,
        text: "Muy buena atención y muy buena calidad. Lo recomiendo.",
    },
    {
        id: 5,
        name: "Sofía Martínez",
        rating: 5,
        text: "Todo excelente desde el primer momento.",
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