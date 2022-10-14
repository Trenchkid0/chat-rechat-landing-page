const showOff = document.querySelector('#show-up');
const showOn = document.querySelector('#show-down');
const show = document.getElementById('show');



const freeShowUp = document.getElementById('free-show-up')
const freeShowDown = document.getElementById('free-show-down')
const freeApp = document.getElementById('free-app')


const askApp = document.getElementById('ask-app');
const jawab = document.getElementById('answer')
const jawabFree = document.getElementById('answer-free')
const titleAsk = document.querySelector('.title-ask')

titleAsk.style.marginTop = '2rem'
freeShowDown.style.position = 'absolute'

showOn.addEventListener('click',()=>{
    // console.log("ini show on")
    showOn.setAttribute("hidden",true)
    showOff.removeAttribute("hidden")
    showOff.style.color = 'white'
    jawab.removeAttribute("hidden")

    askApp.classList.add("active")
    askApp.style.color = 'white'
    askApp.style.backgroundColor = '#4A72FF'
    askApp.style.borderRadius = '10px'
    askApp.style.height = '200px'

    
    titleAsk.style.marginLeft = '1rem'

    jawab.style.color = 'white'
    jawab.style.marginLeft = '1rem'
    jawab.style.paddingTop = "20px"

    freeShowDown.style.marginTop = "7rem"
    freeApp.style.marginLeft = '5rem'
    freeApp.style.marginTop = '1rem'
})
showOff.addEventListener('click',()=>{
    // console.log("ini show off")
    showOff.setAttribute('hidden',true)
    showOn.removeAttribute('hidden')
    jawab.setAttribute('hidden',true)
    // askApp.classList.add("deactive")
    askApp.style.color = 'black'
    askApp.style.backgroundColor = 'transparent'


    freeApp.style.marginTop = '-9rem'
    freeShowDown.style.marginTop = "-3rem"
})



freeShowDown.addEventListener('click',()=>{
    freeShowUp.removeAttribute('hidden')
    freeShowDown.setAttribute('hidden',true)

    jawabFree.removeAttribute('hidden')

    freeApp.style.color = 'white'
    freeApp.style.backgroundColor = '#4A72FF'
    freeApp.style.borderRadius = '10px'
    freeApp.style.height = '200px'


    jawabFree.style.color = 'white'
    jawabFree.style.marginLeft = '1rem'
    jawabFree.style.paddingTop = "20px"
})
freeShowUp.addEventListener('click',()=>{
    freeShowDown.removeAttribute('hidden')
    freeShowUp.setAttribute('hidden',true)

    jawabFree.setAttribute('hidden',true)

    
    freeApp.style.color = 'black'
    freeApp.style.backgroundColor = 'transparent'
})