const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu')
const header = document.querySelector('header')

function toggleBurger() {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  header.classList.toggle('scheme-1')
  header.classList.toggle('scheme-2')

}

burgerButton.addEventListener('click', toggleBurger)


// accordian code

const accordianTriggers = document.querySelectorAll(".accordian-trigger")

function findParentWithClass(obj,targetClass) {

  if (obj.classList.contains(targetClass)) {
    return obj
  } else {
    let newobj = findParentWithClass(obj.parentNode,targetClass)
    return newobj
  }
}

function gsapToggle(obj){
  obj.classList.toggle('closed')
  console.log(obj)
  if (obj.classList.contains('closed')) {
    gsap.to(obj,{
      height: '0',
      duration: '.5',
      ease: 'none'
    })
    console.log('close')
  } else {
    gsap.to(obj,{
      height: 'auto',
      duration: '.5',
      ease: 'none'
    })
    console.log('open')
  }
}


function toggleAcordian(e) {
  let target = findParentWithClass(e.target, "accordian-trigger")
  let draw = target.nextElementSibling
  
  target.classList.toggle('active')
  // draw.classList.toggle('closed')
  gsapToggle(draw)
  
}


accordianTriggers.forEach(trigger => {
  trigger.addEventListener('click',toggleAcordian)
})

console.log('finished main.js')