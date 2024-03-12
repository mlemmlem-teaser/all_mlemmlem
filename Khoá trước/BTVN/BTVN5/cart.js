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
    // const items_cart = document.getElementById("items-cart-container");
    // const item = document.createElement("div");
    // const item_img = document.createElement("img");
    // const item_name = document.createElement("div");
    // const item_name_upper = document.createElement("div");
    // const item_name_lower = document.createElement("div");
    // item_img = products.data[i].image;
    // item_name_upper = products.data[i].name;
    // item_name_lower = products.data[i].name;
    // item_name_lower.style.fontSize="30px";
    // item_name.style="display:flex;flex-direction:column;";
    // item.classList.add("items-cart");
    // item_name.appendChild(item_name_upper);
    // item_name.appendChild(item_name_lower);
    // item.appendChild(item_img);
    // item.appendChild(item_name);
    // items_cart.appendChild(item);
    const items_cart= document.getElementById("items-cart-container");
    const Items = document.createElement("div");
    const imageItems = document.createElement("img");
    const nameItems = document.createElement("div");
    imageItems.src = products.data[i].image;
    imageItems.style="height:90px;border-radius:20px;"
    nameItems.innerText = products.data[i].name;
    Items.classList.add("items-cart");
    Items.appendChild(imageItems);
    Items.appendChild(nameItems);
    items_cart.appendChild(Items);
    document.getElementById("number-items").innerText=`You have ${i} items in your cart`;
  }  