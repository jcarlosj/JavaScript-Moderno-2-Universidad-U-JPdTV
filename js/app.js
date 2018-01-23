/* Seleccionando un elemento de JavaScript (usando Query Selector) retornando un solo valor
  -----------------------------------------------------------------------------------------
   1. Permite que podamos seleccionar un elemento por ID o por CLASS 
   2. Cuando selecionamos una clase que está en varios elementos 'querySelector'
      solo selecciona el primero que encuentre */

/* ---- SELECCIÓN UN ELEMENTO (Retorna un elemento) ---- */

/* Ejemplo 1: Cambiamos los estilos del elemento 'encabezado' */      
const encabezado = document .querySelector( '#encabezado' );        // Usamos . o # según sea un ID o un CLASS 

encabezado .style .color = '#1EAEDB';
encabezado .style .fontSize = '70px';
encabezado .style .textTransform = 'lowercase';
encabezado .style .borderBottom = '5px solid #1EAEDB';

console .log( encabezado );

// Ejemplo 2: Usando 'Nesting' propiedades de CSS 3.0 
const primerEnlace     = document .querySelector( '#principal a:first-child' ),
      enlaceEspecifico = document .querySelector( '#principal a:nth-child( 3 )' ),  // 'Aplicaciones Móviles'
      ultimoEnlace     = document .querySelector( '#principal a:last-child' );

console .log( 'Primer enlace ', primerEnlace );
console .log( 'Enlace específico ', enlaceEspecifico );
console .log( 'Último enlace ', ultimoEnlace );      

/* ---- SELECCIÓN DE TODOS LOS ELEMENTOS CON LA MISMA CLASE (Retorna un Array de elementos) ---- */

// Ejemplo 3: Cambiar los enlaces del Footer
const enlaces = document .querySelectorAll( '.enlace' );

enlaces .forEach( elemento => {
    elemento .style .textTransform = 'uppercase';
    elemento .style .fontWeight = 'bold';    
});

console .log( 'Enlaces ', enlaces );

// Ejemplo 4: Cambiar los enlaces del botón [Agregar al Carrito]
const enlacesAgregarAlCarrito = document .querySelectorAll( 'div.card a.agregar-carrito' );

enlacesAgregarAlCarrito .forEach( function( elemento ) {
    elemento .textContent = 'Agregar';
    elemento .style .fontSize = '22px';
});

console .log( 'Enlaces ', enlacesAgregarAlCarrito );

/* NOTA: 'Nesting' Es seleccionar elementos padre y luego elementos hijo */