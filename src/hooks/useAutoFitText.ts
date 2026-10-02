import { useLayoutEffect } from "react";

// Si el contenido de "targetSelectors" no entra dentro de "containerSelector"
// (porque la caja tiene una altura fija, como en PrimerInicio), los va achicando
// de a poco hasta que entren. Si ya entran, no toca nada.
// Se vuelve a calcular cada vez que cambia el tamaño de la ventana o el contenedor.
export const useAutoFitText = (
    containerSelector: string,
    targetSelectors: string
) => {
    useLayoutEffect(() => {
        const container = document.querySelector<HTMLElement>(containerSelector);
        if (!container) return;

        const targets = targetSelectors
            .split(",")
            .map((selector) => container.querySelector<HTMLElement>(selector))
            .filter((el): el is HTMLElement => el !== null);

        if (targets.length === 0) return;

        const cabeOk = () =>
            container.scrollHeight <= container.clientHeight + 1 &&
            container.scrollWidth <= container.clientWidth + 1 &&
            // chequeo extra por elemento: cuando un hijo fuerza una sola línea
            // (white-space: nowrap, como el botón) puede desbordar de costado
            // sin que ese desborde se note en el contenedor (queda tapado por
            // la caja de al lado en vez de agrandar el scrollWidth del padre).
            targets.every((el) => el.scrollWidth <= el.clientWidth + 1);

        const aplicar = (escala: number, bases: number[]) => {
            targets.forEach((el, i) => {
                el.style.setProperty("font-size", `${bases[i] * escala}px`);
            });
        };

        const ajustar = () => {
            targets.forEach((el) => el.style.removeProperty("font-size"));
            const bases = targets.map((el) => parseFloat(getComputedStyle(el).fontSize));

            aplicar(1, bases);
            if (cabeOk()) return;

            let min = 0.55;
            let max = 1;
            for (let i = 0; i < 16; i++) {
                const medio = (min + max) / 2;
                aplicar(medio, bases);
                if (cabeOk()) {
                    min = medio;
                } else {
                    max = medio;
                }
            }
            // un pequeño margen extra para no quedar justo al límite
            aplicar(min * 0.985, bases);
        };

        ajustar();

        // Las tipografías propias (Archivo, Archivo Narrow) tardan un toque en
        // cargar. La primera medición puede hacerse todavía con la tipografía
        // de reemplazo del sistema (más ancha), así que recalculamos de nuevo
        // apenas terminan de cargar, para no quedarnos achicados de más.
        document.fonts.ready.then(ajustar);

        const observer = new ResizeObserver(ajustar);
        observer.observe(container);
        window.addEventListener("resize", ajustar);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", ajustar);
        };
    }, [containerSelector, targetSelectors]);
};
