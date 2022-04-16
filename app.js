//To avoid misspelling
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

//Keep track of scores
let playerScore = 0;
let computerScore = 0;

//Players selection
let playerSelection = "";
let computerSelection = "";
      
function selectOption() {
  let num = Math.floor(Math.random() * 3);
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

let finalWinner = "";

let round = 0;
let roundLimit = 5;

const startBtn = document.querySelector('.startButton');

startBtn.addEventListener('click', () => {
  const headerBox = document.getElementById('header');
  
  headerBox.removeChild(startBtn);

  document.getElementById('game-area').scrollIntoView();

  const headerText = document.querySelector('.title');
  headerText.textContent = "Select your Object";

  const viewRound = document.createElement('h4');
  viewRound.classList.add('roundNumber');
  viewRound.textContent = "round number: " + round;
  
  headerText.parentNode.insertBefore(viewRound, headerText.nextSibling);

  const parent = document.querySelector('.playerTwo');
  const child = document.createElement('div')
  
  child.classList.add('compPickBox')

  const childText = document.createElement('span')
  childText.setAttribute('id', 'compPickText')
  childText.textContent = "Computer's Pick: ... "

  child.appendChild(childText);
  parent.appendChild(child);
  
  p1Buttons();
});

function p1Buttons(){
  document.getElementById('buttonsAppear').innerHTML = 
    "<button id='btn'>Rock</button><button id='btn'>Paper</button><button id='btn'>Scissors</button>";

  const buttons = document.querySelectorAll('#btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.innerHTML;
      computerSelection = selectOption();

      const computerPick = document.querySelector('#compPickText');
      computerPick.classList.add('compPickText');
      computerPick.textContent = "Computer's Pick: " + computerSelection;

      round++;
      const viewRoundNum = document.querySelector('.roundNumber');
      viewRoundNum.textContent = "round number: " + round;
      
      if (round < roundLimit) {
        game();
      } else if (round === roundLimit) {
        game();
        finalScore();
        playAgainFunc();
        disableP1Buttons();
      } 

    });

  });
}

//Round Winner
function computerPlay(playerSelection, computerSelection) {
  let results = "";

  if (playerSelection === rock && computerSelection === scissors ||
      playerSelection === scissors && computerSelection === paper ||
      playerSelection === paper && computerSelection === rock) {
    results = "Player Wins";
  } else if (playerSelection === rock && computerSelection === paper ||
    playerSelection === scissors && computerSelection === rock ||
    playerSelection === paper && computerSelection === scissors) {
    results = "Computer Wins";
  } else {
    results = "Tie";
  }

  return results;
}

function game() {
  let roundWinner = computerPlay(playerSelection, computerSelection);
  //console.log("playerSelection: " + playerSelection +  " --- computerSelection: " + computerSelection)
  //console.log("round winner: " + roundWinner);
  
  if (roundWinner === "Player Wins") {
    playerScore++;
  } else if (roundWinner === "Computer Wins") {
    computerScore++;
  }

  document.getElementsByClassName('.roundNumber').textContent = round;
  const p1 = document.querySelector('.p1-score');
  p1.textContent = playerScore;

  const p2 = document.querySelector('.p2-score');
  p2.textContent = computerScore;

  //console.log("playerScore: " + playerScore + " --- computerScore: " + computerScore)
  //console.log("round: " + round)

  const headerText = document.querySelector('.title');

  if (roundWinner === "Tie") {
    headerText.textContent = roundWinner;   
  } else {
    headerText.textContent = roundWinner + " This Round"
  }
  
}

function finalScore() {
  if (playerScore > computerScore) {
    finalWinner = "Player!";
  } else if (playerScore < computerScore) {
    finalWinner = "Computer!";
  } else {
    finalWinner = "Its a Tie! No winners!";
  }

  const container = document.querySelector('#game-area');
  const content = document.createElement('div');
  
  content.classList.add('winnerBox');
  content.setAttribute('id', 'finalWinner')
  content.textContent = "Game Winner: " + finalWinner;
  
  container.parentNode.insertBefore(content, container.nextSibling)

  const lastContainer = document.querySelector('#lastContainer');
  lastContainer.classList.add('lastContainer')

  document.getElementById('lastContainer').innerHTML = 
  '<button class="play-again"><a href="#players"></a>Play Again</a></button>';

  document.getElementById('lastContainer').scrollIntoView({ behavior: 'smooth', block: 'center' });

}

function playAgainFunc() {
  const playAgain = document.querySelector('.play-again');

  playAgain.addEventListener('click', () => {
    const lastContainer = document.getElementById('lastContainer');
    lastContainer.removeChild(playAgain);

    const content = document.querySelector('.winnerBox');
    content.classList.remove('winnerBox');

    const finalWinnerBox = document.getElementById('finalWinner');
    finalWinnerBox.textContent = '';
    finalWinnerBox.removeAttribute('id');
    
    playerSelection = "";
    computerSelection = "";
        
    playerScore = 0;
    computerScore = 0;
    
    finalWinner = "";
  
    round = 0;
  
    const viewRoundNum = document.querySelector('.roundNumber');
    viewRoundNum.textContent = "round number: " + round;
    
    const childText = document.querySelector('#compPickText');
    childText.textContent = "Computer's Pick: ... "
  
    const p1BtnsBox = document.querySelector('#buttonsAppear')
    p1BtnsBox.classList.toggle('disableButtons')

    const p1 = document.querySelector('.p1-score');
    p1.textContent = playerScore;

    const p2 = document.querySelector('.p2-score');
    p2.textContent = computerScore;

    const headerText = document.querySelector('.title');
    headerText.textContent = "Select your Object";
    
    document.getElementById('game-area').scrollIntoView();

  })

};

function disableP1Buttons () {
  const p1BtnsBox = document.querySelector('#buttonsAppear')
  p1BtnsBox.classList.toggle('disableButtons')
};