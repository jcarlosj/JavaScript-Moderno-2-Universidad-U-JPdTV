/* Eventos para los elementos INPUT 'copy' en JavaScript 
   Cuando copiamos contenido que se encuentra dentro del input ya sea 
   a través del shortcut (Ctrl+C) o a través del menú contextual */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'copy' en el input de búsqueda */
buscador .addEventListener( 'copy', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    //document .querySelector( '#encabezado' ) .innerText = buscador .value;
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

