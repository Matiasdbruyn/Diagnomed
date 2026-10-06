import "./DescuentoPami.css";
import fotoDescuento from "../../../assets/descuentoPami.jpg";

const MENSAJE_WHATSAPP =
    "Hola! Quiero conocer más sobre el descuento del 20% para PAMI en estudios de diagnóstico por imagen.";

export const DescuentoPami = () => {
    return (
        <section className="descuento">
            <div className="descuento-banner">
                <div className="descuento-texto">
                    <h2 className="descuento-titulo">
                        <span className="descuento-porcentaje">20% OFF</span>
                        Descuento promocional para PAMI
                    </h2>

                    <p className="descuento-descripcion">
                        Con la obra social PAMI Consultorios tenés un descuento
                        hospitalario del 20% en estudios de diagnósticos por imagen.
                    </p>

                    <a
                        className="descuento-boton"
                        href={`https://wa.me/5491149149441?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Conocer más
                    </a>
                </div>

                <div className="descuento-imagen">
                    <img src={fotoDescuento} alt="Credencial de obra social sobre una orden médica" />
                </div>
            </div>
        </section>
    );
};
