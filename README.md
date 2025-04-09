# REVEALURL
REVEALURL es una API desarrollada en Node.js con TypeScript que permite resolver una URL (siguiendo redirecciones) y tomar una captura de pantalla de la página final, utilizando Puppeteer.

## ¿Cómo funciona?

Cuando el usuario envía una URL, el sistema:
1. Sigue automáticamente cualquier redirección (como los acortadores o links intermedios).
2. Carga completamente la página final.
3. Toma una captura de pantalla y la guarda en una carpeta local (`screenshots/`).
4. Devuelve la URL final junto con la ruta de la imagen.
