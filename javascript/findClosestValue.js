class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return helperFunc(tree, target, Infinity);
}
function helperFunc(tree, target, closest) {
  let currentNode = tree;
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

const test = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

// console.log(test)

console.log('1: ', findClosestValueInBst(test, 100)); // 100
console.log('2: ', findClosestValueInBst(test, 208)); // 208
console.log('3: ', findClosestValueInBst(test, 4500)); // 4500
console.log('4: ', findClosestValueInBst(test, 4501)); // 4500
console.log('5: ', findClosestValueInBst(test, -70)); // -51
console.log('6: ', findClosestValueInBst(test, 2000)); // 1001
console.log('7: ', findClosestValueInBst(test, 6)); // 5
console.log('8: ', findClosestValueInBst(test, 30000)); // 55000
console.log('9: ', findClosestValueInBst(test, -1)); // 1
console.log('10: ', findClosestValueInBst(test, 29751)); // 55000
console.log('11: ', findClosestValueInBst(test, 29749)); // 4500
