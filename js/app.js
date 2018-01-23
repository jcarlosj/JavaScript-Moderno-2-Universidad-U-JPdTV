/* DOM y Scripting */
let elemento = document;

console .group( 'DOM: Documento Object Model' );
    /* 'all' */
    console .group( 'Todos el DOM' );
        console .log( 'document ', elemento );                      // 'HTMLDocument' ---> Devuelve la estructura del documento
        console .log( 'document.all ', elemento .all );             // 'HTMLAllCollection' ---> Devuelve la Colección de elementos del documento, muy similar a un Array (Pero no lo es)
        console .log( 'document.all[10] ', elemento .all[ 10 ] );   // Devuelve la estructura del elemento 'header' (usando del número de índice del elemento)
    console .groupEnd();

    /* Elemento 'head' */
    console .group( 'Elemento HEAD' );
        console .log( 'document.head ', elemento .head );   // Devuelve la estructura del elemento 'head'
        console .log( 'document.head ', elemento .body );   // Devuelve la estructura del elemento 'body'
    console .groupEnd();

    /* Propiedades del DOM (Algunos) */
    console .group( 'Propiedades del DOM' );
        console .log( 'document.domain ', elemento .domain );               // 127.0.0.1  
        console .log( 'document.URL ', elemento .URL );                     // http://127.0.0.1:5500/index.html
        console .log( 'document.charset ', elemento .charset );             // UTF-8    
        console .log( 'document.characterSet ', elemento .characterSet );   // UTF-8 
    console .groupEnd();

    /* Elemento 'form' */
    console .group( 'Elemento FORM' );
        console .log( 'document.forms ', elemento .forms );                                         // 'HTMLCollection' ---> Devuelve la Colección de Formularios que componen DOM (Todos los que existan)
        console .log( 'document.forms[0]', elemento .forms[ 0 ] );                                  // Devuelve la estructura del elemento 'form' (en este caso el formulario de búsqueda)   
        console .log( 'document.forms[0].id ', elemento .forms[ 0 ] .id );                          // 'busqueda' ---> Devuelve nombre asignado al ID del elemento 'form' específico (en este caso el formulario de búsqueda)
        console .log( 
            'document.forms[0].className', 
            elemento .forms[ 0 ] .className         // 'formulario, clase2, clase3' ---> Devuelve cadena de texto con los nombres de las clases asignadas al elemento 'form' (en este caso el formulario de búsqueda) 
        );             
        console .log( 
            'document.forms[0].classList ', 
            elemento .forms[ 0 ] .classList         // 'DOMTokenList' --->  Devuelve el listado de clases algo muy similar a un Array 
        );            
        console .log( 
            'document.forms[0].classList[1] ', 
            elemento .forms[ 0 ] .classList[ 1 ]    // 'clase2' ---> Devuelve el nombre de una clase específica del DOMTokenList indicada por su índice
        );    
    console .groupEnd();

    /* Elemento 'img' */
    console .group( 'Elemento IMG' );
        console .log( 'document.images ', elemento .images );                       // 'HTMLCollection' ---> Devuelve la Colección de imagenes que tiene el DOM: elemento, ID o CLASS (si los posee)
        console .log( 'document.images[2] ', elemento .images[ 2 ] );               // Devuelve la estructura del elemento 'img' (en este caso)
        console .log( 'document.images[2].src ', elemento .images[ 2 ] .src );      // Devuelve el valor del atributo 'src' del elemento 'img' seleccionado de la Colección de imagenes del DOM
        console .log( 
            'document.images[ 2 ].getAttribute ', 
            elemento .images[ 2 ] .getAttribute             // Devuelve TODOS los atributos del elemento 'img' específico (en este caso) 
        );            
        console .log( 
            'document.images[ 2 ].getAttribute("src")  ', 
            elemento .images[ 2 ] .getAttribute( 'src' )    // Devuelve el valor de un atributo del elemento 'img' específico (en este caso)   
        );           
    console .groupEnd();

    /* Elemento 'script' */
    console .group( 'Elemento SCRIPT' );
        console .log( 'document.scripts ', elemento .scripts );     // Devuelve la Colección de SCRIPTS 
                                                                    // Incluye instalados en el Navegador y implementados en el DOM
    console .groupEnd();
    
console .groupEnd();