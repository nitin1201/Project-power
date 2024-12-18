// 06. Write a JavaScript program to get integers in the range (x, y) using recursion.
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function range(x, y) {
  if (x == y - 1) {
    return x;
  }
  a.push(x + 1);
  return range(x + 1, y) ? a : "";
}
let a = [];
console.log(range(2, 9));

// Output : [3, 4, 5, 6, 7, 8]
