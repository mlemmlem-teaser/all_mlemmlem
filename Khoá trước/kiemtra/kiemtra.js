let profile=document.getElementById("profile");
profile.addEventListener("submit", (x) => {
    x.preventDefault();
    let fullname = document.getElementById("fullname").value;
    let age = document.getElementById("age").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
    if ((fullname.length>=10 && fullname.length<=60) && (age>=6 && age<=150) && (phonenumber.length==9 || phonenumber.length==10) &&(male==true || female==true || other==true)) {alert("Congratulations");}
    else {location.reload();alert("Kiếm tra lại thông tin")}
})
console.log(submit);