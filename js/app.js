/* Eventos para los elementos INPUT 'focus' en JavaScript 
   Registra cada que damos click dentro del input y nos posicionamos dentro del input
   se dice entonces que tenemos el foco */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'focus' en el input de búsqueda */
buscador .addEventListener( 'focus', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    //document .querySelector( '#encabezado' ) .innerText = buscador .value;
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

