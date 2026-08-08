import "./PrimerInicio.css"
import logotipo from "../../../assets/logotipo.png"
import entrada from "../../../assets/entrada.jpg"

export const PrimerInicio = () => {
    return (
        <div className="parent">
            <div className="div1">
                <h1>centro medico</h1>
            </div>
            <div className="div2">
                <div className="reserva">
                    <h1>Reservá tu turno <span>acá</span>, <br /> en simples pasos. <br />Estudios, controles y consultas. Todo en Diagnomed.</h1>
                    <img src={logotipo} alt="" />
                </div>
                <p>Estamos en Esquina Av. Rivadavia y Las Heras Ramos Mejía, Zona Oeste (Las Heras 16)</p>
            </div>
            <div className="carrusel-container">
                <div className="carrusel-track" id="carruselTrack">
                    <img src={entrada} alt="" />
                    <img src={entrada} alt="" />
                    <img src={entrada} alt="" />
                    <img src={entrada} alt="" />
                    <img src={entrada} alt="" />
                    <img src={entrada} alt="" />
                </div>
            </div>
        </div>
    )
}
