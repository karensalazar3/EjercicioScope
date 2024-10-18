/*EJERCICIOS JS KAREN SALAZAR
 1.1. Formulario de contacto - Local Storage
 Crear un formulario de contacto con los siguientes campos:Nombre, Correo,Mensaje*/
// Capturar el formulario
const form = document.getElementById('Formulario');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

    // Capturar los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear un objeto con los datos del formulario
    const usuario = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Mostrar el objeto en la consola
    console.log(usuario);

    // Guardar el objeto en Local Storage (solo un usuario)
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Mostrar el contenido de Local Storage en el DOM
    mostrarUsuarioGuardado();

    // Limpiar el formulario después de enviar
    form.reset();
});

// Función para mostrar el usuario guardado en el DOM
function mostrarUsuarioGuardado() {
    // Obtener el usuario guardado desde Local Storage
    const usuarioGuardado = localStorage.getItem('usuario');

    // Verificar si hay un usuario guardado
    if (usuarioGuardado) {
        // Parsear el usuario desde JSON
        const usuarioObj = JSON.parse(usuarioGuardado);

        // Crear un bloque de HTML para mostrar los datos del usuario
        const userInfo = `
            <h3>Usuario Guardado:</h3>
            <p><strong>Nombre:</strong> ${usuarioObj.nombre}</p>
            <p><strong>Correo Electrónico:</strong> ${usuarioObj.email}</p>
            <p><strong>Mensaje:</strong> ${usuarioObj.mensaje}</p>
        `;

        // Insertar el bloque HTML en el elemento correspondiente
        document.getElementById('localStorageContent').innerHTML = userInfo;
    }
}

// Llamar a la función al cargar la página para mostrar el usuario guardado previamente (si existe)
document.addEventListener('DOMContentLoaded', mostrarUsuarioGuardado);





