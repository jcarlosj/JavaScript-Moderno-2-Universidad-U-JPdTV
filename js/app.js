/* Event Bubbling (Burbuja de Eventos) */

const card = document .querySelector( '.card' ),                            // Selecciona elemento primera tarjeta
      infoCard = document .querySelector( '.info-card' ),                   // Selecciona elemento información de la primera tarjeta
      botonAgregarCarrito = document .querySelector( '.agregar-carrito' );  // Selecciona elemento del botón de la primera tarjeta 

/* El 'Event Bubbling' es la propagación de eventos en elementos que se contienen los unos a los otros */
card .addEventListener( 'click', function() {                   // Dispara el evento para: card  (Propagación del Evento) 
    console .log( 'Click en Card' );
});

infoCard .addEventListener( 'click', function() {               // Dispara el evento para: infoCard, card  (Propagación del Evento) 
    console .log( 'Click en Información del Curso' );           
});

botonAgregarCarrito .addEventListener( 'click', function() {    // Dispara el evento para: botonAgregarCarrito, infoCard, card (Propagación del Evento) 
    console .log( 'Click en Botón Agregar al Carrito' );        
});