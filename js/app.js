/* Seleccionando elementos y aplicandole propiedades */
let encabezado;

/* Obtiene el elemento por su ID */
encabezado = document .getElementById( 'encabezado' );  

/* Imprime el contenido del elemento */
console .log( 'Inicialmente: ', encabezado .textContent );      // 'Cursos en línea'

/* Cambia los estilos del elemento */
encabezado .style .background = '#33C3F0';
encabezado .style .color = '#FFF';
encabezado .style .padding = '20px';

// Cambia el contenido del elemento (también se puede usar: textContent)
encabezado .innerText = 'Los mejores cursos'; 

/* Imprime el contenido final del elemento */
console .log( 'Finalmente: ',  encabezado .innerText );         // 'Los mejores cursos'
