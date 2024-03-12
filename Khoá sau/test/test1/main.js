const data = [
  { name: "mlemmlem01", pass: "mlemmlem001", tags: "abc,be,c,d,e" },
  { name: "mlemmlem02", pass: "mlemmlem002", tags: "e,f,g,sdah,i" },
  { name: "mlemmlem03", pass: "mlemmlem003", tags: "a,b,m,l,adsk" },
  { name: "mlemmlem04", pass: "mlemmlem004", tags: "w,e,c,dgfg,e" },
  { name: "mlemmlem05", pass: "mlemmlem005", tags: "a,b,ct" },
  { name: "mlemmlem06", pass: "mlemmlem006", tags: "a,b,s,xcd,e" },
  { name: "mlemmlem07", pass: "mlemmlem007", tags: "a,bxv,t,d,e" },
  { name: "mlemmlem08", pass: "mlemmlem008", tags: "zca,b,a,d,e" },
  { name: "mlemmlem09", pass: "mlemmlem009", tags: "a,cxzb,c,t,o" },
  { name: "mlemmlem10", pass: "mlemmlem010", tags: "x,cxb,xzcy,d,z" },
];
//sort các tags
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
data.forEach((e) => {
  const inputArray = e.tags.split(",");
  const sortedArray = customSort(inputArray);
});
//filter theo tags
function checkTag(Tag) {
  const dataAfter = [];
  data.forEach((e) => {
    if (e.tags.split(",").includes(Tag)) {
      dataAfter.push(e);
    }
    return dataAfter;
  });
}

const TagSearch = document.getElementById("Tag_search");
TagSearch.addEventListener("click", () => {
  const inputTag = prompt("Enter a tag:");
  const result = checkTag(inputTag);
  console.log(result);
});
