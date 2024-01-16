window.addEventListener('load', function () {

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

console.log('should have a slider')

})