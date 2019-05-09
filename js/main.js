/*----- constants -----*/ 
var cards = [
    { card: 'D1', value: 1, img: 'images/diamonds/diamonds-A.svg'},
    { card: 'D2', value: 2, img: 'images/diamonds/diamonds-r02.svg'},    
    { card: 'D3', value: 3, img: 'images/diamonds/diamonds-r03.svg'},    
    { card: 'D4', value: 4, img: 'images/diamonds/diamonds-r04.svg'},    
    { card: 'D5', value: 5, img: 'images/diamonds/diamonds-r05.svg'},    
    { card: 'D6', value: 6, img: 'images/diamonds/diamonds-r06.svg'},    
    { card: 'D7', value: 7, img: 'images/diamonds/diamonds-r07.svg'},    
    { card: 'D8', value: 8, img: 'images/diamonds/diamonds-r08.svg'},    
    { card: 'D9', value: 9, img: 'images/diamonds/diamonds-r09.svg'},    
    { card: 'D10', value: 10, img: 'images/diamonds/diamonds-r10.svg'},    
    { card: 'D11', value: 11, img: 'images/diamonds/diamonds-J.svg'},    
    { card: 'D12', value: 12, img: 'images/diamonds/diamonds-Q.svg'},    
    { card: 'D13', value: 13, img: 'images/diamonds/diamonds-K.svg'},    
    { card: 'H1', value: 1, img: 'images/hearts/hearts-A.svg'},
    { card: 'H2', value: 2, img: 'images/hearts/hearts-r02.svg'},    
    { card: 'H3', value: 3, img: 'images/hearts/hearts-r03.svg'},    
    { card: 'H4', value: 4, img: 'images/hearts/hearts-r04.svg'},    
    { card: 'H5', value: 5, img: 'images/hearts/hearts-r05.svg'},    
    { card: 'H6', value: 6, img: 'images/hearts/hearts-r06.svg'},    
    { card: 'H7', value: 7, img: 'images/hearts/hearts-r07.svg'},    
    { card: 'H8', value: 8, img: 'images/hearts/hearts-r08.svg'},    
    { card: 'H9', value: 9, img: 'images/hearts/hearts-r09.svg'},    
    { card: 'H10', value: 10, img: 'images/hearts/hearts-r10.svg'},    
    { card: 'H11', value: 11, img: 'images/hearts/hearts-J.svg'},    
    { card: 'H12', value: 12, img: 'images/hearts/hearts-Q.svg'},    
    { card: 'H13', value: 13, img: 'images/hearts/hearts-K.svg'},  
    { card: 'C1', value: 1, img: 'images/clubs/clubs-A.svg'},
    { card: 'C2', value: 2, img: 'images/clubs/clubs-r02.svg'},    
    { card: 'C3', value: 3, img: 'images/clubs/clubs-r03.svg'},    
    { card: 'C4', value: 4, img: 'images/clubs/clubs-r04.svg'},    
    { card: 'C5', value: 5, img: 'images/clubs/clubs-r05.svg'},    
    { card: 'C6', value: 6, img: 'images/clubs/clubs-r06.svg'},    
    { card: 'C7', value: 7, img: 'images/clubs/clubs-r07.svg'},    
    { card: 'C8', value: 8, img: 'images/clubs/clubs-r08.svg'},    
    { card: 'C9', value: 9, img: 'images/clubs/clubs-r09.svg'},    
    { card: 'C10', value: 10, img: 'images/clubs/clubs-r10.svg'},    
    { card: 'C11', value: 11, img: 'images/clubs/clubs-J.svg'},    
    { card: 'C12', value: 12, img: 'images/clubs/clubs-Q.svg'},    
    { card: 'C13', value: 13, img: 'images/clubs/clubs-K.svg'},  
    { card: 'S1', value: 1, img: 'images/spades/spades-A.svg'},
    { card: 'S2', value: 2, img: 'images/spades/spades-r02.svg'},    
    { card: 'S3', value: 3, img: 'images/spades/spades-r03.svg'},    
    { card: 'S4', value: 4, img: 'images/spades/spades-r04.svg'},    
    { card: 'S5', value: 5, img: 'images/spades/spades-r05.svg'},    
    { card: 'S6', value: 6, img: 'images/spades/spades-r06.svg'},    
    { card: 'S7', value: 7, img: 'images/spades/spades-r07.svg'},    
    { card: 'S8', value: 8, img: 'images/spades/spades-r08.svg'},    
    { card: 'S9', value: 9, img: 'images/spades/spades-r09.svg'},    
    { card: 'S10', value: 10, img: 'images/spades/spades-r10.svg'},    
    { card: 'S11', value: 11, img: 'images/spades/spades-J.svg'},    
    { card: 'S12', value: 12, img: 'images/spades/spades-Q.svg'},    
    { card: 'S13', value: 13, img: 'images/spades/spades-K.svg'},
];

/*----- sound constants -----*/ 

const winClip = new Audio('sounds/right.wav');
const drinkClip = new Audio('sounds/wrong.wav');
const partyClip = new Audio('sounds/party.mp3');
const winnerClip = new Audio('sounds/win.mp3');
winnerClip.volume = 1.0;
partyClip.volume = 1.0;

/*----- app's state (variables) -----*/ 

let winner, scores, cardCount;

/*----- cached element references -----*/ 
var alertEl = document.getElementById('alert');
var drinksEl = document.getElementById('d-count');
var winStreakEl = document.getElementById('c-count');

$('#my-modal').modal('show')

/*----- event listeners -----*/ 
document.getElementById('higher').addEventListener('click', handleHigher);
document.getElementById('lower').addEventListener('click', handleLower);
document.getElementById('restart').addEventListener('click', restart);
document.getElementById('reset').addEventListener('click', restart);
document.getElementById('how-to-play').addEventListener('click', howTo);

/*----- functions -----*/


start();


/* ---- card functions ---- */

function shuffle() {
    var shuffledDeck = cards.length;
    var index, temp;
    while (shuffledDeck > 0) {
        index = Math.floor(Math.random() * shuffledDeck);
        shuffledDeck --;
        temp = cards[shuffledDeck];
        cards[shuffledDeck] = cards[index];
        cards[index] = temp;
    }
    return cards;
};

function createPlayingDeck(cards) {
    var playingDeck = document.createElement('div');
    playingDeck.setAttribute('id', 'cards');
    document.getElementById('playing-deck').appendChild(playingDeck);

    var firstCard = document.createElement('img');
    firstCard.setAttribute('src', cards[0].img )
    firstCard.setAttribute('id', 0)
    document.getElementById('cards').appendChild(firstCard);
    
    for (var i = 1; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/backs/blue.svg');
        cardElement.setAttribute('id', i);
        document.getElementById('cards').appendChild(cardElement);
    }
}

/* ---- compare high or low functions ---- */

function handleHigher() {
   flipNextCard(); 
   if(cardCount != 52){
       if(cards[cardCount -2].value <= cards[cardCount-1].value){
           alertEl.textContent = 'WINNING!'
           scores.winStreak++
           winStreakEl.textContent = scores.winStreak;
           winner++
           winClip.play();
           checkWinner();
        } else {
            alertEl.textContent = 'DRINK!'
            scores.drinks++
            drinksEl.textContent = scores.drinks
            drinkClip.play();
            resetWinStreak();
        }  
   }
}

function handleLower() {
    flipNextCard();
    if(cardCount != 52){
        if(cards[cardCount - 2].value >= cards[cardCount-1].value){
            alertEl.textContent = 'WINNING!'
            scores.winStreak++
            winStreakEl.textContent = scores.winStreak;
            winner++
            checkWinner();
            winClip.play();
        } else {
            alertEl.textContent = 'DRINK!'
            scores.drinks++
            drinksEl.textContent = scores.drinks
            drinkClip.play();
            resetWinStreak();
        }
    }

}

/* ---- retrieve next card ---- */

function flipNextCard() { 
    if (cardCount === 52) {
        gameOver();
    }  else {
    var nextCard = document.createElement('img');
    document.getElementById(`${cardCount}`).setAttribute('src', cards[cardCount].img);
    nextCard.setAttribute('src', cards[cardCount].img);
    cardCount++;
    hideCards();
    }
}

/* ---- winner logic ---- */

function checkWinner() {
    if (winner === 7) {
        alertEl.textContent = 'WINNER!'
        winnerClip.play();
        document.getElementById('higher').style.display = "none";
        document.getElementById('lower').style.display = "none";
        document.getElementById('restart').style.display = "block";
    }
}

function gameOver() {
    if (cardCount === 52) {
        alertEl.textContent = `GAMEOVER`
        partyClip.play();
        document.getElementById('higher').style.display = "none";
        document.getElementById('lower').style.display = "none";
        document.getElementById('restart').style.display = "block";
    }
}

function hideCards() {
    if (cardCount === 10) {
        document.getElementById('0').style.display = "none";
        document.getElementById('1').style.display = "none";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        document.getElementById('5').style.display = "none";
        document.getElementById('6').style.display = "none";
        document.getElementById('7').style.display = "none";
        document.getElementById('8').style.display = "none";
    }
    if (cardCount === 19) {
        document.getElementById('9').style.display = "none";
        document.getElementById('10').style.display = "none";
        document.getElementById('11').style.display = "none";
        document.getElementById('12').style.display = "none";
        document.getElementById('13').style.display = "none";
        document.getElementById('14').style.display = "none";
        document.getElementById('15').style.display = "none";
        document.getElementById('16').style.display = "none";
        document.getElementById('17').style.display = "none";
    }
    if (cardCount === 28) {
        document.getElementById('18').style.display = "none";
        document.getElementById('19').style.display = "none";
        document.getElementById('20').style.display = "none";
        document.getElementById('21').style.display = "none";
        document.getElementById('22').style.display = "none";
        document.getElementById('23').style.display = "none";
        document.getElementById('24').style.display = "none";
        document.getElementById('25').style.display = "none";
        document.getElementById('26').style.display = "none";
    }
    if (cardCount === 37) {
        document.getElementById('27').style.display = "none";
        document.getElementById('28').style.display = "none";
        document.getElementById('29').style.display = "none";
        document.getElementById('30').style.display = "none";
        document.getElementById('31').style.display = "none";
        document.getElementById('32').style.display = "none";
        document.getElementById('33').style.display = "none";
        document.getElementById('34').style.display = "none";
        document.getElementById('35').style.display = "none";
    }
}

function render() {
    shuffle();
    createPlayingDeck(cards);
}

function start() {
    scores = {
        drinks: 0,
        winStreak: 0,
    },
    winner = 0,
    cardCount = 1,
    render ();
}

/* ---- modal functions---- */

function howTo() {
    $('#my-modal').modal('show')
}

/* ---- reset functions---- */

function resetWinStreak() {
    scores.winStreak = 0;
    winner = 0;
    winStreakEl.innerHTML = scores.winStreak;
}

function restart() {
    var div = document.getElementById('cards');
    div.remove();
    scores = {
        drinks: 0,
        winStreak: 0,
    },
    resetWinStreak();
    drinksEl.innerHTML = scores.drinks;
    alertEl.innerHTML = '';
    cardCount = 1;
    document.getElementById('higher').style.display = "block";
    document.getElementById('lower').style.display = "block";
    document.getElementById('restart').style.display = "none";
    start();
    partyClip.pause();
}


