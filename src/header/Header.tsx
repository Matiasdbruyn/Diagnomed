import "./Header.css";
import logo from "../assets/logo.png";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setMenuAbierto(false);
    };

    const cerrarMenu = () => {
        setMenuAbierto(false);
    };

    return (
        <section id="header">

            <Link
                to="/"
                onClick={scrollToTop}
                className="logo-link"
            >
                <img src={logo} alt="" />
            </Link>

            <button
                type="button"
                className={`menu-toggle${menuAbierto ? " abierto" : ""}`}
                onClick={() => setMenuAbierto((abierto) => !abierto)}
                aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuAbierto}
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={menuAbierto ? "abierto" : ""}>

                <li>
                    <Link
                        to="/"
                        onClick={scrollToTop}
                    >
                        Inicio
                    </Link>
                </li>


                <li>
                    <Link
                        to="/especialidades"
                        onClick={cerrarMenu}
                    >
                        Especialidades
                    </Link>
                </li>


                <li>
                    <Link
                        to="/contacto"
                        onClick={cerrarMenu}
                        className="contacto-button"
                    >
                        Contacto
                    </Link>
                </li>

            </ul>

        </section>
    );
};
