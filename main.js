const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu')
const header = document.querySelector('header')
const headerImgs = header.querySelectorAll('.logo')

function headerBgToggle() {
  console.log('scrolled')

  if (window.scrollY > 5 ){
    header.classList.remove('bg-transparent')
  } else {
    header.classList.add('bg-transparent')
  }
}

window.addEventListener("scroll", headerBgToggle)

headerBgToggle()


function menuLocation() {
  if(burgerMenu.classList.contains('active')){
    gsap.to(burgerMenu,{
      top: `${burgerMenu.clientHeight - 5}px`,
      ease: 'none'
    })
  } else {
      gsap.to(burgerMenu,{
        top: `0px`,
        ease: 'none'
      })
  }
}

function toggleBurger() {
  // swaps color
  header.classList.toggle('scheme-base')
  header.classList.toggle('scheme-featured')
  // toggles burger icon
  burgerButton.classList.toggle('active')
//  opens and closes the burger menu
  burgerMenu.classList.toggle('active')
  
  menuLocation()

  headerImgs.forEach(img => {
    img.classList.toggle('hidden')
  })

}

burgerButton.addEventListener('click', toggleBurger)
window.addEventListener("resize",menuLocation)



// menu drop down height sets

const burgerMenuParentLinks = burgerMenu.querySelectorAll('.drop-parent')

burgerMenuParentLinks.forEach( link => {
  let childLink = link.querySelector('.drop-child')
  console.log(childLink)
  console.log(childLink.offsetHeight)
  link.style.setProperty("--child-height", `${childLink.offsetHeight}px`);
})

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

function increaseInput(element){
  if (element.nextElementSibling.value < 20 ){
  element.nextElementSibling.value++
  }
}

function decreaseInput(element){
  if (element.previousElementSibling.value >= 1 ){
    element.previousElementSibling.value--
  }
}

function toggleClass(element,toggledClass){
  element.classList.toggle(toggledClass)
}

function toggleVisiterPopout(){
  console.log("toggled popout")
  let popout = document.querySelector("#embed-user-count")
  let site = document.querySelector('html')
  let overflowDiv = document.querySelector('.offClickDiv')
  toggleClass(popout,'h-0');
  toggleClass(popout,'h-overflow-hidden');
  toggleClass(popout,'p-0');
  toggleClass(popout,'p-4');
  // toggleClass(site,'screenLock');
  toggleClass(overflowDiv,'fixed')
}

console.log('finished main.js')