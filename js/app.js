/* Traversing en JavaScript (del Hijo al Padre) */
const enlaces = document .querySelectorAll( '.enlace' );       

console .log( 'enlaces[0] ', enlaces[ 0 ] );                                // Obtiene el enlace 
console .log( 'enlaces[0].parentNode ', enlaces[ 0 ] .parentNode );         // Obtiene el elemento padre del enlace
console .log( 'enlaces[0].parentElement ', enlaces[ 0 ] .parentElement );   // Obtiene el elemento padre del enlace (Forma recomendada)
console .log( 'enlaces[0].parentElement ', enlaces[ 0 ] .parentElement .parentNode );   // Obtiene el elemento padre del enlace
console .log( 'enlaces[0].parentElement ', enlaces[ 0 ] .parentElement .parentElement );   // Obtiene el elemento padre del elemento padre del enlace

/* NOTA: Se puede ir del Hijo al Padre cuanto lo permita la estructura del DOM */ 

/* Implementamos algo en la vista */
const cursos = document .querySelectorAll( '.card' );

console .log( 
    'cursos[ 0 ] .parentElement .style .border = "3px solid red" ', 
    cursos[ 0 ] .parentElement .style .border = '3px solid red'                                     // Enlace que rodea el Card      
);                      
console .log( 
    'cursos[ 0 ] .parentElement .parentElement.style .border = "3px solid blue"', 
    cursos[ 0 ] .parentElement .parentElement.style .border = '3px solid blue'                      // Primera Fila de Cards    
);   
console .log( 
    'cursos[ 0 ] .parentElement .parentElement .parentElement.style .border = "3px solid green"', 
    cursos[ 0 ] .parentElement .parentElement .parentElement.style .border = '3px solid green'      // Todos los Cards (includo el título) 
);         

/* Cambiar el titulo de los cursos */
console .log(
    'Cambia el título',
    cursos[ 0 ] .parentElement .parentElement .parentElement .children[ 0 ] .textContent = 'Courses Online'
);