# Invitación XV Años · Nicole Jaquelin

Página web de invitación. Lista para publicar en **GitHub Pages**.

## Cómo publicarla en GitHub (paso a paso)

1. Entra a https://github.com y crea un repositorio nuevo (botón **New**).
   Ponle un nombre, por ejemplo: `invitacion-nicole`. Déjalo **Public**.
2. En el repositorio, clic en **Add file → Upload files**.
3. Arrastra **TODO el contenido de esta carpeta** (el archivo `index.html`,
   `styles.css`, `app.jsx`, `ornaments.jsx` y la carpeta `assets/`).
   Espera a que suban y clic en **Commit changes**.
4. Ve a **Settings → Pages**.
5. En *Branch* elige `main` y carpeta `/ (root)`. Clic en **Save**.
6. Espera 1–2 minutos. Aparecerá el link:
   `https://TU-USUARIO.github.io/invitacion-nicole/`
7. ¡Ese es el link que compartes por WhatsApp!

## Personalizar el saludo por invitado

Agrega al final del link `?invitado=Nombre+Apellido`. Ejemplos:

- `.../?invitado=Maria+Lopez`
- `.../?invitado=Familia+Hernandez&lugares=4`  ← define los lugares reservados

## Pendientes para completar

- **Padrinos:** en `app.jsx` cambia `[Nombre padrino] & [Nombre madrina]`.
- **QR de fotos:** cuando tengas el álbum, se reemplaza el placeholder.
- **Música:** coloca tu canción en `assets/music.mp3` (opcional).
- **Fotos:** las imágenes de la galería y de los lugares se arrastran
  directamente sobre cada espacio desde el navegador.

## Estructura

```
index.html        ← página principal (GitHub Pages la abre sola)
styles.css        ← estilos
app.jsx           ← contenido y secciones
ornaments.jsx     ← adornos dorados e íconos
assets/
  nicole.jpg      ← foto de portada
  seal.png        ← sello NJ
  image-slot.js   ← componente para arrastrar fotos
```
