/* Creando elementos con JavaScript */

// Crea dos elementos 'a'
const enlace1 = document .createElement( 'a' ),      
      enlace2 = document .createElement( 'a' );          
      
/* Agrega propiedades al elemento para el 'enlace1' */
enlace1 .id = 'primer-nuevo';                        // Agrega un id al elemento a
enlace1 .className = 'enlace';                       // Agrega una clase al elemento a       
enlace1 .setAttribute( 'href', '#' );                // Agrega un href al elemento a
enlace1 .textContent = 'Primer enlace nuevo';        // Agrega texto al elemento a  ( FORMA 1 )

/* Agrega propiedades al elemento para el 'enlace2' */
enlace2 .id = 'segundo-nuevo';                       // Agrega un id al elemento a
enlace2 .className = 'enlace';                       // Agrega una clase al elemento a       
enlace2 .setAttribute( 'href', '#' );                // Agrega un href al elemento a
enlace2 .appendChild( document .createTextNode( 'Segundo enlace nuevo' ) );     // Agrega texto al elemento a ( FORMA 2 )

console .log( 'Primer enlace nuevo: ', enlace1 );
console .log( 'Segundo enlace nuevo: ', enlace2 );

/* Agregamos los enlaces como elemento hijo en el DOM */
document .querySelector( '#secundaria' ) .appendChild( enlace1 );
document .querySelector( '#secundaria' ) .appendChild( enlace2 );