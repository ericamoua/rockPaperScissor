// an array of choices for the computer
const choices = ["rock", "paper", "scissor"];
// global win and loss counter
let winCounter=0;
let loseCounter=0;

/**
 * This function targets the 'rock' id button
 * and then finds the computer choice via a random number
 * then output the results depending the computers choice
 * update the counter too
 */

document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer Choice:", computerChoice);

    if(computerChoice === 'scissor'){
        document.getElementById("output").textContent = 'You Win!!';
        winCounter++;
        document.getElementById("winCounter").textContent = winCounter;
    }
    if(computerChoice === 'paper'){
        document.getElementById("output").textContent = 'You Lose!!';
        loseCounter++;
        document.getElementById("loseCounter").textContent = loseCounter;

    }
    if(computerChoice === 'rock'){
        document.getElementById("output").textContent = "It's a Tie!!";
    }
});

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer Choice:", computerChoice);

    if(computerChoice === 'rock'){
        document.getElementById("output").textContent = 'You Win!!';
        winCounter++;
    }
    if(computerChoice === 'scissor'){
        document.getElementById("output").textContent = 'You Lose!!';
        loseCounter++;
    }
    if(computerChoice === 'paper'){
        document.getElementById("output").textContent = "It's a Tie!!";
    }
});

document.getElementById("scissor").addEventListener("click", () => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer Choice:", computerChoice);

    if(computerChoice === 'paper'){
        document.getElementById("output").textContent = 'You Win!!';
        winCounter++;
    }
    if(computerChoice === 'rock'){
        document.getElementById("output").textContent = 'You Lose!!';
        loseCounter++;
    }
    if(computerChoice === 'scissor'){
        document.getElementById("output").textContent = "It's a Tie!!";
    }
});
