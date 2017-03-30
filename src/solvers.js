/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  
  var solution = undefined;
  var board = new Board({n:n});

  var toggleToSolution = function(row, r) {
    if (r < n) {
      for (var i = 0; i < n; i++) {
        board.togglePiece(r, i)
        if (!board.hasAnyRooksConflicts()) {
          return toggleToSolution(board.rows()[r + 1], (r + 1));
        }
        board.togglePiece(r,i);
      }  
    }
    solution = board.rows(); 
  };

  toggleToSolution(board.rows()[0], 0)

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  debugger;
  
  var solutionCount = 0;
  var board = new Board({n:n});

  var toggleToSolution = function(row, r) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if (!board.hasAnyRooksConflicts()) {
        if (r + 1 < n) {
          toggleToSolution(board.rows()[r+1], r + 1);
        } else {
          solutionCount++;  
        }
      }
      board.togglePiece(r,i);
    }
  };


  toggleToSolution(board.rows()[0], 0)

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionCount));
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
