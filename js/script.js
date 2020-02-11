let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else if(playerInput == '3'){
    playerMove = 'nożyce';
  }

printMessage('Twój ruch to: ' + playerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}

let playerMove = 'nieznany ruch';

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');

}
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
}
if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
}
if( computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('Remis!');
}


if( computerMove == 'kamień' && playerMove == 'Nożyce'){
    printMessage('Porażka');
}
if( computerMove == 'Nożyce' && playerMove == 'Papier'){
    printMessage('Porażka');
}
if( computerMove == 'Papier' && playerMove == 'Kamień'){
    printMessage('Porażka');
}

