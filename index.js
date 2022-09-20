//initiate homescore and guestscore to 0 by creating variables

let countHome = 0
let countGuest = 0

//create variables to represent reaching out to change the html elements by ID

let scoreHome = document.getElementById("homescore")
let scoreGuest = document.getElementById("guestscore")

//HOME SCORING

//create functions that will change the score on the board based on the button pressed

function home1score() {
  countHome += 1    //countHome = countHome + 1
  scoreHome.textContent = countHome
}

function home2score() {
  countHome += 2    //countHome = countHome + 2
  scoreHome.textContent = countHome
}

function home3score() {
  countHome += 3  //countHome = countHome + 3
  scoreHome.textContent = countHome
}

//GUEST SCORING

//create functions that will change the score on the board based on the button pressed

function guest1score() {
  countGuest += 1
  scoreGuest.textContent = countGuest
}

function guest2score() {
  countGuest += 2
  scoreGuest.textContent = countGuest
}

function guest3score() {
  countGuest += 3
  scoreGuest.textContent = countGuest
}

//create function that is invoked when "new game" button is pressed to zero all counts

function newGame() {
  scoreHome.textContent = 0
  scoreGuest.textContent = 0
  countHome = 0
  countGuest = 0
}
