window.addEventListener('load', function () {

  const sliders = document.querySelectorAll('.gal')
sliders.forEach(slider => {
  console.log(slider)
  $(slider).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true
        }
    }]
  });

})

if ( this.document.querySelector('.slider') ){

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 767,
        settings: {
          slidesToShow: 1,

        }
    }]
  })

  }
  
  console.log('should have a slider')
    
  })
