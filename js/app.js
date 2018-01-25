/* Delegation: es una forma en la que se puede esperar un click en cualquier lugar
               comprobar que elemento esta haciendo click. 
               
    1. Representa otra forma diferente de evitar el Event Bubbling (Burbuja de Eventos)
    2. Es una alternativa para no crear un Event Listener por cada elemento al
       que se desea agregar un evento */

/* Escuchar todos los eventos ocurridos en el cuerpo del documento */
document .body .addEventListener( 'click', clickEnElemento );

function clickEnElemento( evento ) {
    evento .preventDefault();       // Evitar cualquier cosa que haga el navegador con el evento por defecto

    console .group( 'Click!' );     
        console .log( 'evento .target .classList', evento .target .classList );     // Obtiene 'DOMTokenList' de las clases del elemento
    console .groupEnd();     

    /* Eliminar Curso */
    if( evento .target .classList .contains( 'borrar-curso' ) ) {               // 'contains: se va a encargar de verificar que algunas de las clases que se le indican esten contenidas'
        console .group( 'Contiene la clase "borrar-curso"?', 'Sí!' );
            console .log( 'elemento: ', evento .target .parentElement );        // Elemento Padre de la clase 'borrar-curso'                       
            evento .target .parentElement .parentElement .remove();             // Eliminar elemento 'tr' ( Padre del padre de la clase )
        console .groupEnd();
    }
    else {
        console .group( 'Contiene la clase "borrar-curso"?', 'No!' );
            console .log( 'Intenta con otro elemento' );        
        console .groupEnd();
    }

    /* Agregar Curso */
    if( evento .target .classList .contains( 'agregar-carrito' ) ) {            // 'contains: se va a encargar de verificar que algunas de las clases que se le indican esten contenidas'
        console .log( 'Curso Agregado' );
    }

}
