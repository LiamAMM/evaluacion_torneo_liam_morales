/* ==========================================================================
   RECURSO PARA ESTUDIANTES - EVALUACIÓN JAVASCRIPT
   Dashboard de Torneos Gamer
   ========================================================================== */

// Actividad 3. Declarar el arreglo (10 puntos)
// Declarar un arreglo global vacío llamado torneos.
// Cada elemento deberá ser un objeto con las propiedades:
// nombre, categoria, participantes, valorInscripcion, email y recaudacion.
let torneos = [];
/**
 * Actividad 4. Registrar y validar un torneo (30 puntos)
 * 12. Crear la función registrarTorneo() sin parámetros.
 */
function registrarTorneo() {
    // 13. Obtener los valores de todos los campos con document.getElementById()
    let nombre = recuperaraTexto("txtNombreTorneo");
    let categoria = recuperaraTexto("txtCategoria");
    let participantes = recuperarInt("txtParticipantes");
    let valorInscripcion = recuperarFloat("txtValorInscripcion");
    let email = recuperaraTexto("txtEmail");

    // 14. Validar que el nombre tenga al menos 4 caracteres
    if (nombre.length < 4) {
        document.getElementById("msgNombreTorneo").textContent = "El nombre del torneo debe tener al menos 4 caracteres.";
        return;
    }

    // 15. Validar que se haya seleccionado una categoría
    if (categoria.length === 0) {
        document.getElementById("msgCategoria").textContent = "Debe seleccionar una categoría.";
        return;
    }

    // 16. Validar que los participantes sean un entero entre 1 y 100
    if (participantes < 1) {
        document.getElementById("msgParticipantes").textContent = "El número de participantes debe estar entre 1 y 100.";
        return;
    } else if (participantes > 100) {
        document.getElementById("msgParticipantes").textContent = "El número de participantes debe estar entre 1 y 100.";
        return;
    }

    // 17. Validar que el valor de inscripción sea mayor que 0
    if (valorInscripcion <= 0) {
        document.getElementById("msgValorInscripcion").textContent = "El valor de inscripción debe ser mayor que 0.";
        return;
    }

    // 18. Validar que el email no esté vacío. No se requiere validación avanzada de formato.
    if (email.length === 0) {
        document.getElementById("msgEmail").textContent = "El email del organizador no puede estar vacío.";
        return;
    }

    // Si alguna validación falla, mostrar mensajes de error y detener la ejecución

    // 19. Calcular la recaudación estimada con: participantes × valor de inscripción
    let recaudacion = participantes * valorInscripcion;

    // 20. Crear el objeto nuevoTorneo con los datos obtenidos
    let nuevoTorneo = {
        nombre: nombre,
        categoria: categoria,
        participantes: participantes,
        valorInscripcion: valorInscripcion,
        email: email,
        recaudacion: recaudacion
    };

    // 21. Agregar el objeto al arreglo con push()
    torneos.push(nuevoTorneo);

    // 22. Llamar a mostrarTorneos() y limpiarFormulario()
    mostrarTorneos();
    limpiarFormulario();

    // 23. Mostrar un mensaje de registro exitoso
    alert("Torneo registrado exitosamente.");
}

/**
 * Actividad 5. Mostrar los torneos (15 puntos)
 * 24. Crear la función mostrarTorneos() sin parámetros.
 */
