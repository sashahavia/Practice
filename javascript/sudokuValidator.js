function sudokuValidator(solution) {
  for (var i = 0; i < 9; i++) {
    var curRow = [];
    for (var j = 0; j < 9; j++) {
      if (curRow.indexOf(solution[i][j]) > -1) return false;
      curRow.push(solution[i][j]);
    }
  }
  for (var k = 0; k < 9; k++) {
    var curCol = [];
    for (var m = 0; m < 9; m++) {
      if (curCol.indexOf(solution[m][k]) > -1) return false;
      curCol.push(solution[m][k]);
    }
  }
  for (var p = 0; p < 9; p += 3) {
    for (var q = 0; q < 9; q += 3) {
      var curSquare = [];
      for (var l = p; l < p + 3; l++) {
        for (var n = q; n < q + 3; n++) {
          if (curSquare.indexOf(solution[l][n]) > -1) return false;
          curSquare.push(solution[l][n]);
        }
      }
    }
  }
  return true;
}

console.log(
  sudokuValidator([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
); //should be true

console.log(
  sudokuValidator([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5],
  ])
); //should be false
