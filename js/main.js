/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
let winner, scores, results;

burntDeck=[];

let Drinks = {
    empty: 'images/drinksImages/empty.png',
    quarter: 'images/drinksImages/quarter.png',
    half: 'images/drinksImages/half.png',
    threeQuarters: 'images/drinksImages/threeQuarters.png',
    full: 'images/drinksImages/full.png',
}

let cardBack = "../images/backs/blue.svg",
/*----- cached element references -----*/ 
const cardBackEl = document.querySelector('#beverages > #drink0')
const drinksScoreEl = document.querySelector
const cardsLeftEl=

nOfDrinks
nOfCardsLeft


/*----- event listeners -----*/ 

/*----- functions -----*/

start ();

cardDeck = [
    'D1','H1','S1','C1',
    'D2','H2','S2','C2',
    'D3','H3','S3','C3',
    'D4','H4','S4','C4',
    'D5','H5','S5','C5',
    'D6','H6','S6','C6',
    'D7','H7','S7','C7',
    'D8','H8','S8','C8',
    'D9','H9','S9','C9',
    'D10','H10','S10','C10',
    'D11','H11','S11','C11',
    'D12','H12','S12','C12',   
    'D13','H13','S13','C13',
    'J', 'J'];


function shuffle() {
var j, x, i;
    for (i = cardDeck.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i+1));
        x = cardDeck[i];
        cardDeck[i] = cardDeck[j];
        cardDeck[j] = x;
    }
    return cardDeck;
};

shuffle();
var playingDeck = cardDeck.splice(0, 6);
   
function render() {
//render the results


}

function start() {
    winner = null;
    results = {
        cards: 'playingDeck',
        drinks: 'drinks',
    }
    board = {
        drinks: ['empty', 'empty', 'empty', 'empty', 'empty'],
        cards: 'cardBack',
    }
    scores = {
        nOfDrinks: 0,
        nOfCardsLeft: (cardDeck.length + 1) - 1,
    }
    render ();
}