function validateForm() {
  var Email__ = document.forms["myForm"]["Email__"].value;
  var password = document.forms["myForm"]["Password__"].value;
  var email = document.forms["myForm"]["email"].value;
  if (!pattern.test(Email__)) {
    return false;
  }
  if (password.length <= 8) {
    alert("Mật khẩu phải trên 8 ký tự");
    return false;
  }
  if (Email__ == "") {
    alert("Email không được để trống \n Example@gmail.com");
    return false;
  }
}
