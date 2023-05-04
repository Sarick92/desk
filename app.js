let board = document.querySelector('#board')
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#429ce0', '#2f0990', '#90093f', '#900909', '#9a0795']
let SQUARES_NUMBER = 900

for(let i = 0; i < SQUARES_NUMBER; i++) {
    let square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}
function setColor(event) {
    let element = event.target
    let color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    let element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}