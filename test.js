
let headerText = document.getElementById('h1');
let removeText = document.getElementById('removeme');
let textArea = document.getElementById('text-area');
let buttonText = document.getElementById('clickme');


let okButton = document.getElementById('clickme');

okButton.addEventListener('click', function(){

textArea.innerText = 'you clicked the button';
headerText.innerText = 'BOOM !';
buttonText.innerText = 'Kapowya';
removeText.style.display = 'none';
headerText.style.fontSize = "105";

});