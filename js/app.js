/* EventListener (Otros eventos con el mouse) en JavaScript */
const encabezado = document .querySelector( '#encabezado' ),        // Titulo de cursos
      enlaces    = document .querySelectorAll( '.enlace' ),         // Todos los enlaces del Footer
      boton      = document .querySelector( '#vaciar-carrito' ),    // Botón 'Vaciar Carrito'
      buscador   = document .querySelector( '#buscador' ),          // Campo del buscador
      divCarritoVacio = document .querySelector( '#carrito .vacio' );
      iconoCarrito = document .querySelector( '#img-carrito' );

console .group( 'Botón Vaciar Carrito' );      
    /* Agregamos el evento 'dblclick' al botón (Doble Click) */
    boton .addEventListener( 'dblclick', obtenerEvento );
console .groupEnd();

console .group( 'Enlace "Para Tu Negocio"' );
    /* Agregamos el evento 'doble' al primer enlace */
    console .log( enlaces[ 0 ] );
    enlaces[ 0 ] .addEventListener( 'click', obtenerEvento );
console .groupEnd();

console .group( 'Botón Vaciar Carrito' );
    /* Agregamos el evento 'mouseenter' al Botón Vaciar Carrito */
    buscador .addEventListener( 'mouseenter', obtenerEvento );      // Cuando el mouse entra al elemento
    /* Agregamos el evento 'mouseleave' al Botón Vaciar Carrito */
    buscador .addEventListener( 'mouseleave', obtenerEvento );      // Cuando el mouse sale del elemento
console .groupEnd();

console .group( 'Carrito Vacio' );
    /* Agregamos el evento 'mouseover' al Div Carrito Vacio. Similar a 'mouseenter' */
    divCarritoVacio .addEventListener( 'mouseover', obtenerEvento );        // Cuando se pone el mouse sobre el elemento
    /* Agregamos el evento 'mouseout' al Div Carrito Vacio. Similar a 'mouseleave' */
    divCarritoVacio .addEventListener( 'mouseout', obtenerEvento );        // Cuando se saca el mouse sobre el elemento
console .groupEnd();

console .group( 'Icono del Carrito' );
    /* Agregamos el evento 'mousedown' al Icono del Carrito. (Cuando presiono el botón) */
    iconoCarrito .addEventListener( 'mousedown', obtenerEvento );        // Cuando se presiona el botón del mouse sobre el elemento
    /* Agregamos el evento 'mouseup' al Icono del Carrito. (Cuando suelto el botón) */
    iconoCarrito .addEventListener( 'mouseup', obtenerEvento );        // Cuando se suelta el botón del mouse sobre el elemento
console .groupEnd();

console .group( 'Encabezado "Cursos En Línea"' );
    /* Agregamos el evento 'mousemove' al Encabezado. (Todo el movimiento dentro del elemento) */
    encabezado .addEventListener( 'mousemove', obtenerEvento );        // Todo el movimiento del mouse dentro del elemento
console .groupEnd();

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    console .log( `evento.type: ${ evento .type } ` );
}      

