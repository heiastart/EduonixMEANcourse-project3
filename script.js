// Counter to decide whose turn (player1 or player2) it is
// p1 is odd, p2 is even (using modulus)
let count = 0;
const player1 = 'X';
const player2 = 'O';


// Function to clear all the cells in the table (clear out the X and O) when one of the players wins
function resetCells() {
  let cells = document.querySelectorAll('td');

  cells.forEach(element => {
    element.innerText = '';
  })
}

/* // Or, with getElementsByTagName(td);
function resetCells() {
  let cells = document.getElementsByTagName('td');

  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
} */


function checkWinner() {
  //======================================
  // GETTING CELL VALUES, I.E 'X' OR 'O'
  //======================================
  // Row 1
  let cell_1x1 = document.getElementById('cell_1-1').innerText;
  let cell_1x2 = document.getElementById('cell_1-2').innerText;
  let cell_1x3 = document.getElementById('cell_1-3').innerText;

  // Row 2
  let cell_2x1 = document.getElementById('cell_2-1').innerText;
  let cell_2x2 = document.getElementById('cell_2-2').innerText;
  let cell_2x3 = document.getElementById('cell_2-3').innerText;

  // Row 3
  let cell_3x1 = document.getElementById('cell_3-1').innerText;
  let cell_3x2 = document.getElementById('cell_3-2').innerText;
  let cell_3x3 = document.getElementById('cell_3-3').innerText;

  //======================================
  // CHECKING ROWS
  //======================================
  // Winner on row 1
  if (cell_1x1 === player1 && cell_1x2 === player1 && cell_1x3 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_1x1 === player2 && cell_1x2 === player2 && cell_1x3 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  // Winner on row 2
  if (cell_2x1 === player1 && cell_2x2 === player1 && cell_2x3 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_2x1 === player2 && cell_2x2 === player2 && cell_2x3 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  // Winner on row 3
  if (cell_3x1 === player1 && cell_3x2 === player1 && cell_3x3 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_3x1 === player2 && cell_3x2 === player2 && cell_3x3 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  //======================================
  // CHECKING COLUMNS
  //======================================
  // Winner on col 1
  if (cell_1x1 === player1 && cell_2x1 === player1 && cell_3x1 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_1x1 === player2 && cell_2x1 === player2 && cell_3x1 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  // Winner on col 2
  if (cell_1x2 === player1 && cell_2x2 === player1 && cell_3x2 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_1x2 === player2 && cell_2x2 === player2 && cell_3x2 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  // Winner on col 3
  if (cell_1x3 === player1 && cell_2x3 === player1 && cell_3x3 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_1x3 === player2 && cell_2x3 === player2 && cell_3x3 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  //======================================
  // CHECKING DIAGONALS
  //======================================
  // Winner on diag 1
  if (cell_1x1 === player1 && cell_2x2 === player1 && cell_3x3 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_1x1 === player2 && cell_2x2 === player2 && cell_3x3 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }

  // Winner on diag 2
  if (cell_1x3 === player1 && cell_2x2 === player1 && cell_3x1 === player1) {
    document.getElementById('winnerIs').innerText = 'Player 1';
    resetCells();
  }
  else if (cell_1x3 === player2 && cell_2x2 === player2 && cell_3x1 === player2) {
    document.getElementById('winnerIs').innerText = 'Player 2';
    resetCells();
  }
}


//======================================
// MAIN GAMEPLAY FUNCTION
//======================================
function cellWasClicked(id) {
  count++;
  if (count % 2 != 0) {
    document.getElementById(id).innerText = player1;
  }
  else {
    document.getElementById(id).innerText = player2;
  }
  checkWinner();
}

