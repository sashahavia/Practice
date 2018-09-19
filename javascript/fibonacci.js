// const math = require('mathjs')
// const f = n => Math.round(Math.pow(math.phi, n)/math.sqrt(5))
// for(let i = 0; i < 20; i++){
//  console.log(f(i))
// }

// function fib(n){
//   if(n === 0){
//     return 0
//   }
//   if(n === 1){
//     return 1
//   }
//   return fib(n-2) + fib(n-1)
// }

// for(let i = 0; i < 20; i++){
//  console.log(fib(i))
// }

// Memoization
// function getNthFib(n) {
//   let resultsCache = {};
//   function innerFibonacci(n) {
//     let result;
//     if (resultsCache[n] !== undefined) {
//       result = resultsCache[n];
//     } else {
//       if (n < 2) result = n;
//       else result = innerFibonacci(n - 1) + innerFibonacci(n - 2);

//       resultsCache[n] = result;
//     }
//     return result;
//   }
//   return innerFibonacci(n);
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i + ' : ' + getNthFib(i));
// }

function getNthFib(n) {
  let a = 0,
    b = 1,
    c;
  if (n === 0) {
    return a;
  }

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

for (let i = 0; i < 20; i++) {
  console.log(i + ' : ' + getNthFib(i));
}
