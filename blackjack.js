// Card Variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace","King", "Queen", "Jack", "Ten", "Nice", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];


//DOM Variables
let headerText = document.getElementById('header-text');
let signature = document.getElementById('sig-text');
let textArea = document.getElementById('info-area');
let newGameButton = document.getElementById('new-game-button');
let hitMeButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');
let dealer = ['Michael Cavaliere', 'Beth Cavaliere', 'Marianne Cavaliere','Rick Cavaliere','Carey Cavaliere','Beth Rosson','Rob Rosson'];
//give random index from an array math.floor rounds down
let randomDealer = Math.floor(Math.random() * dealer.length); 


// Game Variables
let gameStarted = false,
gameOver = false,
playerWon = false,
dealerCards = [],
playerCards = [],
dealerScore = 0,
playerScore = 0,
deck = [];

hitMeButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener ('click', function() {
    //game setup 
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    //game creation 
    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    //ui stuff
    textArea.innerText = 'Game Has been Started...';
    newGameButton.style.display = 'none';
    hitMeButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    signature.innerText = 'Your dealer is ' + dealer[randomDealer];
    showStatus();
});


playerCards = [getNextCard(),getNextCard() ]

    console.log("Welcome to Blackjack");
    console.log("You are dealt...")
    console.log(" " + getCardString(playerCards[0]));
   console.log(" " + getCardString(playerCards[1]));


//create the deck 
function createDeck() {
    let deck = []; // clearing the decks
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++){
        for(let valueIndex = 0; valueIndex < values.length; valueIndex++){
            let card = {
                suit:  suits[suitIndex],
                value: values[valueIndex]
            };
            deck.push(card);
        }
    }
    return deck;
    }

    //card functions 
    function getNextCard(){
        return deck.shift();
    }

    function getCardString(card){
        return card.values + ' of ' + card.suit;
        }
    

function showStatus(){
    if(!gameStarted){
        textArea.innerText = 'Welcome to Blackjack!'
        return;
    }
    for (var i = 0; i < deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }

function shuffleDeck(deck){
    for (let index = 0; index < deck.length; index++) {
        let swapIndex = Math.trunc(Math.random() * deck.length);
        let temp = deck[swapIndex];
        deck[swapIndex] = deck[index];
        deck[index] = temp;
    }        
}

}
