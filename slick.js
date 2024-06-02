window.addEventListener('load', function () {
  const galSliders = document.querySelectorAll('.gal')
  galSliders.forEach(slider => {
  slider.classList.remove('grid')
  console.log(slider.classList)
  console.log(slider)
  console.log('bob')

  $(slider).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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

const sliderBlocks = document.querySelectorAll('.slider')

sliderBlocks.forEach(slider => {
  slider.classList.remove('grid')
  console.log(slider.classList)
  console.log(slider)
  console.log('bob')

  $(slider).slick({
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

})



  }
  
  console.log('should have a slider')
    
  })
