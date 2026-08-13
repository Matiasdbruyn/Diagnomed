import "./Header.css";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";

export const Header = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    const scrollToFooter = () => {
        const footer = document.getElementById("footer");

        if (footer) {
            footer.scrollIntoView({
                behavior: "smooth"
            });
        }
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


            <ul>

                <li>
                    <Link
                        to="/"
                        onClick={scrollToTop}
                    >
                        Inicio
                    </Link>
                </li>


                <li>
                    <Link to="/especialidades">
                        Especialidades
                    </Link>
                </li>


                <li>
                    <button
                        onClick={scrollToFooter}
                        className="contacto-button"
                    >
                        Contacto
                    </button>
                </li>

            </ul>

        </section>
    );
};