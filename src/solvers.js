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

  var obj = {};
  obj.n = n;
  obj.board = new Board({n:n});
  obj.board.togglePiece(0,0);
  obj.toggles = [[0,0]];
  obj.children = [];


  var checkToggles = function(object) {
    if (object.toggles.length === object.n) { 
      if (object.board.hasAnyRooksConflicts() === false) {
        solution = object.board.rows();
      }
    } else {
      addToggle(object);
    } 
  }

  var addToggle = function(object) {
    var toggles = object.toggles;
    var newX = toggles[toggles.length - 1][0] + 1;
    var newY = toggles[toggles.length - 1][1] + 1;
    
    console.log(object);
    console.log(solution);
    object.board.togglePiece(newX, newY);
    object.toggles.push([newX, newY]);
  } 

  while(solution === undefined) {
    checkToggles(obj);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
