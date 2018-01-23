/* Seleccionando múltiples elementos de JavaScript */
const enlaces = document .getElementsByClassName( 'enlace' );           // Solo el nombre de la clase 'enlace'
let enlace, enlacesArr; 

/* Obtenemos un elemento de la colección de elementos*/ 
/* FORMA 1 */ 
enlace = enlaces[ 4 ] ;  
console .log( 'enlaces[4] ', enlace .textContent );             // Temas
enlace .style .textTransform = 'uppercase';
enlace .style .fontWeight = 'bold';
enlace .style .textDecoration = 'underline';

console .log( enlaces );

/* Convierte una Colección a un Array */
enlacesArr = Array .from( enlaces );

/* Recorre el array, aplica nuevos estilos a cada enlace */
enlacesArr .forEach(element => {
    element .style .color = '#999999';
    element .style .fontSize = '18px';
});

/* FORMA 2 */
enlace = document .getElementsByClassName( 'enlace' )[ 4 ];     // Temas
console .log( 'document.getElementsByClassName("enlace")[4] ', enlace .textContent );
enlace .style .color = '#333333';
enlace .innerText = "FAQ's";                     // Cambia 'Temas' por  FAQ's


