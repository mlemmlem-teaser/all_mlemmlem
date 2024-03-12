/**
 * let student = {
  first_name: "Khang",
  last_name: "Như",
  level: 999,
  age: 20000,
  student: true,
  address: {
    city:"Hà Nội",
    country: "Việt Nam",

  },
  randomnumber: [1,2,3,4,5,6,7,8,9,0],
  fullname () {
    return this.first_name + this.last_name;
  }
}
// console.log(Object.keys(student),Object.values(student));
// delete student.level;
student.status = true;
 */
let array = [1,2,3,4,5,6,7,8,9,0,"string",true,{key1: "bủh bủh",key2: "lmao"}, function () {console.log("bủh bủh lmao")},100,200];
console.log(array[array.length -1]);