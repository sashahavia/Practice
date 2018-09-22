function add(a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();
  var result = [];

  for (var i = 0; a[i] >= 0 || b[i] >= 0; i++) {
    var sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

    if (!result[i]) {
      result[i] = 0;
    }

    var next = ((result[i] + sum) / 10) | 0;
    result[i] = (result[i] + sum) % 10;

    if (next) {
      result[i + 1] = next;
    }
  }

  return result.reverse().join('');
  //   return (Number(a) + Number(b)).toString(); // Fix me!
}

console.log(add(2, 3));
