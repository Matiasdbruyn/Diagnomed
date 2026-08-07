import { useEffect, useRef, useState } from "react"
import "./TercerInicio.css"
import tilde from "../../../assets/tilde.png"

export const TercerInicio = () => {

    const jornadaRef = useRef<HTMLDivElement>(null)
    const [enVista, setEnVista] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setEnVista(entry.isIntersecting),
            { threshold: 0.5 }
        )

        if (jornadaRef.current) observer.observe(jornadaRef.current)

        return () => {
            if (jornadaRef.current) observer.unobserve(jornadaRef.current)
        }
    }, [])

    return (
        <div id="jornada" ref={jornadaRef}
            style={{
                backgroundColor: enVista ? "pink" : "transparent",
                transition: "background-color 1s ease"
            }}>
            <div>
                <h1>Jornadas Ginecológicas</h1>
                <h2>Una jornada mensual junto a nuestra Médica Ginecóloga, <br /> donde podés acceder a los siguientes estudios:</h2>
                <ul>
                    <li><img src={tilde} alt="" />Consulta ginecológica</li>
                    <li><img src={tilde} alt="" />Colposcopía y Papanicolau</li>
                    <li><img src={tilde} alt="" />Mamografía</li>
                    <li><img src={tilde} alt="" />Ecografía mamaria y axilar</li>
                    <li><img src={tilde} alt="" />Densitometría ósea (si la indica el profesional)</li>
                </ul>
                <h2 className="aviso">chau</h2>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.3228651244158!2d-58.55875455356625!3d-34.639978767249026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7e312c06ca1%3A0xe82523fa4d781bc7!2sDiagn%C3%B3stico%20M%C3%A9dico%20De%20Alta%20Complejidad!5e0!3m2!1ses!2sar!4v1785879398791!5m2!1ses!2sar" width="600" height="450" ></iframe>
            </div>
        </div>
    )
}
