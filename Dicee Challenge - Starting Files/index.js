// helper function
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 1. pick a random number between 1 - 6 and store in variable (twice)
var player1_roll = randomIntFromInterval(1, 6)
var player2_roll = randomIntFromInterval(1, 6)

// 2. modify img1 and img2 by updating the src to be 'images/image[number]'.
document.querySelector(".img1").src=("images/dice" + player1_roll + ".png")
document.querySelector(".img2").src=("images/dice" + player2_roll + ".png")
// 3. Perform if else to check who is the winner.
if (player1_roll > player2_roll){
    document.title = "Winner is player 1"
    document.querySelector("h1").innerText = "Winner is player 1"
}

if (player1_roll < player2_roll) {
    document.title = "Winner is player 2"
    document.querySelector("h1").innerText = "Winner is player 2"
}

if (player1_roll == player2_roll) {
    document.title="Tie!"
    document.querySelector("h1").innerText = "Tie"
}
// 4. Update the title to display the winner.