/* Detener Event Bubbling (Burbuja de Eventos) */

const card = document .querySelector( '.card' ),                            // Selecciona elemento primera tarjeta
      infoCard = document .querySelector( '.info-card' ),                   // Selecciona elemento información de la primera tarjeta
      botonAgregarCarrito = document .querySelector( '.agregar-carrito' );  // Selecciona elemento del botón de la primera tarjeta 

/* El 'Event Bubbling' es la propagación de eventos en elementos que se contienen los unos a los otros */
card .addEventListener( 'click', function( evento ) {                   // Dispara el evento para: card  
    console .log( 'Click en Card' );
    evento .stopPropagation();          // Evita la propagación de eventos
});

infoCard .addEventListener( 'click', function(  evento ) {               // Dispara el evento para: infoCard
    console .log( 'Click en Información del Curso' );           
    evento .stopPropagation();          // Evita la propagación de eventos
});

botonAgregarCarrito .addEventListener( 'click', function(  evento ) {    // Dispara el evento para: botonAgregarCarrito
    console .log( 'Click en Botón Agregar al Carrito' );        
    evento .stopPropagation();          // Evita la propagación de eventos
});