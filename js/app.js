/* Seleccionando múltiples elementos de JavaScript */
const enlaces = document .querySelectorAll( '#principal a.enlace:nth-child( odd )' );       // Seleccionamos los enlaces impares del menú principal del footer

enlaces .forEach( function( impares ) {
    impares .style .background = '#1EAEDB';
    impares .style .color = 'white';
    impares .style .fontWeight = 'bold';
});

console .log( enlaces );