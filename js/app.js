/* Eventos para los elementos INPUT 'keypress' en JavaScript 
   Registra cada vez que se presiona una tecla (Similar a 'keydown') */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'keypress' en el input de búsqueda */
buscador .addEventListener( 'keypress', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    document .querySelector( '#encabezado' ) .innerText = buscador .value;
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

