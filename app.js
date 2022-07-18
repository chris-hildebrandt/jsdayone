let homeScore = 0
let awayScore = 0

function usScore(points){
  console.log(points);
  let homeScoreElm = document.getElementById("home-score")
  console.log(homeScore);
  homeScore += points
  console.log(homeScore);
  console.log(points);
  homeScoreElm.innerText = homeScore
}

function themScore(points){
  let awayScoreElm = document.getElementById("away-score")
  awayScore += points
  awayScoreElm.innerText = awayScore
}

function clearHomeScore(){
  homeScore = 0
  let homeScoreElm = document.getElementById("home-score")
  homeScoreElm.innerText = homeScore
}

function clearAwayScore(){
  awayScore = 0
  let awayScoreElm = document.getElementById("away-score")
  awayScoreElm.innerText = awayScore
}

function clearAll(){
  awayScore = 0
  homeScore = 0
  let awayScoreElm = document.getElementById("away-score")
  awayScoreElm.innerText = awayScore
  let homeScoreElm = document.getElementById("home-score")
  homeScoreElm.innerText = homeScore
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

// DEBUGGER!!!!!!!!