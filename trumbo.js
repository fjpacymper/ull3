
$(document).ready(function() {
    /* Javascript */
    $('.editor').trumbowyg({
        svgPath: 'icons.svg', // path of icons.svg
        // Habitualmente, se indica la ruta del SVG en este parámetro, pero
        // en codepen, simplemente pegaremos el contenido del SVG en la parte
        // del código HTML
lang: 'es', // Idioma (es.min.js incluido)
  btns: [
          ['bold', 'italic', 'underline', 'strikethrough'],
          ['superscript', 'subscript'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['link', 'insertImage'],
          ['horizontalRule', 'removeformat'],
          ['viewHTML'],
          ['fullscreen']
        ],
        
    });

    $('#trumbowyg').trumbowyg('html'); // Obtienes el HTML generado
});
