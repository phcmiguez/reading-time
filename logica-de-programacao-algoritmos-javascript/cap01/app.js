
let txtField = document.getElementById('txtInput').value;
let answer = document.getElementById('answer');
const btnGo = document.getElementById('btnGo');

function displayTextInput() {
   answer.textContent = (txtField !== null) || (txtField !== undefined) 
   ? txtField 
   : 'Empty field';
}

btnGo.addEventListener('click', displayTextInput);