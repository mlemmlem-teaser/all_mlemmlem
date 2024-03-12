const arrowFunction = () => {
    alert("siuuuuuuuuuuuuuu")
}
arrowFunction();
// setTimeout("function", "time"); chạy 1 lần
// setInterval("function", "time"); chạy vv

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    break
}



arrowFunction

vd:

method: forEach

const arr = [
  {
    firstName: "Vũ",
    lastName: "Nguyen",
    age: 12,
  },
  {
    firstName: "Vũ",
    lastName: "Nguyen",
    age: 13,
  },
  {
    firstName: "Vũ",
    lastName: "Nguyen",
    age: 14,
  },
  {
    firstName: "Vũ",
    lastName: "Nguyen",
    age: 15,
  },
];

// forEach: vòng lặp: lặp tất cả giá trị có trong mảng
// ==> trả về giá trị của mảng, index, currentArray

// map: vòng lặp: lặp tất cả giá trị có trong mảng
// ==> trả về một mảng mới, index, currentArray

arr.forEach((item, index, currentArray) => {
  console.log("item>>>: value của mảng", item.age);
  console.log("index>>>: vị trí item của mnagr", index);
  console.log("currentArray>>>: array cũ", currentArray);
});

const firstName = arr.map((item, index, currentarray) => {
  return {
    firstName: item.firstName,
    tuoi: item.age,
  };
});

console.log("firstName>>>", firstName);
callback

vd:

arr.forEach((item, index, currentArray) => {
  console.log("item>>>: value của mảng", item.age);
  console.log("index>>>: vị trí item của mnagr", index);
  console.log("currentArray>>>: array cũ", currentArray);
});

const forEachFake = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    const object = {
      item: arr[index],
      index: index,
      arr: arr,
    };
    console.log(object);
    return object;
  }
};

const getForEachFake = forEachFake(arr);

console.log("getForEachFake", getForEachFake);
const getFullName = (firstName, lastName) => {
  return firstName, lastName;
};

const getInfo = (age, firstName, lastName) => {
  const fullname = getFullName(firstName, lastName);
  console(fullname, age);
};

method: setTimeout, setInterval