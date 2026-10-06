import Comentarios from "./comentarios/Comentarios"
import { Mapa } from "./mapa/Mapa"
import { PrimerInicio } from "./primerInicio/PrimerInicio"
import { SegundoInicio } from "./segundoInicio/SegundoInicio"
import { TercerInicio } from "./tercerInicio/TercerInicio"
import { DescuentoPami } from "./descuentoPami/DescuentoPami"
import { ComunidadReels } from "./comunidadReels/ComunidadReels"


export const Index = () => {
    return (
        <div>
            <PrimerInicio />
            <SegundoInicio />
            <TercerInicio />
            <DescuentoPami />
            <Comentarios />
            <Mapa />
            <ComunidadReels />
        </div>
    )
}