function getMoveName(argMoveId){
    if(argMoveId == 2 || 3){
      return 'papier' || 'nożyce';
}
function displayResult(argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove);{

    if(( argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
    ( argComputerMove === 'papier' && argPlayerMove === 'nożyce') || 
    ( argComputerMove === 'nożyce' && argPlayerMove === 'kamień')) {
    printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove === argPlayerMove){
    printMessage('Remis!');
    }   
    else {
    printMessage('Porażka');
    }   
let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

    /*if(randomNumber == '1'){
    computerMove = 'kamień';
    }
    else  if(randomNumber == '2'){
    computerMove = 'kamień';
    }
    else if(randomNumber == '3'){
    computerMove = 'kamień';
    }*/

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

    /*if(playerInput == '1') {
    playerMove = 'kamień';
    }
    else if(playerInput == '2') {
    playerMove = 'papier';
    }
    else if(playerInput == '3') {
    playerMove = 'nożyce';
    }*/

printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove)
