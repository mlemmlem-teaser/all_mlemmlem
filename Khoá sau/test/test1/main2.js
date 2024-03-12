function extractNumberAndLetters(str) {
  const match = str.match(/^(\d*)([a-z]*)([a-z]*)$/);
  const [, num, letters1, letters2] = match;
  return [parseInt(num) || 0, letters1, letters2];
}
function customSort(arr) {
  return arr.sort((a, b) => {
    const [numA, lettersA1, lettersA2] = extractNumberAndLetters(a);
    const [numB, lettersB1, lettersB2] = extractNumberAndLetters(b);

    if (numA !== numB) {
      return numA - numB;
    } else if (lettersA1 !== lettersB1) {
      return lettersA1.localeCompare(lettersB1);
    } else {
      return lettersA2.length - lettersB2.length;
    }
  });
}

const inputArray = [
  "x",
  "cxb",
  "xzcy",
  "d",
  "z",
  "1a",
  "9b",
  "9z",
  "9p",
  "100c",
  "asalpl",
  "zmon",
];
const sortedArray = customSort(inputArray);
console.log(sortedArray);
