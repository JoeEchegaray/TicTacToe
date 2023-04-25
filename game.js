let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')
let box7 = document.getElementById('box7')
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9')
let messageText = document.getElementById('turnBox')
let boxes = document.querySelectorAll('.col-4'),
  X_or_O = 0
let turnNumber = 0
let currentPlayer = ''
let gameWinner = ''
let gameOver = ''

//Check for Winner
function winCheck () {
  if (
    box1.innerHTML !== '' &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    gameOver = true
    gameWinner = box1.innerHTML
    gameEnd()
  }

  if (
    box4.innerHTML !== '' &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    gameOver = true
    gameWinner = box4.innerHTML
    gameEnd()
  }

  if (
    box7.innerHTML !== '' &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    gameOver = true
    gameWinner = box7.innerHTML
    gameEnd()
  }

  if (
    box1.innerHTML !== '' &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    gameOver = true
    gameWinner = box1.innerHTML
    gameEnd()
  }
  if (
    box2.innerHTML !== '' &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    gameOver = true
    gameWinner = box2.innerHTML
    gameEnd()
  }
  if (
    box3.innerHTML !== '' &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    gameOver = true
    gameWinner = box3.innerHTML
    gameEnd()
  }
  if (
    box1.innerHTML !== '' &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    gameOver = true
    gameWinner = box1.innerHTML
    gameEnd()
  }
  if (
    box3.innerHTML !== '' &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    gameOver = true
    gameWinner = box3.innerHTML
    gameEnd()
  }
  if (turnNumber >= 9 && gameOver !== true) {
    gameOver = true
    gameWinner = ''
    gameEnd()
  }
}

//Play Game
function playGame () {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
      if (boxes[i].innerHTML === '' && turnNumber % 2 == 0) {
        messageText.innerHTML = "It is Player O's Turn"
        console.log(turnNumber)
        currentPlayer = 'X'
        boxes[i].innerHTML = currentPlayer
        turnNumber++
      } else if (boxes[i].innerHTML === '' && turnNumber % 2 !== 0) {
        messageText.innerHTML = "It is Player X's Turn"
        console.log(turnNumber)
        currentPlayer = 'O'
        boxes[i].innerHTML = currentPlayer
        turnNumber++
      } else {
        messageText.innerHTML =
          'This Square is already Taken, Please choose an Empty Square'
      }
      winCheck()
    })
  }
}

//End Game
function gameEnd () {
  if (gameOver == true && gameWinner !== '') {
    alert('Game is Over ' + gameWinner + ' Won the Game')
  } else {
    alert('Game is Over. Tied Game, Please Play Again.')
  }
}

//reset game
let gameReset = document.getElementById('gameReset')

gameReset.addEventListener('click', () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ''
    turnNumber = 0
    messageText.innerHTML = ''
    gameWinner = ''
    gameOver = ''
  }
})

playGame()
