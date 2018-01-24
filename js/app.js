/* Agregar/Eliminar clases de los elementos con JavaScript */
const primerEnlace = document .querySelector( '.enlace' );          // Primer enlace menú principal

let atributo;

console .group( 'Menú principal ' );
    console .log( 'Primer enlace ', primerEnlace );

    console .group( 'ID y Clases iniciales del elemento ' );
        
        /* Obtenemos ID y Clases del elemento */
        atributo = primerEnlace .id;           // Obtiene el id del elemento
        console .log( 'id ', atributo );
        atributo = primerEnlace .className;    // Obtiene la clase del elemento
        console .log( 'className ', atributo );
        atributo = primerEnlace .classList;    // Obtiene un 'DOMTokenList' del elemento
        console .log( 'classList ', atributo );

    console .groupEnd();

    console .group( 'Se agregó la clase nueva "nueva-clase" al elemento ' );
        
        atributo = primerEnlace .classList .add( 'nueva-clase-1' );   // Agrega la clase 'nueva-clase'

        /* Obtenemos Clases del elemento */
        atributo = primerEnlace .className;    // Obtiene la clase del elemento
        console .log( 'className ', atributo );
        atributo = primerEnlace .classList;    // Obtiene un 'DOMTokenList' del elemento
        console .log( 'classList ', atributo );

    console .groupEnd();

    console .group( 'Se elimina la clase "enlace" al elemento ' );
        
    atributo = primerEnlace .classList .remove( 'enlace' );   // Elimina la clase 'enlace' 

    /* Obtenemos Clases del elemento */
    atributo = primerEnlace .className;    // Obtiene la clase del elemento
    console .log( 'className ', atributo );
    atributo = primerEnlace .classList;    // Obtiene un 'DOMTokenList' del elemento
    console .log( 'classList ', atributo );

console .groupEnd();

console .groupEnd();