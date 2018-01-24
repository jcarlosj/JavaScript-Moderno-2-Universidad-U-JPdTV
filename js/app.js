/* Eventos 'keydown' en JavaScript 
   Registra cada vez que presionamos una tecla */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'keydown' en el input de búsqueda */
buscador .addEventListener( 'keydown', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

