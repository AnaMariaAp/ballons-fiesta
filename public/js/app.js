
$(document).ready(function() {
    console.log( "ready!" );
    $( "#draggable" ).draggable();
});

$(function(){
  //Menu
  $('.navbar-burger').click(function(){
    $(this).toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  //Modal Galeria
  $('#galeria .column').click(function(){
    var getId = $(this).attr('data-target');
    $(getId).addClass('is-active');
    //Carousel Flickity
    var carouselMainId = getId + ' .carousel-main'
    var carouselNavId = getId + ' .carousel-nav'

    $(carouselMainId).flickity({
      cellAlign: 'center',
      pageDots: false,
      imagesLoaded: true
    });
    // 2nd carousel, navigation
    $(carouselNavId).flickity({
      asNavFor: '.carousel-main',
      contain: true,
      pageDots: false,
      prevNextButtons: false
    });
  });

  var $carousel = $('.main-slider').flickity({
    contain: true,
    //autoPlay: 3500,
    pageDots: true,
    prevNextButtons: true,
    //wrapAround: true,
    //pauseAutoPlayOnHover: false
  });
  var flkty = $carousel.data('flickity');
  var $carouselCell = $('.carousel-cell');

  $carousel.on( 'select.flickity', function() {
    $(this).addClass('esunaprueba');
  });


  // $carousel.on( 'select.flickity', function() {
  //   $('.column').addClass('wow bounce');
  //   console.log(flkty.selectedIndex);
  // });





  $('.modal-close').click(function(){
    $('.modal').removeClass('is-active');
  });


});

$(function(){

  //Funcionalidad de cotizar
  $(".source, .target").sortable({
      connectWith: ".connected"
  });
  $('#source-1').sortable({
     stop: function(e, ui) {
       console.log('SOURCE Stop / agrego a source - quito target');
       console.log('------------');
       $('#source-1').append("<li class='ui-sortable-placeholder remove-dashed'></li>");
      $('#target-1 > .remove-dashed').first().remove();
     }
  });
  $('#target-1').sortable({
     stop: function(e, ui) {
        console.log('TARGET Stop / agrego en target - quito en source');
        console.log('------------');
        $('#target-1').append("<li class='ui-sortable-placeholder remove-dashed'></li>");
       $('#source-1 > .remove-dashed').first().remove();
     }
  });
  $('#source-2').sortable({
     stop: function(e, ui) {
       console.log('SOURCE Stop / agrego a source - quito target');
       console.log('------------');
       $('#source-2').append("<li class='ui-sortable-placeholder remove-dashed'></li>");
      $('#target-2 > .remove-dashed').first().remove();
     }
  });
  $('#target-2').sortable({
     stop: function(e, ui) {
        console.log('TARGET Stop / agrego en target - quito en source');
        console.log('------------');
        $('#target-2').append("<li class='ui-sortable-placeholder remove-dashed'></li>");
       $('#source-2 > .remove-dashed').first().remove();
     }
  });

  //Animaciones en el website con wowjs
  var wow = new WOW(
    {
      boxClass:'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  );
  wow.init();

});

$(function(){
  var serp_background_eventos = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_background_eventos'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serpentina_background.json'
    }
  );
  var serp_background_test = bodymovin.loadAnimation(
    {
      container: document.getElementById('serp_background_test'),
      renderer: 'svg',
      //animType: 'html',
      loop: true,
      autoplay: true,
      path: 'js/serpentina/serpentina_background.json'
    }
  );
  // var title_left_pink = bodymovin.loadAnimation(
  //   {
  //     container: document.getElementById('serp_title_left_pink'),
  //     renderer: 'svg',
  //     //animType: 'html',
  //     loop: true,
  //     autoplay: true,
  //     path: 'js/serpentina/serp_title_left_pink.json'
  //   }
  // );
  // var title_right_pink = bodymovin.loadAnimation(
  //   {
  //     container: document.getElementById('serp_title_right_pink'),
  //     renderer: 'svg',
  //     //animType: 'html',
  //     loop: true,
  //     autoplay: true,
  //     path: 'js/serpentina/serp_title_right_pink.json'
  //   }
  // );
  // var title_left_purple = bodymovin.loadAnimation(
  //   {
  //     container: document.getElementById('serp_title_left_purple'),
  //     renderer: 'svg',
  //     //animType: 'html',
  //     loop: true,
  //     autoplay: true,
  //     path: 'js/serpentina/serp_title_left_purple.json'
  //   }
  // );
  // var title_right_purple = bodymovin.loadAnimation(
  //   {
  //     container: document.getElementById('serp_title_right_purple'),
  //     renderer: 'svg',
  //     //animType: 'html',
  //     loop: true,
  //     autoplay: true,
  //     path: 'js/serpentina/serp_title_right_purple.json'
  //   }
  // );
  // var title_left_cyan = bodymovin.loadAnimation(
  //   {
  //     container: document.getElementById('serp_title_left_cyan'),
  //     renderer: 'svg',
  //     //animType: 'html',
  //     loop: true,
  //     autoplay: true,
  //     path: 'js/serpentina/serp_title_left_cyan.json'
  //   }
  // );
  // var title_right_cyan = bodymovin.loadAnimation(
  //   {
  //     container: document.getElementById('serp_title_right_cyan'),
  //     renderer: 'svg',
  //     //animType: 'html',
  //     loop: true,
  //     autoplay: true,
  //     path: 'js/serpentina/serp_title_right_cyan.json'
  //   }
  // );
});
