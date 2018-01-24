/* Reemplazando elementos con JavaScript */
const nuevoEncabezado = document .createElement( 'h2' );    // Crea el elemento 'h2'

/* Agrega propiedades al elemento */
nuevoEncabezado .id = 'encabezado';                                                                // Agrega un id al elemento 'h2'
nuevoEncabezado .appendChild( document .createTextNode( 'Los mejores cursos del 2018' ) );         // Agrega el texto al elemento 'h2'

console .log( 'Nuevo encabezado: ', nuevoEncabezado );

/* Seleccionamos el nodo (o elemento) que vamos a cambiar */
const encabezadoAnterior = document .querySelector( '#encabezado' );
console .log( 'Encabezado anterior ', encabezadoAnterior );

/* Nos posicionamos en el nodo padre */
const elementoPadre = encabezadoAnterior .parentElement;                // 'lista-cursos'
console .log( 'Padre de "encabezado anterior" ', elementoPadre );

/* Reemplazamos el encabezado */
elementoPadre .replaceChild( nuevoEncabezado, encabezadoAnterior );

// Reemplaza el elemento anterior por el nuevo que hemos creado
