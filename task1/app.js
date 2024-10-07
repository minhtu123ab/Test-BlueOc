const stringMaxLengthFrequency = (arr) => {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const lengthStr = str.length;
    if (frequency[lengthStr]) {
      frequency[lengthStr] = [...frequency[lengthStr], str];
    } else {
      frequency[lengthStr] = [str];
    }
  }
  let maxLengthFrequency = [];
  for (let i in frequency) {
    maxLengthFrequency =
      maxLengthFrequency.length < frequency[i].length
        ? [...frequency[i]]
        : maxLengthFrequency;
  }
  return maxLengthFrequency;
};

//Test case:

console.log(stringMaxLengthFrequency(["a", "ab", "abc", "cd", "def", "gh"]));
// Expected output: ['ab', 'cd', 'gh']

console.log(
  stringMaxLengthFrequency(["aa", "abcde", "abc", "cd", "def", "ghk"])
);
// Expected output: ['aa', 'cd']

console.log(
  stringMaxLengthFrequency(["apple", "samsung", "nokia", "mobile", "mi"])
);
// Expected output: ['apple', 'nokia', 'mobile']

console.log(stringMaxLengthFrequency(["cat", "dog", "pig", "cow", "rat"]));
// Expected output: ['cat', 'dog', 'pig', 'cow', 'rat']

console.log(stringMaxLengthFrequency(["elephant"]));
// Expected output: ['elephant']

console.log(stringMaxLengthFrequency([]));
// Expected output: []

console.log(stringMaxLengthFrequency(["x", "xyz", "pqrst", "abcd", "w"]));
// Expected output: ['x', 'w']
