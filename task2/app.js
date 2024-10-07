const sumTowNumberMax = (arr) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  if (arr.length < 2) return "Array must have at least 2 elements";
  for (let i of arr) {
    if (i > firstMax) {
      secondMax = firstMax;
      firstMax = i;
    } else if (i > secondMax) {
      secondMax = i;
    }
  }
  return firstMax + secondMax;
};

//Test case:

console.log(sumTowNumberMax([1, 2, 3, 4, 5]));
// Expected output: 9 (5 + 4)

console.log(sumTowNumberMax([10, 20, 30, 40, 50]));
// Expected output: 90 (50 + 40)

console.log(sumTowNumberMax([-1, -2, -3, -4, -5]));
// Expected output: -3 (-1 + -2)

console.log(sumTowNumberMax([0, 0, 0, 0, 0]));
// Expected output: 0 (0 + 0)

console.log(sumTowNumberMax([100]));
// Expected output: Array must have at least 2 elements

console.log(sumTowNumberMax([]));
// Expected output: Array must have at least 2 elements

console.log(sumTowNumberMax([1, 1, 1, 1, 2]));
// Expected output: 3 (2 + 1)

console.log(sumTowNumberMax([5, 5, 5, 5, 5]));
// Expected output: 10 (5 + 5)

console.log(sumTowNumberMax([3, 7, 3, 7, 1]));
// Expected output: 14 (7 + 7)
