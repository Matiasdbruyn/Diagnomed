import Comentarios from "./comentarios/Comentarios"
import { Mapa } from "./mapa/Mapa"
import { PrimerInicio } from "./primerInicio/PrimerInicio"
import { SegundoInicio } from "./segundoInicio/SegundoInicio"
import { TercerInicio } from "./tercerInicio/TercerInicio"


export const Index = () => {
    return (
        <div>
            <PrimerInicio />
            <SegundoInicio />
            <TercerInicio />
            <Comentarios />
            <Mapa />
        </div>
    )
}