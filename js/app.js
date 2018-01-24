/* Event Listener Click en JavaScript
   Estos se pueden aplicar a cualquier tipo de elemento */

// FORMA 1: 
// Seleccionamos el buscador y agregamos el Evento Click 
document .querySelector( '#submit-buscador' ) .addEventListener( 'click', function( event ) {
    let elemento;
    
    event .preventDefault();        // Estamos previniendo la acción por default del navegador
                                    // Sirve para hacer cosas antes de lanzar la acción del formulario
                                    // Por ejemplo: hacer Validaciones de los campos entre muchas otras cosas.
                                
    console .group( 'Búscador' );
        elemento = event;
        console .log( 'event ', elemento );
        elemento = event .target;
        console .log( 'event.target ', elemento );
        elemento = event .target .id;
        console .log( 'event.target.id ', elemento );
        elemento = event .target .className;
        console .log( 'event.target.className ', elemento );
        elemento = event .target .innerText;
        console .log( 'event.target.innerText ', elemento );
    console .groupEnd();

    alert( 'Buscando cursos... ');
});

// FORMA 2: 

// Creamos la función aparte
function ejecutarBoton( event ) {
    let elemento;

    event .preventDefault();

    console .group( 'Botón' );
        elemento = event;
        console .log( 'event ', elemento );
        elemento = event .target;
        console .log( 'event.target ', elemento );
        elemento = event .target .id;
        console .log( 'event.target.id ', elemento );
        elemento = event .target .className;
        console .log( 'event.target.className ', elemento );
        elemento = event .target .innerText;
        console .log( 'event.target.innerText ', elemento );
    console .groupEnd();
    
    alert( 'Agregando al carrito... ');
}

// Seleccionamos el botón en nuestro caso
const botonAgregarCarrito = document .querySelector( '.agregar-carrito' );      // Selecciono el primer botón de 'Agregar al carrito'

// Agregamos el Event Listener Click al Botón y asignamos la función
botonAgregarCarrito .addEventListener( 'click', ejecutarBoton );

/* Event Listener en el Titulo de los cursos */
document .querySelector( '#encabezado' ) .addEventListener( 'click', function( e ) {
    console .log( 'Antes -> ', e .target .innerText );
    console .log( 'Ahora -> ', e .target .innerText = 'Nuevos cursos para 2018' );
});
