import "./PrimerInicio.css";
import logotipo from "../../../assets/logotipo.png";
import entrada from "../../../assets/entrada.jpg";
import esquina from "../../../assets/esquina.jpg";
import ioma from "../../../assets/ioma.jpeg";
import escalera from "../../../assets/escalera.jpeg";
import cartel from "../../../assets/cartel.jpeg";
import adentro from "../../../assets/adentro.jpg";

export const PrimerInicio = () => {
    return (
        <div className="parent">

            <div className="div1">
                <h1>!!!!!!!!!!!!!!!!!!!</h1>
            </div>

            <div className="div2">
                <div className="reserva">
                    <h1>
                        Reservá tu turno.
                        <br />
                        <span>
                            Estudios, controles y consultas. Todo en Diagnomed.
                        </span>
                    </h1>

                    <img src={logotipo} alt="" />
                </div>
            </div>

            <div className="carrusel-container">

                <div className="carrusel-track">

                    {/* Imagen 1 */}
                    <img src={entrada} alt="" />

                    {/* Imagen 2 */}
                    <img src={esquina} alt="" />

                    {/* Imagen 3 */}
                    <img src={ioma} alt="" />

                    {/* Imagen 4 */}
                    <img src={cartel} alt="" />

                    {/* Imagen 5 */}
                    <img src={escalera} alt="" />

                    {/* Imagen 6 */}
                    <img src={adentro} alt="" />

                    {/* COPIA DE LA PRIMERA */}
                    <img src={entrada} alt="" />

                </div>

            </div>

        </div>
    );
};