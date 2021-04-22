// Variables
const body = document.querySelector('body')
const main = document.querySelector('main')
const menu = document.getElementById('menu')
const mainContainer = document.getElementById('main-container')
const getButton = document.getElementsByClassName('button')
const buttonArray = [
  'Sobre mim', 
  'Habilidades', 
  'Formação', 
  'Experiências',
  'Contatos',
  'Informações Gerais'
]

// console.log()
// mainContainer.children.namedItem('header-section')

function buttomMenuCreate(e) {
  for(let index = 0; index < e.length; index += 1) {
    const createbutton = document.createElement('button')
    menu.appendChild(createbutton)
    createbutton.innerText = buttonArray[index]
    createbutton.classList.add('button', 'btn-dark')
    createbutton.id = buttonArray[index]
  }
}

function showContainer() {
  let oi = Array.from(mainContainer.children)
  for(let index = 0; index < buttonArray.length; index += 1) {
    oi[index].classList.add('container-hidden')
  }
}

function clickButton(target.event) {
  if(target.event === 'click') {
    clickButton()
  }
}

window.onload = function() {
  buttomMenuCreate(buttonArray)
  showContainer()
}