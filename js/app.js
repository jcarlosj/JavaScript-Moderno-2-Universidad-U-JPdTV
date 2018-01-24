/* Traversing en JavaScript (entre nodos hermanos) */
const enlaces = document .querySelectorAll( '.enlace' );       

console .log( 'enlaces[ 3 ] ', enlaces[ 3 ] );                                                  // Elemento Actual 'Soporte'
console .log( 'enlaces[ 3 ] .previousSibling', enlaces[ 3 ] .previousSibling  );                // '#text' ---> Elemento Anterior (Salto de línea en el código)
console .log( 'enlaces[ 3 ] .previousElementSibling', enlaces[ 3 ] .previousElementSibling );   // Elemento Anterior (Omite Salto de línea en el código)
console .log( 'enlaces[ 3 ] .nextSibling', enlaces[ 3 ] .nextSibling  );                        // '#text' ---> Elemento Siguiente (Salto de línea en el código)
console .log( 'enlaces[ 3 ] .nextElementSibling', enlaces[ 3 ] .nextElementSibling );           // Elemento Siguiente (Omite Salto de línea en el código)


/* Avanzando entre nodos hermanos */
let enlaceActual;

console .group( 'Avance entre nodos hermanos (nextElementSibling)' );
    enlaceActual = enlaces[ 0 ];        
    console .log( enlaceActual .textContent );      // 'Para tu Negocio'

    enlaceActual = enlaceActual .nextElementSibling .nextElementSibling .nextElementSibling;
    console .log( enlaceActual .textContent );      // 'Soporte'

    enlaceActual = enlaceActual .nextElementSibling;
    console .log( enlaceActual .textContent );      // 'Temas'

console .groupEnd();

/* Retrocediendo entre nodos hermanos */
console .group( 'Retrocede entre nodos hermanos (previousElementSibling)' );
      
    console .log( enlaceActual .textContent );      // 'Temas'

    enlaceActual = enlaceActual .previousElementSibling;
    console .log( enlaceActual .textContent );      // 'Soporte'

    enlaceActual = enlaceActual .previousElementSibling .previousElementSibling;
    console .log( enlaceActual .textContent );      // 'Conviertete en instructor'
console .groupEnd();