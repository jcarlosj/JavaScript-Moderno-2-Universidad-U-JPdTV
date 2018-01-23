/* 1. Selecciona todas las imagenes del DOM 
   2. Convierte un 'HTMLCollection' en un 'Array'  */

let coleccionImagenes = document .images,               // Obtengo la colección de imagenes del DOM
    imagenesArr = Array .from( coleccionImagenes );     // Convierto la colección en un 'Array'    

console .log( 'Imagenes (Array)', imagenesArr );        // Array de elementos 'img' del DOM

/* Recorre cada uno de los elementos 'img' contenidos en el 'Array' */
imagenesArr .forEach( function( elemento ) {
    console .log( elemento );
});