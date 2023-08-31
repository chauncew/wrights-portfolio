gsap.registerPlugin(ScrollTrigger);

//Nav/Landing Page Animations
const landingTimeline = gsap.timeline()
landingTimeline
.from('.nav-links ul li', {
  autoAlpha: 0,
  y: -40,
  duration: 0.6,
  stagger: 0.3,
  delay: 0.3
})
.from('.landing-page p', {
  scaleX: 0, 
  ease: 'power1.outIn',
  transformOrigin: 'center',
  delay: 0.8,
}, '-=1')
.fromTo('.landing-img', {opacity: 0, clipPath: 'circle(0%)'}, {opacity: 1, clipPath: 'circle(100%)', duration: 1.5})
.from('.pc-info span', {
  autoAlpha: 0,
  x: -100,
  duration: 0.4,
  stagger: 0.5,
  delay: 1
},'-=1')

//About Section Animations
const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-section',
    start: 'top 80%',
    // markers: 'true'
  }
})
aboutTimeline
.from('.about-line', {
  scaleX: 0, 
  duration: 1.5,
  transformOrigin: 'center',
})
.from('.about-section h1', {opacity: 0, y: -200, delay: 0.5}, '-=1')
.from('.about-section p', {opacity: 0, x: -500, delay: 0.5}, '<')
.from('.skills h2', {opacity: 0, y: -200, delay: 0.5}, '<')
.from('.skills li', {opacity: 0, y: 200, delay: 0.5}, '<')

//Projects Animations
  const reveal = gsap.timeline()
    reveal
    .from('.my-work h1', {opacity: 0, y: -300})
    .from('.my-work-container .work-cards', {
      autoAlpha: 0,
      x: -125,
      duration: 0.5,
      stagger: 0.5,
    })

ScrollTrigger.create({
  animation: reveal,
  trigger: '.my-work',
  start: 'top 50%',
  end: '100%',
})

//Form Animations
const formAnim = gsap.timeline()
formAnim
.fromTo('form', {opacity: 0, clipPath: 'circle(0%)'}, {opacity: 1, clipPath: 'circle(100%)', duration: 1.5})

ScrollTrigger.create({
  animation: formAnim,
  trigger: '.contact-me',
  start: 'top 50%',
  // pin: 'form',
  // scrub: 1,
  end: '100%',
  // markers: true
})



// window.addEventListener('load', navAnim)
// window.addEventListener('load', landingAnim)



// Hamburger Menu Animations
const closeContainer = document.querySelector('.close-button')
const showNav = document.querySelector('.side-nav')

closeContainer.addEventListener('click', () => {
    closeContainer.classList.toggle('active')
    showNav.classList.toggle('active')
})

//About section animations
// gsap.to('.css', {
//     duration: 0.4,
//     y: 70,
//     ease: 'circ.in',
//     repeat: -1,
//     yoyo: true,
//   })
  
//   gsap.to('.javaScript', {
//     rotateX: 360,
//     rotateY: 360,
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//   })
  
//   gsap.to('.gsap', {
//     rotateY: 360,
//     duration: 2,
//     repeat: -1,
//     yoyo: true,
//   })
  
//   gsap.to('.react', {
//     rotateX: 180,
//     duration: 1,
//     repeat: -1,
//     yoyo: true,
//   })
  
//   gsap.to('.git', {
//     rotateY: 90,
//     duration: 1,
//     repeat: -1,
//     yoyo: true,
//   })
//   gsap.to('.html', {
//     rotateY: 90,
//     duration: 0.5,
//     repeat: -1,
//     yoyo: true,
//   })

  //Contact Me Form Validation
const form = document.querySelector('form')
const username = document.querySelector('#userName') 
const email = document.querySelector('#email') 
const password = document.querySelector('#password')
const message = document.querySelector('#message')
const userErrorMessage = document.querySelector('.user-error-message')
const emailErrorMessage = document.querySelector('.email-error-message')
const messageErrorMessage = document.querySelector('.message-error-message')

form.addEventListener('submit', () => {
    // e.preventDefault()
    const userNameValue = username.value.trim();
    if(userNameValue === "") {
        username.style.background = 'red'
        userErrorMessage.style.display = 'block'
    } else {
        username.style.background = 'green'
        userErrorMessage.style.display = 'none'
    }

    const emailValue = email.value.trim();
    if(emailValue === "") {
        email.style.background = 'red'
        emailErrorMessage.style.display = 'block'
    } else if (!emailValue.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("Please Enter A valid email")
        email.style.background = 'red'
        emailErrorMessage.style.display = 'block'

    } else {
        email.style.background = 'green' 
        emailErrorMessage.style.display = 'none'
    }

    const messageValue = message.value.trim();
    if(messageValue === "") {
        message.style.background = 'red'
        messageErrorMessage.style.display = 'block'
    } else {
        message.style.background = 'green'
        messageErrorMessage.style.display = 'none'
    }
})

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
