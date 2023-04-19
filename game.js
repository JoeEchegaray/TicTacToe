let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let messageText = document.getElementById("messageBox")
let boxes = document.querySelectorAll(".col-4"), X_or_O = 0;
let turnNumber = 0
let currentPlayer = ''
let gameWinner = ''


//Determine Winner
function getWinner() {

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8);

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9);

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7);
}

//Declare Winner



//Play Game
function playGame() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', () => {
            if (boxes[i].innerHTML === "" && turnNumber % 2 == 0) {
                messageText.innerHTML = "It is Player X's Turn"
                currentPlayer = 'X';
                boxes[i].innerHTML = currentPlayer
                turnNumber++
            } else if (boxes[i].innerHTML === "" && turnNumber % 2 !== 0) {
                messageText.innerHTML = "It is Player O's Turn"
                currentPlayer = 'O';
                boxes[i].innerHTML = currentPlayer
                turnNumber++
            } else {
                messageText.innerHTML = "This Square is already Taken, Please choose another"
            }
        })
    }
}


//reset game
let gameReset = document.getElementById("gameReset")

gameReset.addEventListener('click', () => {
    for (let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = ""
        turnNumber = 0
        messageText = ""
        gameWinner = ""
    }
})



playGame()