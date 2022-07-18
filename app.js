let currentScore = 0
let x = 0

function score(){
  let scoreboardElement = document.getElementById("scoreboard")
  scoreboardElement.innerText = currentScore.toString()
  currentScore += 1
}

function logScore(){
x ++
console.log(x);
}

let secretCode = "8008"
let yourCode = ""

function eight(){
  yourCode += 8
}

function zero(){
  yourCode += 0
}

function submit(){
  if(secretCode == yourCode){
    surprise()
  }
  else{
    curse()
    window.close
  }
}