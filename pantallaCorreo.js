/**
 * Creado por Pablo Herrera para Testing Peru 2025 
 * Automatizar Test Pantalla Registro Correo
 */

// Eventos

function escribirCorreo(correo) {
    let inputCorreo = document.querySelector('#username');
    inputCorreo?.focus();
    llenarTexto(inputCorreo, correo)
}

async function clicSiguiente() {
    let btnSiguiente = document.querySelector('[data-testid="submit"]');
    btnSiguiente.click()

    // Hace una pausa para que se muestre la validacion de pantalla (medio segundo)
    await new Promise(r => setTimeout(r, 500));

    let mensajeValidacion = document.querySelector(".Text-sc-g5kv67-0.eZMwYi");
    let mensajeValidacionExistente = document.querySelector(".Message-sc-15vkh7g-0.kGDZJw")
    let vRespuesta = "Ok"
    let vDescripcion = "Exitoso"
    if (mensajeValidacion !== null) {
        vRespuesta = "Fail"
        vDescripcion = mensajeValidacion.innerText
    }
    if (mensajeValidacionExistente !== null) {
        vRespuesta = "Fail"
        vDescripcion = mensajeValidacionExistente.innerText
    }

    const respuesta = { respuesta: vRespuesta, descripcion: vDescripcion }
    //console.log(respuesta)
    return respuesta

}

// Test que valida la pantalla de correo
async function validarPantallaCorreo(caso, correo, esperado) {
    // Paso 1
    escribirCorreo(correo)
    // Paso 2
    let obtenido = await clicSiguiente()

    await new Promise(r => setTimeout(r, 500));
    if (obtenido.respuesta === esperado)
        console.log("Caso: " + caso + ": Exitoso")
    else
        console.log("Caso: " + caso + ": Fallido")

}

// Funcion auxiliar para llenar texto
function llenarTexto(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", {
        target: element,
        bubbles: true
    });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
}

// Crear el Suite de Pruebas
async function suiteCasosCorreo() {
    // Caso de prueba 1
    await validarPantallaCorreo("TC01 - Correo sin arroba", "pablo.herrera.007", "Fail")
    // Caso de prueba 2
    await validarPantallaCorreo("TC02 - ya existe", "pablo.herrera.ec@gmail.com", "Fail")
    // Caso de prueba 3
    await validarPantallaCorreo("TC03 - Nuevo correo", "pablo.herrera.ec@testingperu.com", "Ok")
    // Puedes agregar más casos

}

// Ejecutar la suite de pruebas
suiteCasosCorreo()