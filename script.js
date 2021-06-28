let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getComputerChoice = () => {
  const choicesArr = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choicesArr[randomNum];
};
const win = (userChoice,computerChoice) => {
    userScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `${userChoice}  beats ${computerChoice}.  You Win!`
}
const lose = (userChoice,computerChoice) => {
    compScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `${userChoice}  loses to ${computerChoice}.  You Lose!`
}
const draw = (userChoice,computerChoice) => {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `${userChoice}  equals ${computerChoice}.  Draw!`

}
const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice)
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice)
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice)
      break;
  }
};

const checkWinner = () => {
    if(userScore === 5) {
        console.log("You Win")
    }else if (compScore === 5){
        console.log("You Lose")
    }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    game("paper");
  });
  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}
main();
 console.log(userScore)