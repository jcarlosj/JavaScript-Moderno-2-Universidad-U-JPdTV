/* Seleccionando múltiples elementos de JavaScript */
const listaEnlaces = document .getElementsByTagName( 'a' );     // Selecciona todos los elementos con el tag 'a' (en este caso)     
let enlaces;

/* ---- RECORRE Y CAMBIA ESTILOS COMO COLECCIÓN ---- */
console .group( 'Colección de enlaces' );
    for( let i = 3; i <= 14; i++ ) {
        listaEnlaces[ i ] .style .background = '#F1F1F1';
        listaEnlaces[ i ] .style .border = '#C1C1C1';
        listaEnlaces[ i ] .innerText = 'AGREGAR';
    }
console .groupEnd();

/* Convertir Colección a 'Array' */
enlaces = Array .from( listaEnlaces );

/* ---- RECORRE Y CAMBIA ESTILOS COMO ARRAY ---- */
console .group( 'Array de enlaces' );
    enlaces .forEach( function( elemento ) {
        elemento .style .textTransform = 'uppercase';
        elemento .style .fontSize = '18px';
        elemento .style .color = 'green';
        console .log( 'enlace:', elemento .innerText );
    });
console .groupEnd();

console .log( 'listaEnlaces (Colección): ', listaEnlaces );
console .log( 'enlaces (Array): ', enlaces );
