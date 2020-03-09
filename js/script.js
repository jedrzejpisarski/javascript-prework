{
  let btnRock = document.getElementById('play-rock');
  btnRock.addEventListener('click', function() { playGame(1) });
  
  let btnPaper = document.getElementById('play-paper'); 
  btnPaper.addEventListener('click', function() { playGame(2) });
  
  let btnScissors = document.getElementById('play-scissors');
  btnScissors.addEventListener('click',  function() { playGame(3) });
    
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

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
  }
}

playGame(3);
