let player1Score = 0
let player2Score = 0
let play1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollbtn = document.getElementById("rollbtn")
const resetbtn = document.getElementById("resetbtn")


rollbtn.addEventListener("click" , function(){
const randomNumber = Math.floor(Math.random() *6 ) + 1

if(play1Turn){

    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    message.textContent = "Player 2 turn"

} else{
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 turn"
}

if(player1Score >=20){
    message.textContent = "PLAYER 1 WINS !"
    rollbtn.style.display = "none"
    resetbtn.style.display = "block"
} else  if (player2Score >=20){
    message.textContent = "PLAYER 2 WINS !"
    rollbtn.style.display = "none"
    resetbtn.style.display = "block"
}
play1Turn =!play1Turn

})


resetbtn.addEventListener("click" , function(){

    reset()
})


function reset(){

message.textContent = "Player 1 turn"
player1Scoreboard.textContent = 0
player2Scoreboard.textContent = 0
player1Dice.textContent = `-`
player2Dice.textContent = `-`
player1Score = 0
player2Score = 0
play1Turn = true
resetbtn.style.display = "none"
rollbtn.style.display = "block"
player2Dice.classList.remove("active")
player1Dice.classList.add("active")

};