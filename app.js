//Rock, Paper, Scissors Game

//1. Greeting
alert("Welcome to Rock, Paper, Scissors!");

//To avoid misspelling
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let winner = ""

//Function for the game
function game() {
    //2. User's input
    let playerSelection = prompt("Pick your type - Rock, Paper, Scissors:").toLowerCase();

    //3. Computer's input
    function selectOption() {
        let num = Math.floor(Math.random()*3);
        let option = "";
    
        if (num === 0) {
            option = rock;
        } else if (num === 1) {
            option = paper;
        } else if (num === 2) {
            option = scissors;
        }
    
        return option;
    }

    let computerSelection = selectOption(); 

    //4. Pick the winner
    function computerPlay(playerSelection, computerSelection) {
        let results = ""


        if (playerSelection === rock && computerSelection === scissors) {
            results = "Player Wins";

        } else if (playerSelection === scissors && computerSelection === paper) {
            results = "Player Wins";

        } else if (playerSelection === paper && computerSelection === rock) {
            results = "Player Wins";

        } else if (playerSelection === rock && computerSelection === paper) {
            results = "Computer Wins";

        } else if (playerSelection === scissors && computerSelection === rock) {
            results = "Computer Wins";

        } else if (playerSelection === paper && computerSelection === scissors) {
            results = "Computer Wins";
        } else {
            results = "Tie";

        }

        return results;

    }

    winner = computerPlay(playerSelection, computerSelection)

    //to see the code
        //To see what the player picked 
        console.log("playerSelection: " + playerSelection);
        //To see what the computer picked
        console.log("computerSelection:" + computerSelection);
        //To see who won
        console.log(winner)


    return winner;



}

//5. keep track of score
//and the end of the 5 round, declare the winner


function playRound() {

    for (i = 0; i < 3; i++) {
        console.log("i: " + i)
        game();  
    }

}

playRound();

