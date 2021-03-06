var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];
var resetButton = document.getElementById('reset-button');

var checkForMatch = function(){
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert('You found a match!');
    } else {
      alert('Sorry, try again');
    }
  } else if (cardsInPlay.length === 4){
    if (cardsInPlay[2] === cardsInPlay[3]){
      alert('You found a match!');
    } else {
      alert('Sorry, try again');
    }
  }
  resetButton.style.display = 'block';
  resetButton.addEventListener('click', resetBoard);
};

var flipCard = function(){
  var randomCard = cards[Math.floor(Math.random()*cards.length)];
  cards.splice(cards.indexOf(randomCard), 1);
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', randomCard.cardImage);
  console.log(`User flipped ${randomCard.rank}`);
  console.log(randomCard.cardImage);
  console.log(randomCard.suit);
  cardsInPlay.push(randomCard.rank);
  checkForMatch();
};

var createBoard = function(){
  cards.forEach(function(element){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', cards.indexOf(element));
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  });
};

var resetBoard = function(){
  cards = [
    {
      rank: 'queen',
      suit: 'hearts',
      cardImage: 'images/queen-of-hearts.png'
    },
    {
      rank: 'queen',
      suit: 'diamonds',
      cardImage: 'images/queen-of-diamonds.png'
    },
    {
      rank: 'king',
      suit: 'hearts',
      cardImage: 'images/king-of-hearts.png'
    },
    {
      rank: 'king',
      suit: 'diamonds',
      cardImage: 'images/king-of-diamonds.png'
    }
  ];
  cardsInPlay = [];
  resetButton.style.display = 'none';
  for (var i = 0; i < 4; i++){
    document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
  };
};

createBoard();
