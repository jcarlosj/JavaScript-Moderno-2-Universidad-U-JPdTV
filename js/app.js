/* Clonar un elemento con JavaScript */
const primerEnlace = document .querySelector( '.enlace' );          // Primer enlace menú principal

let elementoClonado, elementoPadre;

console .group( 'Menú principal ' );
    console .log( 'Primer enlace ', primerEnlace );

    /* Clonamos un enlace */
    elementoClonado = primerEnlace .cloneNode( true );    // true: Los hijos del nodo deben ser copiados 
                                                          //       (en este caso 'true' por que hay que 
                                                          //       copiar el nodo del 'contenido' del enlace)
                                                          // false: Los hijos del nodo no deben ser copiados
    console .log( 'elementoClonado ', elementoClonado );
    
    /* Accedemos al elemento Padre */
    elementoPadre = primerEnlace .parentElement;
    console .log( 'elementoPadre ', elementoPadre );
    
    /* Agregamos 2 veces el elemento clonado */
    elementoPadre .appendChild( elementoClonado );      'Para Tu Negocio'

console .groupEnd();