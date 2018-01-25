/* Eventos para los elementos INPUT 'cut' en JavaScript 
   Cuando cortamos contenido que se encuentra dentro del input ya sea 
   a través del shortcut (Ctrl+X) o a través del menú contextual */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'cut' en el input de búsqueda */
buscador .addEventListener( 'cut', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    //document .querySelector( '#encabezado' ) .innerText = buscador .value;
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

