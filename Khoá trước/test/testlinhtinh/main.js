// Local Storage
// CRUD: create, Read, Update, Delete
// ==> LocalStorage: được cấu tạo dựa trên Key và Value
// Key: công cụ để mình tương tác
// value: dữ liệu được lưu trự
// ==> kiểu giá trị JSON: [object object]
// JSON: strinify, parse
// Create to localStorage

Method: set('Key', 'Value')
let address = { region: "VN", street: "Nguyen Xi" };
let arrayNumber = [3, 4, 5, 123, 123, 123];

localStorage.setItem("age", 24);
localStorage.setItem("name", "Nguyeen Hoang Vu");
localStorage.setItem("student", false);
localStorage.setItem("number", arrayNumber);
localStorage.setItem("address", JSON.stringify(address));

// Method: get('Key')

console.log(localStorage.getItem("name"));
console.log(JSON.parse(localStorage.getItem("age")));
console.log(localStorage.getItem("student"));
console.log(JSON.parse(localStorage.getItem("address")));
let arrayNumberNew = localStorage.getItem("number");
// split: tách chuỗi thành 1 mảng ngăn cách với dấu đucowj truyền vào
const _arrayNumberNew = arrayNumberNew.split(",");
console.log(_arrayNumberNew, arrayNumberNew);

let string = "a c e g s ưe r=";
let _string = string.split(" ");

console.log(_string);

const btnDelete = document.getElementById("button_delete");
const btnDeleteAll = document.getElementById("button_delete_all");

btnDelete.addEventListener("click", function deleteItemLocalStorage() {
  //removeItem("key")
  localStorage.removeItem("student");
});
btnDeleteAll.addEventListener("click", function deleteAllItemLocalStorage() {
  // clear()
  localStorage.clear();
});
