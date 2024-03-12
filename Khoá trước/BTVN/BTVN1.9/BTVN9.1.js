function verify() {
    let profile=document.forms["profile"];
    let v_name= profile["v_name"].value;
    let v_age=profile["v_age"].value;
    let v_PN=profile["v_PN"].value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;
    let x=0;
    if (v_name=="" || v_name.length>=30) {
        x+=1;
    }
    if (v_age==0||v_age==null) {
        x+=1;
    }
    if (v_PN.length>=12||v_PN.length<=9) {
        x+=1;
    }
    if (male==false&&female==false&&other==false) {
        x+=1;
    }
    
    if (x!=0) {
        return false;
        alert("Kiếm tra lại thông tin")
    }
    else {alert("Congratulations!!!")}
}