/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
let winner, scores, results;

burntDeck=[];

let drinks = {
    0: {
        img:'images/drinksImages/empty.png'
    },
    1: {
        img: 'images/drinksImages/quarter.png'
    },
    2: {
        img: 'images/drinksImages/half.png'
    },
    2: {
        img: 'images/drinksImages/threeQuarters.png'
    },
    4: {
        img: 'images/drinksImages/full.png'
    },
}

let cardBack = {
    img: "images/backs/blue.svg"
};

/*----- cached element references -----*/ 
const cardBackEl = document.querySelector('#playing-deck > #card0')
const drinksScoreEl = document.querySelector('#beverages > #drink0')
// const cardsLeftEl= document.querySelector('#c-score > h2')
// const 
// nOfDrinks
// nOfCardsLeft



/*----- event listeners -----*/ 
// document.querySelector('#higher').addEventListener('click', handleHigher);
// document.querySelector('#same').addEventListener('click', handleSame);
// document.querySelector('#lower').addEventListener('click', handleLower);


/*----- functions -----*/

start();

// function handleHigher(){

// }

// function handleSame(){

// }

// function handleLower(){

// }



cardDeck =  [ 
    'D1','H1','S1','C1','D2','H2','S2','C2','D3','H3','S3','C3','D4','H4','S4','C4',
    'D5','H5','S5','C5','D6','H6','S6','C6','D7','H7','S7','C7','D8','H8','S8','C8',
    'D9','H9','S9','C9','D10','H10','S10','C10','D11','H11','S11','C11',
    'D12','H12','S12','C12','D13','H13','S13','C13',];
    
function shuffle() {
    var shuffledDeck = cardDeck.length;
    var index, temp;
    while (shuffledDeck > 0) {
        index = Math.floor(Math.random() * shuffledDeck);
        shuffledDeck --;
        temp = cardDeck[shuffledDeck];
        cardDeck[shuffledDeck] = cardDeck[index];
        cardDeck[index] = temp;
    }
    return cardDeck;
};

shuffle();
var playingDeck = cardDeck.splice(0, 6);

// function compare(value){
//     var cardA = playingDeck.length - 2,
//     var cardB = playingDeck.length - 1;

//     if (value === "high") {
//         return cardB >= cardA;
//     } else {
//         return cardB <= cardA;
//     }
// }

var cardValues = {
    1:['D1','H1','S1','C1'],
    2:['D2','H2','S2','C2'],
    3:['D3','H3','S3','C3'],
    4:['D4','H4','S4','C4'],
    5:['D5','H5','S5','C5'],
    6:['D6','H6','S6','C6'],
    7:['D7','H7','S7','C7'],
    8:['D8','H8','S8','C8'],
    9:['D9','H9','S9','C9'],
    10:['D10','H10','S10','C10'],
    11:['D11','H11','S11','C11'],
    12:['D12','H12','S12','C12'],
    13:['D13','H13','S13','C13'],
}



function createPlayingDeck() {
    for (var i = 0); i < playingDeck.length; i++) {

    }
}



function render() {
// //render the results
// drinksScoreEl.style.backgroundImage = `url(${images/drinksImages/empty.png})`;
// cardBackEl.style.backgroundImage = `url(${cardBack[board.cards].img})`;

}

function start() {
    winner = null;
    results = { 
        cards: 'playingDeck',
        drinks: 'drinks',
    }
    board = {
        drinks: [0, 0, 0, 0, 0],
        cards: [null, null, null, null, null, null],
    }
    // scores = {
    //     nOfDrinks: 0,
    //     nOfCardsLeft: (cardDeck.length + 1) - 1,
    // }
    render ();
}




