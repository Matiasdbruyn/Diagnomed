import "./Footer.css"
import { Link } from "react-router-dom"
import logoBlanco from "../assets/logoBlanco.png"

const IconMail = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
)

const IconInstagram = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
)

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer id="footer">
            <div className="footer-top">
                <Link to="/" onClick={scrollToTop} className="footer-logo">
                    <img src={logoBlanco} alt="Diagnomed" />
                </Link>

                {/* TODO: reemplazar por el link real de WhatsApp o turnos online si suman uno */}
                <a className="footer-cta" href="mailto:turnos.diagno@gmail.com">
                    <span className="footer-cta-icon"><IconMail /></span>
                    Escribinos por email
                </a>
            </div>

            <hr className="footer-divider" />

            <div className="footer-info">
                <div className="footer-col">
                    <h2>Horarios</h2>
                    <p>Lunes a Viernes de 9 a 18 hs</p>
                    <p>Sábados de 9 a 13 hs</p>
                </div>

                <div className="footer-col">
                    <h2>Contacto</h2>
                    <p>TEL: 4654-2801</p>
                    <p>TEL: 4625-0007</p>
                    <a href="mailto:turnos.diagno@gmail.com">turnos.diagno@gmail.com</a>
                </div>

                <div className="footer-col">
                    <h2>Ubicación</h2>
                    <p>
                        Las Heras 16
                        <br />
                        (Esq. Av. Rivadavia y Las Heras)
                        <br />
                        Ramos Mejía, Zona Oeste
                    </p>
                </div>

                <div className="footer-col">
                    <h2>Síguenos</h2>
                    <div className="footer-social">
                        <a
                            href="https://www.instagram.com/diagnomed.rm/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <IconInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>Diagnomed &copy; {new Date().getFullYear()}. Todos los derechos reservados.</p>

                <nav className="footer-links">
                    <Link to="/" onClick={scrollToTop}>Inicio</Link>
                    <Link to="/especialidades" onClick={scrollToTop}>Especialidades</Link>
                    <Link to="/contacto" onClick={scrollToTop}>Contacto</Link>
                </nav>
            </div>
        </footer>
    )
}
