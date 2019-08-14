// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 75);
// });

$('#myScrollspy').on('activate.bs.scrollspy', function () {
    $('nav-item').toggleClass('active')
  });