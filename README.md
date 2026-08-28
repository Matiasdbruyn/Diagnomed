# Diagnomed

Sitio web oficial de **Diagnóstico Médico De Alta Complejidad (Diagnomed)**, un centro médico ubicado en Ramos Mejía, zona oeste del Gran Buenos Aires. La página presenta al centro, sus especialidades y estudios, permite conocer cómo llegar y contactarse, y deriva la reserva de turnos a la plataforma de turnos online del centro.

## Contenido del sitio

- **Inicio** — presentación del centro, acceso directo a "Solicitá tu turno", ubicación y cómo llegar, un carrusel de fotos del lugar, un bloque de jornadas médicas (chequeos y controles agrupados por jornada) y comentarios/testimonios de pacientes.
- **Especialidades** — listado completo de especialidades médicas y estudios que se realizan en el centro (Clínica Médica, Ginecología, Traumatología, Cardiología, Pediatría, Nefrología, Kinesiología, ecografías, radiografías, doppler, presurometría, entre otras), cada una con su descripción y foto en una ficha ampliable.
- **Contacto** — formulario de consulta (deriva a WhatsApp con los datos precargados), acceso al canal de WhatsApp del centro y preguntas frecuentes sobre coberturas, turnos y preparación para estudios.

El pie de página reúne horarios de atención, teléfonos, ubicación y redes sociales.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** como bundler y servidor de desarrollo
- **React Router** para la navegación entre páginas (Inicio / Especialidades / Contacto)
- **React Compiler** habilitado para optimizar renders automáticamente
- **ESLint** para mantener el código consistente
- CSS plano (sin frameworks ni preprocesadores), organizado por componente/página
- Despliegue estático en **GitHub Pages** mediante el paquete `gh-pages`

## Diseño y responsive

El sitio está pensado para verse bien desde celulares chicos (320px de ancho) hasta pantallas de escritorio grandes, sin saltos bruscos entre tamaños: la tipografía, los espaciados y varios elementos (como el logo del header) escalan de forma fluida con el ancho de pantalla en lugar de usar únicamente un puñado de resoluciones fijas. Por debajo de los 900px de ancho el menú de navegación pasa a formato hamburguesa.

Los colores de marca son el verde `#008E80` (identidad general y especialidades) y el azul `#2E579E` (estudios), sobre las tipografías **DM Sans**, **Archivo** y **Archivo Narrow** (Google Fonts).

Las imágenes del sitio están optimizadas (comprimidas y redimensionadas) para que las páginas carguen rápido sin perder calidad visual.

## Cómo ejecutar el proyecto

### Requisitos

- [Node.js](https://nodejs.org/) 20 o superior (recomendado 22+)
- npm (se instala junto con Node.js)

### 1. Instalar las dependencias

Desde la carpeta del proyecto:

```bash
npm install
```

### 2. Levantar el modo desarrollo

```bash
npm run dev
```

Esto inicia un servidor local (Vite muestra la URL en la terminal, normalmente `http://localhost:5173/Diagnomed/`) y recarga la página automáticamente cada vez que se guarda un cambio en el código.

### 3. Generar la build de producción

```bash
npm run build
```

Genera la versión optimizada del sitio en la carpeta `dist/`.

### 4. Previsualizar la build de producción

```bash
npm run preview
```

Sirve localmente el contenido de `dist/` tal como quedaría publicado, útil para verificar la build antes de desplegar.

### 5. Publicar en GitHub Pages

```bash
npm run deploy
```

Ejecuta la build y publica el contenido de `dist/` en la rama `gh-pages` del repositorio, que es la que sirve el sitio en línea.

## Estructura del proyecto

```
src/
├── assets/            Imágenes, logos e íconos
├── header/             Encabezado y menú de navegación
├── footer/             Pie de página
├── pages/
│   ├── inicio/         Página de inicio (hero, carrusel, jornadas, mapa, comentarios)
│   ├── especialidades/ Página de especialidades y estudios
│   └── contacto/       Página de contacto (formulario, WhatsApp, FAQ)
├── App.tsx             Definición de rutas
└── main.tsx            Punto de entrada de la aplicación
```
