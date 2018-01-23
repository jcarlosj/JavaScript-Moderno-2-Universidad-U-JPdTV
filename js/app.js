/* Traversing en JavaScript (del Padre al Hijo) */
const navegacion = document .querySelector( '#principal' );

console .log( navegacion .childNodes );     // childNodes: Nodos hijo ( 'a.enlace' y 'text' ) 
                                            // los nodos 'text' son los saltos de línea en el código entre cada 'a'

console .log( navegacion .children );       // children: Nodos hijo ( 'a.enlace' ) devuelve una colección
                                            // Elimina los saltos de línea en el código entre cada 'a'

/* Asignamos nuevo contenido al primer enlace hijo del menú principal y al tiempo lo imprimimos por consola */                                            
console .log( navegacion .children[ 0 ] .textContent = 'Nuevo Enlace' );

/* Obtener Nombre de nodo */                                            
console .log( navegacion .nodeName );                   // NAV ---> (Referencia al tag 'nav') 
console .log( navegacion .children[ 0 ] .nodeName );    // A   ---> (Referencia al tag 'a') 

/* Obtener Tipo de Nodo 
   Usualmente regresan el tipo en número 
   Tipo 1: Elementos HTML
   Tipo 2: Atributos
   Tipo 3: Nodos de Texto
   Tipo 8: Comentarios
   Tipo 9: Documentos
   Tipo 10: DOCTYPE 
   */
console .log( navegacion .nodeType );                   // 1
console .log( navegacion .children[ 0 ] .nodeType );    // 1

/* Barra */
const barra = document .querySelector( '.barra' );

console .log( 
    'barra .children[ 0 ] ', 
    barra .children[ 0 ]                                        // Accede al contenedor 'container'
);                                   
console .log( 
    'barra .children[ 0 ] .children[ 0 ]', 
    barra .children[ 0 ] .children[ 0 ]                         // Accede a la fila 'row'
);                    
console .log( 
    'barra .children[ 0 ] .children[ 0 ] .children[ 0 ]', 
    barra .children[ 0 ] .children[ 0 ] .children[ 0 ]          // Accede al icono 'four columns icono icono1'
);     

/* Cards de Cursos */
const cardsCursos = document .querySelectorAll( '.card' );

console .log( 
    'cardsCursos ',                     // 'NodeList' ---> Colección de elementos
    cardsCursos 
);

/* Primer elemento Hijo */
console .log( 
    'cardsCursos[ 0 ] .firtsChild', 
    cardsCursos[ 0 ] .firtsChild         // #text ---> Primer elemento hijo (Saltos de línea en el código)
);                    
console .log( 
    'cardsCursos[ 0 ] .firtsElementChild', 
    cardsCursos[ 0 ] .firtsElementChild  // Primer elemento hijo de 'cardsCursos'
);

/* Último elementos Hijo */
console .log( 
    'cardsCursos[ 0 ] .lastChild', 
    cardsCursos[ 0 ] .lastChild         // #text ---> Último elemento hijo (Saltos de línea en el código)
);                    
console .log( 
    'cardsCursos[ 0 ] .lastElementChild', 
    cardsCursos[ 0 ] .lastElementChild  // Último elemento hijo de 'cardsCursos'
);

/* Contar cuantos elementos tiene una colección */
console .log( 
    'cardsCursos[ 0 ] .childElementCount', 
    cardsCursos[ 0 ] .childElementCount
);