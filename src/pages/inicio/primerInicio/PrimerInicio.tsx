import "./PrimerInicio.css";
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
                <h1>Cuidamos tu salud de manera integral</h1>
                <p>Somos un <span>centro médico de Ramos Mejía </span><br />
                    donde vas a encontrar todas las especialidades <br />
                    y estudios que necesitás.
                </p>
            </div>

            <div className="div2">

                <div className="reserva">
                    <h1>Tus chequeos médicos y más</h1>
                    <a
                        href="https://v2.soloturnos.com/empresa/diagnome"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Solicitá tu turno acá
                    </a>
                </div>

                <div className="donde">
                    <h2>¿Dónde?</h2>
                    <p>Esquina Av. Rivadavia <br /> y Las Heras, Ramos <br /> Mejía - Zona Oeste</p>
                </div>

            </div>

            <div className="carrusel-container">

                <div className="carrusel-track">

                    <img src={entrada} alt="" />
                    <img src={esquina} alt="" />
                    <img src={ioma} alt="" />
                    <img src={cartel} alt="" />
                    <img src={escalera} alt="" />
                    <img src={adentro} alt="" />
                    <img src={entrada} alt="" />

                </div>

            </div>

        </div>
    );
};