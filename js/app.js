/* Local Storage y Session Storage 
   Local Storage: Permite agregar cierta información en el navegador */

/* ---- LOCAL STORAGE ---- */

// Agregar al Local Storage (Se borra todo desde la herramienta de desarrollo del navegador o si decide limpiar todo el cache de la computadora)
localStorage .setItem( 'nombre', 'Juan' );              // Asigna un valor al Local Storage
localStorage .setItem( 'apellido', 'Jiménez' );         // Asigna un valor al Local Storage

let nombre = localStorage .getItem( 'nombre' ),         // Obtiene un valor del LocalStorage
      apellido = localStorage .getItem( 'apellido' );   // Obtiene un valor del LocalStorage

console .group( 'LocalStorage' );
    console .log( 'LocalStorage: ', localStorage );
    console .log( `${ nombre } ${ apellido }`)
console .groupEnd();

// Eliminar del Local Storage
localStorage .removeItem( 'apellido' );                 // Obtiene elimina un valor del LocalStorage
apellido = localStorage .getItem( 'apellido' );

console .group( 'LocalStorage: Después de eliminar apellido' );
    
    console .log( 'LocalStorage: ', localStorage );     // Muestra LocalStorage
    
    if( apellido ) {
        console .log( `${ nombre } ${ apellido }`);
    }
    else {
        console .log( `${ nombre } `);
    }
    
console .groupEnd();

// Limpia Local Storage
console .group( 'Limpiar LocalStorage: ' );
    localStorage .clear();                              // Limpia el LocalStorage
    console .log( 'LocalStorage: ', localStorage );     // Muestra LocalStorage
console .groupEnd();    
    
/* ---- SESSION STORAGE ---- */

// Agregar al Session Storage (Se borra todo si se cierra el navegador)
sessionStorage .setItem( 'nombre', 'Carlos' );