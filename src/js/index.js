$(document).ready(function() {
  $('#carousel-products').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.slick-prev').html('<img src="https://img.icons8.com/ios/24/000000/long-arrow-left.png">')

  $('.slick-next').html('<img src="https://img.icons8.com/ios/24/000000/long-arrow-right.png">')

  // exibição menu mobile
  const iconMenuMobile = document.querySelector('#icon-menu-mobile')

  iconMenuMobile.addEventListener('click', () => {
    $('.menu-mobile').toggle(500, function() {
      if ($('.menu-mobile').css('display') == 'block') {
        $('body').css('overflow', 'hidden')
      }
  
      if ($('.menu-mobile').css('display') == 'none') {
        $('body').css('overflow', 'auto')
      }
    })
  }) // fim exibição menu mobile

  

})
