/* Eliminar elementos con JavaScript */
const enlaces = document .querySelectorAll( '.enlace' );    // Enlaces del footer
      navegacion = document .querySelector( '#principal' ); // '#principal' ---> Toda la estructura que referencia este ID   

console .log( enlaces );

/* Eliminar elemento (desde el mismo elemento) */
enlaces[ 0 ] .remove();                     // 'Para Tu Negocio' ---> Se elimina a si mismo 

/* Eliminar elemento desde su elemento Padre */
navegacion .removeChild( enlaces[ 2 ] );    // 'Aplicaciones Móviles'
