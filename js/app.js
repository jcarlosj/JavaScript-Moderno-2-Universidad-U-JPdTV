/* Eventos para los elementos INPUT 'blur' en JavaScript 
   Opuesto al 'focus' Registra cada que damos click fuera del input y nos posicionamos fuera del input
   se dice entonces que perdimos el foco */
const buscador   = document .querySelector( '#buscador' );          // Campo del buscador

/* Implementa el Evento 'blur' en el input de búsqueda */
buscador .addEventListener( 'blur', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    //document .querySelector( '#encabezado' ) .innerText = buscador .value;
    console .log( buscador .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

