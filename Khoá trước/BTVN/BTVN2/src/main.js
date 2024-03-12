// Bài 1
function kiemtrakq1() {
    let Numbers=[document.getElementById("N1").value,document.getElementById("N2").value,document.getElementById("N3").value];
    let Max=Math.max.apply(Math,Numbers);
    let Min=Math.min.apply(Math,Numbers);
    alert(`Giá trị lớn nhất: ${Max} \n Giá trị nhỏ nhất: ${Min}`);
};
// Bài 3
function kiemtrakq2() {
    let a=document.getElementById("_a_").value;
    let b=document.getElementById("_b_").value;
    let c=document.getElementById("_c_").value;
    let Delta= b*b-4*a*c;
    if (Delta<0) {alert("Phương trình vô nghiệm");}
    else if (Delta==0) {
        let No2= -1*b/(2*a);
        alert(`Phương trình có nghiệm kép là x = ${No2}`)
    }
    else {
        let square_root_Delta = Math.sqrt(Delta);
        let x1= (-1*b+square_root_Delta)/(2*a);
        let x2= (-1*b-square_root_Delta)/(2*a);
        alert(`Phương trình có 2 nghiệm là\nx1 = ${x1}\nx2= ${x2}`);
    }
};
//  Bài 4
console.log("Bài 4");
let object= {
    No1: "Bảo",
    No2: "Dũng",
    No3: "Trung",
    No4: "Phúc",
    No5: "Thịnh",
    No6: "thầy Vũ"};
console.log(Object.keys(object),Object.values(object));
object.No7= "thầy Hiếu";
console.log(Object.keys(object),Object.values(object));
object.No7= "thầy Vũ";
console.log(Object.keys(object),Object.values(object));
delete object.No6;
console.log(Object.keys(object),Object.values(object));
// Bài 5
console.log("Bài 5");
let array= ["Bảo","Dũng","Trung","Phúc","Thịnh","thầy Vũ"];
console.log(array);
array.push("thầy Hiếu");
console.log(array);
array[6]="thầy Vũ";
console.log(array);
array.splice(5,1);
console.log(array);

