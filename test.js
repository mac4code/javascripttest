function myFunction(message, anotherMessage){
    
    console.log(message, anotherMessage)
}

myFunction("Hello" +" " + 42);

function triplePlus(value){
let newValue = value + value + value;
return newValue;

}

console.log(triplePlus(3));


function mulitplymValue (mValue){
let xValue = mValue + mValue + mValue;
return xValue
}

console.log(mulitplymValue(5));
//creating objects
function changeCard(card){
card.suits = "clubs";

}
let card = {
suit:  "Hearts",
value: "Queen"
};

changeCard(card);
console.log(card.suit)