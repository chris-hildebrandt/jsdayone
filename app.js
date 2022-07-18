let currentScore = 0

function score(){
  let scoreboardElement = document.getElementById("scoreboard")
  scoreboardElement.innerText = currentScore.toString()
  currentScore += 1
}

// function scoreBoard(){
//   document.getElementById("scoreboard")
//   scoreboard ++
