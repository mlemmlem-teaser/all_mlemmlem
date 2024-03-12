let n=Number(prompt("nhập n"))
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "1";
    }
    console.log(row);
}
let Array__ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let Array_after = [];

for (let i in Array__) {
    if (Array__[i] % 2 !== 0) {
        Array_after.push(Array__[i]);
    }
}
Array__=Array_after;
console.log(Array__);
function Ex3() {
    let Alert1 = prompt("AAAAA");
    if (Alert1=="Yes"||Alert1=="yes") {
        let Alert1_1= prompt("BBBBB");
        if (Alert1_1=="Yes"||Alert1_1=="yes") {
            let Alert2_1= prompt("DDDDD")
        }
        else if (Alert1_1=="No"||Alert1_1=="no") {
            let Alert2_2= prompt("CCCCC")
        }
    }
    else if (Alert1=="No"||Alert1=="no") {
        let Alert1_2= prompt("EEEEE");
        if (Alert1_2=="Yes"||Alert1_2=="yes") {
            let Alert2_3= prompt("FFFFF")
        }
        else if (Alert1_2=="No"||Alert1_2=="no") {
            let Alert2_4= prompt("GGGGG")
        }
    }
};

