function add(n) {
  // Let the currying begin!
  let fn = function(x) {
    return add(n + x);
  };

  fn.valueOf = function() {
    return n;
  };

  return fn;
}

console.log(add(3)(4));
