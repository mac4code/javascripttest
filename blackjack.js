
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



let deck = [];

for (let suitsIndex=0; suitsIndex<suits.length; suitsIndex++){
    for(let valuesIndex = 0; valuesIndex < values.length; valuesIndex++){
        deck.push(values[valuesIndex] + " of " + suits[suitsIndex]);
    }
}

for (let i=0; i < deck.length; i++){
console.log(deck[i]);

};


let playerCards = [deck[0], deck[1], deck[2]]

    console.log("Welcome to Blackjack");
    console.log("You are dealt...")
    console.log(" " + playerCards[0]);
    console.log(" " + playerCards[1]);
    console.log(" " + playerCards[2]);


