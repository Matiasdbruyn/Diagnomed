import "./Footer.css"
import logoBlanco from "../assets/logoBlanco.png"

export const Footer = () => {
    return (
        <section className="sectionFooter">
            <div id="footer">
                <div id="informacionFooter">
                    <div>
                        <h1>Nosotros</h1>
                        <ul>
                            <li>Quienes Somos</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Contacto</h1>
                        <ul>
                            <li>11 4914-9441</li>
                            <li>4625-0007 / 4654-2801</li>
                            <li>Lunes a Viernes de 9 a 18 hs</li>
                            <li>Sábados de 9 a 13 hs</li>
                            <li>Las Heras 16, Ramos Mejía, Zona Oeste</li>
                        </ul>
                    </div>
                </div>
                <img id="logo" src={logoBlanco} alt="" />
            </div>
        </section>
    )
}