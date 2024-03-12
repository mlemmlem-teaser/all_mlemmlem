/**
 * 
let student = {
  //Chuỗi: String
  first_name: "Vũ",
  last_name: "Nguyễn",
  level: "Developer",
  //số: number
  age: 23,
  //boolean
  student: false,
  //object
  address: {
    city: "Hồ Chí Minh",
    contry: "Viet Nam",
  },

  //Array
  number: [2, 3, 4, 5, 6],

  "Họ Và Tên": "Nguyễn Hoàng Vũ",

  //   function
  getFullName() {
    return student.last_name + student.first_name;
  },
};
//01010100101000

// READ: đọc giá trị object.

// <tên biến.key.key...key>
console.log(student);

console.log(student.last_name + student.first_name);

console.log(student.address.city);

console.log(typeof student);

// Object ==> mảng: Array

console.log(Object.keys(student), Object.values(student));

//UPDATE: ==> first_name => Hoàng Vũ

student.first_name = "Hoàng Vũ";
console.log(student.first_name);

student.age = 32;
console.log(student.age);

//DELETE: delete

delete student["student"];
delete student.age;
delete student.address;
delete student.number;

console.log(student);

//CREATE:
// status

student.status = true;

console.log(student);

console.log(student["Họ Và Tên"]);
 */
/**
 * 
 * 
// Array

let array = [
  2, 3, 4, 5, 6, 7, 3, 4, 5, 56, 1, 1, 2, 43, 4, 2, 2, 3, 3, 4, 4, 2, 23, 4, 5,
  5, 6, 7, 87, 8,
];

//Read:

// <Tên biến[<index>]>
// console.log(array);

// console.log(array[4]);
// for: vòng lặp.

//Create:
// push.

// array.push(9);

// console.log(array);

//Update:
// <tên biến[<index>] = "...">
// array[0] = 1;
// console.log(array);

// delete
//splice:
// <array.splice<2 tham số>("vị trí bắt đầu xoá","số lượng phần tử mình muốn xoá")>
// array.splice(0, 1);
// array.splice(4, 3);

console.log(array);

 */
//Dom
