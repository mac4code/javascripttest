
let textArea = document.getElementById('info-area');
let signature = document.getElementById('sig-text');
let headerText = document.getElementById('header-text');
let newGameButton = document.getElementById('new-game-button');
let hitMeButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitMeButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener = ('click', function() {
    textArea.innerText = 'Game Has been Started...';
    newGameButton.style.display = 'none';
    hitMeButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});
{
//let deck = createDeck();
}
function getNextCard(){
    return deck.shift();

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace","King", "Queen", "Jack", "Ten", "Nice", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];


function createDeck(numberOfDecks){
    deck = []; // clearing the decks
    for (let suitsIndex=0; suitsIndex<suits.length; suitsIndex++){
        for(let valuesIndex = 0; valuesIndex < values.length; values++){
            let card = {
                suit: suits[suitsIndex],
                value: value[valuesIndex]
            };
            deck.push(card);
    }
    return deck;
    }

    function getCardString(card){
    return card.value + 'of' + card.suit;

}


let playerCards = [getNextCard(),getNextCard() ]

    console.log("Welcome to Blackjack");
    console.log("You are dealt...")
    console.log(" " + getCardString(playerCards[0]));
    console.log(" " + getCardString(playerCards[1]));

//game start 




    

}

}
