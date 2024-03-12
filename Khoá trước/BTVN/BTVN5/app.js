let products = {
  data: [
    {
      name: "MATRIX 1999 DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/matrix-1999-1.jpg",
    },

    {
      name: "RAEDA DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Raeda-Deck.jpg",
    },

    {
      name: "MUSTY DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Musty-Deck.jpg",
    },

    {
      name: "TRISTIQUE DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Tristique-deck.jpg",
    },

    {
      name: "FIELD TRIP DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Fied-Trip-deck.jpg",
    },

    {
      name: "TARO RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-5.jpg",
    },

    {
      name: "NEON RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-1.jpg",
    },

    {
      name: "ORANAGE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-2.jpg",
    },

    {
      name: "BLUE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-3.jpg",
    },

    {
      name: "WHITE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-4.jpg",
    },

    {
      name: "CUTIS MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cutis.jpg",
    },

    {
      name: "CAM VU MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cam-vu.jpg",
    },

    {
      name: "SON NGUYEN MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/son-nguyen.jpg",
    },
  ],
};

const user = document.getElementById("user");
const btnLogout = document.getElementById("btn_logout");
const btnLogin = document.getElementById("btn_login");
const userLocalStorage = JSON.parse(localStorage.getItem("user"));

if (!userLocalStorage) {
  window.location.href = "../login/login.html";
} else {
  user.innerText = userLocalStorage.email;

  if (userLocalStorage) {
    btnLogin.style.display = "none";
    btnLogout.style.display = "flex";
  } else {
    btnLogin.style.display = "flex";
    btnLogout.style.display = "none";
  }
}

btnLogout.addEventListener("click", function logoutFunction() {
  localStorage.clear();
  user.innerText = "";
  btnLogout.href = "../login/login.html";
  btnLogout.style.display = "none";
});

for (let i=0; i<=products.data.length;i++) {
  const productItems= document.getElementById("products");
  const Items = document.createElement("div");
  const imageItems = document.createElement("img");
  const priceItems = document.createElement("div");
  const nameItems = document.createElement("div");
  const buyItems = document.createElement("button");
  Items.style= "width: 100%;padding: 20% 20%;height: 400px;display: flex;flex-direction: column;background-color: rgb(128, 128, 128,0.9);border-radius: 50px;";
  imageItems.style ="width: 100%;";
  priceItems.innerText="Price: " + products.data[i].price;
  imageItems.src = products.data[i].image;
  nameItems.innerText = products.data[i].name;
  buyItems.innerText="Buy";
  buyItems.style="width: 80%;background-color: red;height: 2em;position: relative;bottom: -5%;left:10%;";
  Items.classList.add("product-small")
  Items.appendChild(nameItems);
  Items.appendChild(imageItems);
  Items.appendChild(priceItems);
  Items.appendChild(buyItems);
  productItems.appendChild(Items);


}
