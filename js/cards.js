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

var cardDeck =  [ 
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

function createPlayingDeck() {
    for (var i = 0; i < playingDeck.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/backs/blue.svg');
        cardElement.setAttribute('data-id', i);
        document.getElementById('playing-deck').appendChild(cardElement);
    }
}
createPlayingDeck();

function flipFirstCard() {
    this.setAttribute('src', playingDeck[0])
}

function compare(){
    var cardA = this.playingDeck[this.playingDeck.length-2],
        cardB = this.playingDeck[this.playingDeck.length-1];

    if ( value === "high") {
        return cardB >= cardA;
    } else {
        return cardB <= cardA;
    }
};


var drinks = [0,0,0,0,0];
function setDrinks() {
    for (var i = 0; i < drinks.length; i++) {
        var drinkElement = document.createElement('img');
        drinkElement.setAttribute('src', 'images/drinksImages/empty.png');
        drinkElement.setAttribute('data-id', i);
        document.getElementById('beverages').appendChild(drinkElement);
    }
}
setDrinks();
