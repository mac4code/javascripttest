
// //let productname = "John\'s Hammer:"
// //console.log(productName);

// let price = 5.00, price2 = 3.00;
// console.log(price + price2);


// class simpleCounter{
//      count(){
//         let count = 5;

//     for (let i = 1; i<= 10; i++){
//         document.write(i.toString() + '<br>')
//     }
//         console.log('All done!');
//     }

// }

// let count = new simpleCounter
// count.count();

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace","King", "Queen", "Jack", "Ten", "Nice", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];


function createDeck(numberOfDecks){
    deck = []; // clearing the decks
    for (let suitsIndex=0; suitsIndex<suits.length; suitsIndex++){
        for(let valuesIndex = 0; valuesIndex < values.length; valuesIndex++){
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

    let deck = createDeck();

}

function getNextCard(){
    return deck.shift();

}


let playerCards = [getNextCard(),getNextCard() ]

    console.log("Welcome to Blackjack");
    console.log("You are dealt...")
    console.log(" " + getCardString(playerCards[0]));
    console.log(" " + getCardString(playerCards[1]));
    console.log(" " + getCardString(playerCards[2]));


