const menu = ["rau xào", "thịt luộc", "gà rán"];
let i = menu.length;
const LCSTR = localStorage.getItem("menu");
localStorage.setItem("menu", JSON.stringify(menu));
function mlemmlem() {
  let CRUD = prompt("Nhập C-R-U-D");
  if (CRUD == "C") {
    menu[i] = prompt("Nhập món ăn");
    i++;
    localStorage.setItem("menu", JSON.stringify(menu));
    alert(`Món ${menu[i - 1]} đã được thêm vào menu`);
  } else if (CRUD == "R") {
    alert(LCSTR);
  } else if (CRUD == "U") {
    let changeDish = prompt("sửa tên");
    let i = menu.indexOf(changeDish);
    let mlemmlem__ = prompt("tên mới");
    menu[i] = mlemmlem__;
    localStorage.setItem("menu", JSON.stringify(menu));
  } else if (CRUD == "D") {
    let Delete = prompt("nhập tên món ăn muốn xóa:");
    let mlemmlem___ = menu.indexOf(Delete);
    menu.splice(mlemmlem___, 1);
    localStorage.setItem("menu", JSON.stringify(menu));
  }
}

//pokemon
const getPokemon = () => {
  const promises = [];

  for (let i = 1; i <= 50; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
    const Pokemon = {
        name: promises[i].name;
        type: promises[i].type
    }
  }
  console.log(promises);

};
getPokemon();
