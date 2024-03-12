const data = [
    {
      id: 1,
      title: "Việc 1",
    },
    {
      id: 2,
      title: "Việc 2",
    },
    {
      id: 3,
      title: "Việc 3",
    },
    {
      id: 4,
      title: "Việc 4",
    },
  ];

const menuList = document.getElementById("menu_todo");
function reset() {
  for (let i = 0; i < data.length; i++) {
    // createElement: tạo 1 thẻ html: ("thẻ html")
    const menuItem = document.createElement("li"); 
    const wrapTitleTodo = document.createElement("div");
    const inputCheckBox = document.createElement("input");
    const titleTodo = document.createElement("h1");
    const line = document.createElement("div");
    const del = document.createElement("del");
    titleTodo.innerText = data[i].title;
    inputCheckBox.type = "checkbox";
    inputCheckBox.addEventListener("change", (e)=> {
      if (inputCheckBox.checked===true) {
        del.appendChild(titleTodo);
      }
      else {
        wrapTitleTodo.appendChild(titleTodo);
      }
    })
    console.log(inputCheckBox.checked);
    titleTodo.style.width = "100%";
    // classList.add: add element cho 1 class
    menuItem.classList.add("menu_toDo_item");
    wrapTitleTodo.classList.add("wrap_titleTodo");
    line.classList.add("line");
    // appendChild: thể thẻ con vào thẻ cha, <thẻ cha>.appendChild(<Thẻ con>)
    wrapTitleTodo.appendChild(inputCheckBox);
    wrapTitleTodo.appendChild(titleTodo);
    wrapTitleTodo.appendChild(del);
    menuItem.appendChild(wrapTitleTodo);
    menuItem.appendChild(line);
    menuList.appendChild(menuItem);
  
  }
  
};
reset();

function CMon() {
  document.getElementById("container-modal").style.display= "flex";
};
function CMoff() {
 document.getElementById("container-modal").style.display ="none";
 document.getElementById("input_Add_Note").value= "";
};
function CMoff_apply() {
  document.getElementById("container-modal").style.display ="none";
  data_add = {};
  data_add.id =data.length+1;
  data_add.title= document.getElementById("input_Add_Note").value;
  data.push(data_add);
  document.getElementById("input_Add_Note").value= "";
  let x =document.getElementById("menu_todo");
  x.innerHTML="";
  reset();
}


  