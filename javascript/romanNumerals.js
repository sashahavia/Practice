function solution(number) {
  var value = 0;
  var romanStr = '';
  var roman = [
    { M: 1000 },
    { CM: 900 },
    { D: 500 },
    { CD: 400 },
    { C: 100 },
    { XC: 90 },
    { L: 50 },
    { XL: 40 },
    { X: 10 },
    { IX: 9 },
    { V: 5 },
    { IV: 4 },
    { I: 1 },
  ];
  for (var i = 0; i < roman.length; i++) {
    for (var key in roman[i]) {
      while (value + roman[i][key] <= number) {
        value += roman[i][key];
        romanStr += key;
      }
    }
  }
  return romanStr;
}

console.log(solution('XLIX'));
