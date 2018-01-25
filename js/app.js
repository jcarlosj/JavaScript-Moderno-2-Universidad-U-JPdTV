/* Eventos para los elementos SELECT 'change' en JavaScript 
   Detecta el cambio de selección de un campo SELECT */
const servicios = document .querySelector( '#servicios' );          // Campo SELECT

/* Implementa el Evento 'input' en el input de búsqueda */
servicios .addEventListener( 'change', obtenerEvento );

/* Creamos una función que capture el evento */
function obtenerEvento( evento ) {
    //document .querySelector( '#encabezado' ) .innerText = servicios .value;
    console .log( servicios .value );
    console .log( `evento.type: ${ evento .type } ` );
}      

