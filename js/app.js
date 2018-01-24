/* Agregar/Eliminar atributo de un elemento con JavaScript */
const primerEnlace = document .querySelector( '.enlace' );          // Primer enlace menú principal

let atributo;

console .group( 'Menú principal ' );
    console .log( 'Primer enlace ', primerEnlace );

    console .group( 'Atributo "href" inicial del elemento ' );
        
        /* Obtiene atributo 'href' del elemento */
        atributo = primerEnlace .getAttribute( 'href' );    
        console .log( 'Al aplicar "getAttribute" ', atributo );

    console .groupEnd();

    console .group( 'Modificar el atributo "href" del elemento ' );
        
        /* Obtiene atributo 'href' del elemento */
        primerEnlace .setAttribute( 'href', 'http://twitter.com' );    
        atributo = primerEnlace;    // Hay que hacerlo para que funcione
        console .log( 'Luego de aplicar el "setAttribute" ', atributo );

    console .groupEnd();

    console .group( 'Crear atributos personalizados al elemento (HTML5) ' );
        
        /* Obtiene atributo 'data-id' del elemento */
        primerEnlace .setAttribute( 'data-id', 20 );    
        atributo = primerEnlace;    // Hay que hacerlo para que funcione
        console .log( 'Luego de aplicar el "setAttribute" ', atributo );

    console .groupEnd();

    console .group( 'Verificar que un atributo existe en un elemento ' );
        
        /* Verifica atributo 'data-id' del elemento */
        atributo = primerEnlace .hasAttribute( 'data-id' );    
        console .log( 'Luego de aplicar el "hasAttribute" ', atributo );        // true
        atributo = primerEnlace .hasAttribute( 'otro-atributo' );       
        console .log( 'Luego de aplicar el "hasAttribute" ', atributo );        // false

    console .groupEnd();

    console .group( 'Eliminar atributos del elemento (HTML5) ' );
        
        /* Elimina atributo 'data-id' del elemento */
        primerEnlace .removeAttribute( 'data-id' );    
        atributo = primerEnlace;    // Hay que hacerlo para que funcione
        console .log( 'Elimina data-id "removeAttribute" ', atributo );

        /* Elimina atributo 'id' del elemento */
        primerEnlace .removeAttribute( 'id' );    
        atributo = primerEnlace;    // Hay que hacerlo para que funcione
        console .log( 'Elimina id "removeAttribute" ', atributo );

    console .groupEnd();

console .groupEnd();