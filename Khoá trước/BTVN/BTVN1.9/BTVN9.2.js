function check() {
    let fullname = document.getElementById("fullname").value;
    let age = document.getElementById("age").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
    if (fullname.length>=30||fullname.length=="") {
        document.getElementById("t_name").innerText="X"
    }
    else { document.getElementById("t_name").innerText="✔"
    }
    if (age>=150||age==0) {
        document.getElementById("t_age").innerText="X"
    }
    else { document.getElementById("t_age").innerText="✔"
    }
    if (phonenumber.length>=12||phonenumber.length<=9) {
        document.getElementById("t_PN").innerText="X"
    }
    else { document.getElementById("t_PN").innerText="✔"
    }
}
let profile=document.getElementById("profile");
profile.addEventListener("submit", check())