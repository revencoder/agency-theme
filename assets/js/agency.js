/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



$(function() {  
    var header = $("#page-top");
    // obtenemos el height + padding de la sección 1
    var services = $("#services").outerHeight();
    // obtenemos el height + padding de la sección última
    // y le sumamos el de la sección 1
    var footer = $("footer").outerHeight() + services;
    // cada vez que se produzca scroll en la ventana
    $(window).scroll(function(event) {
        // scrollTop la posición del elemento
        height = $(event.target).scrollTop();
        // dependiendo el lugar de la pantalla
        // modificamos la clase del header
        // para cambiar su color de fondo
        if (height > -1 && height < services) {
            header.addClass("nav-transparent").removeClass("nav-black");
        } else {
            header.addClass("nav-black").removeClass("nav-transparent");
        }
    });
});





