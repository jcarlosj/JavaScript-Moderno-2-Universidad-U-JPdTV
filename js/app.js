/* Eventos para los elementos INPUT 'input' en JavaScript 
   Detecta todo el conjunto de eventos relacionadas con el
   input: keydown, keyup, keypress, cut, paste */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'input' en el input de búsqueda */
buscador .addEventListener( 'input', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    //document .querySelector( '#encabezado' ) .innerText = buscador .value;
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

