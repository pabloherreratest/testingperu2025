# Test Automatizado de Pantalla de Registro de Correo en Spotify

Este proyecto contiene un snippet en JavaScript creado para automatizar pruebas funcionales sobre la pantalla de registro de correo electrónico en [Spotify](https://www.spotify.com). El objetivo es validar distintos escenarios directamente desde el navegador, usando Chrome DevTools, sin necesidad de frameworks externos.

👨‍💻 **Autor:** Pablo Herrera  
🎓 Presentado en: Testing Perú 2025


## 🧪 ¿Qué se prueba?

Se automatiza el llenado del campo "Correo electrónico" en el formulario de registro de Spotify, y se valida el comportamiento del botón "Siguiente" para diferentes entradas. El script evalúa si se muestra un mensaje de error o si el flujo continúa exitosamente.

## 🚀 ¿Cómo ejecutar el snippet?

1. Desde Google Chorme abre [https://open.spotify.com/intl-es/](https://open.spotify.com/intl-es/)
2. Haz clic en el botón **"Regístrate"**.
3. Presiona `F12` o `Ctrl + Shift + I` para abrir **Chrome DevTools**.
4. Ve a la pestaña **"Sources"** (Fuentes).
5. En el panel izquierdo, busca la carpeta **"Snippets"**.
6. Haz clic derecho en *Snippets* → **New Snippet**.
7. Ponle un nombre, por ejemplo: `pantallaCorreo.js`.
8. Copia y pega el contenido del archivo `pantallaCorreo.js` en el nuevo snippet.
9. Haz clic derecho sobre el nombre del snippet y elige **"Run"** para ejecutarlo.

## ✅ Resultado

En la **Consola de DevTools**, verás los resultados de los casos de prueba ejecutados, indicando si cada uno pasó o falló.

## 🧠 ¿Cómo funciona?

- Se simulan eventos reales de usuario (como `.focus()` y eventos `input`) para que React detecte los cambios correctamente.
- Se usa un `setTimeout` para esperar brevemente después de cada acción y asegurar que los elementos estén visibles antes de validar.
- Los mensajes de validación son extraídos del DOM y evaluados para determinar el resultado.

## 🔧 ¿Cómo agregar o modificar casos de prueba?

Dentro de la función `suiteCasosCorreo()`, puedes agregar nuevos escenarios como este:

```javascript
await validarPantallaCorreo("TC04 - Correo inválido", "correo.sin.formato", "Fail")
