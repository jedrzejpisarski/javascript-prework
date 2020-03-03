{
const btn = ('Rock','Paper','Scissors'); 

  let btn = {
     Rock = document.getElementById('play-rock');
     Rock.addEventListener('click', function() { playGame(1) });

     Paper = document.getElementById('play-paper'); 
     Paper.addEventListener('click', function() { playGame(2) });

     Scissors = document.getElementById('play-scissors');
     Scissors.addEventListener('click',  function() { playGame(3) });
    }
  function playGame(playerInput) {
    clearMessages();
  
    function getMoveName(argMoveId){
        if(argMoveId == 1) return 'kamień';
        if(argMoveId == 2) return 'papier';
        if(argMoveId == 3) return 'nożyce';
    }
    
    function displayResult(argComputerMove, argPlayerMove) {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

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
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1); //2
    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
  }
}

playGame(3);
