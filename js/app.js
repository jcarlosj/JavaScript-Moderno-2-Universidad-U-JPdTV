/* Seleccionando múltiples elementos de JavaScript (Mezclando métodos de selección) */
const listaEnlaces = document .querySelector( '#principal' ) .getElementsByClassName( 'enlace' );           
let enlaces;

/* Convertir Colección a 'Array' */
enlaces = Array .from( listaEnlaces );

/* Recorre y cambia estilos de los elementos seleccionados */
enlaces .forEach( function( elemento ) {
    elemento .style .fontSize = '17px';
    elemento .style .textDecoration = 'underline';
    elemento .style .fontWeight = 'bold';
});

console .log( listaEnlaces );
