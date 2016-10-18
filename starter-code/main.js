/// DDEFINE CARD VARIABLES ////


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');


// SET GAME BOARD ////

function createBoard() {

for (var i=0; i<cards.length; i++) {
var cardElement = document.createElement('div');
cardElement.className = 'card';
cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards)
board.appendChild(cardElement);
    }
}

///// CHECK FOR 2 CARDS INPLAY /////

function isTwoCards() {
cardsInPlay.push(this.getAttribute('data-card'));
console.log(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='king.png'>"; 
    } else {
        this.innerHTML = "<img src='queen.png'>"; 
    }


if (cardsInPlay.length === 2) {
isMatch(cardsInPlay);
cardsInPlay = [];
    }
}

///// MATCH FUNCTION /////

function isMatch(cards) {
 if (cards[0] === cards[1]) {
   alert("You found a match!");
 } else {
   alert("Sorry, Try Again :'( ");

 }
}

createBoard();