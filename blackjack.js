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

    //initalize game start buttons
hitMeButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

//New Game setup 
newGameButton.addEventListener ('click', function() { 
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


//create the deck 

function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push( card );
        }
    }
    return deck;
}



    //card functions 
    


    function shuffleDeck(deck) {
        for (let i = 0; i < deck.length; i++) {
          let swapIdx = Math.trunc(Math.random() * deck.length);
          let tmp = deck[swapIdx];
          deck[swapIdx] = deck[i];
          deck[i] = tmp;
        }
      }
    
      function getNextCard() {
        return deck.shift();
    }

      function showStatus() {
        if (!gameStarted) {
          textArea.innerText = 'Welcome to Blackjack!';
          return;
        }
        
        let dealerCardString = '';
        for (let i=0; i < dealerCards.length; i++) {
          dealerCardString += getCardString(dealerCards[i]) + '\n';
        }
        
        let playerCardString = '';
        for (let i=0; i < playerCards.length; i++) {
          playerCardString += getCardString(playerCards[i]) + '\n';
        }

        updateScores();

        function getCardString(card) {
            return card.value + ' of ' + card.suit;
        }
        

    console.log("Welcome to Blackjack");
    console.log("You are dealt...")
    console.log(" " + getCardString(playerCards[0]));
   console.log(" " + getCardString(playerCards[1]));
    }

