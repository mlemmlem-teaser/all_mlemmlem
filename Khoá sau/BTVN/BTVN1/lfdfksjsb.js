var strings = ["cat", "dog", "hat", "mat", "java"];
var at = strings.filter((item) => item.includes("at"));
console.log(at);

const playerProfile = [
  { name: "Ronaldo", team: "MU" },
  { name: "Messi", team: "Barca" },
  { name: "Neymar", team: "PSG" },
];
const playerProfile_MOD = playerProfile.reduce((siu, siuu) => {
  siu[siuu.name] = { team: siuu.team };
  return siu;
}, {});
console.log(playerProfile_MOD);

//scrolltotop siêu mượt
let mybutton = document.getElementById("myBtn");

window.onscroll = function mlem() {
  scrollFunction();
  scrollFunction2();
}


function scrollFunction() {
  if (document.body.scrollTop > 200 ||document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  position = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollSpeed = position / 100;
  if (scrollSpeed <= 500) {
    scrollSpeed = 500;
  }
  if (position >= 500) {
    window.scrollBy(0, -1 * scrollSpeed);
    setTimeout(topFunction, 20);
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }
}
//scroll bth
let siuuu = document.getElementById("myBtn2");
// window.onscroll = function() {scrollFunction2()};
function scrollFunction2() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    siuuu.style.display = "block";
  } else {
    siuuu.style.display = "none";
  }
}
function topFunction2() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
