//this is my JS script for school
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
// var cardId = cards[2];


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
	 } else {
	     alert("Sorry, try again.");
	 }
}

var flipCard = function(cardId) {
	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};
flipCard(0);
flipCard(2);