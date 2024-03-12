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
const containerModal = document.getElementById("container-modal");

const btnModal = document.getElementById("btn_add");
const btnCancel = document.getElementById("btn_cancel");
const inputSearch = document.getElementById("search_input");
const input_Add_Note = document.getElementById("input_Add_Note");
for (let i = 0; i < data.length; i++) {
  // createElement: tạo 1 thẻ html: ("thẻ html")
  const menuItem = document.createElement("li");
  const wrapTitleTodo = document.createElement("div");
  const inputCheckBox = document.createElement("input");
  const titleTodo = document.createElement("h1");
  const line = document.createElement("div");
  const btnEdit = document.createElement("button");
  btnEdit.innerText = "edit";
  const btndelete = document.createElement("button");
  btndelete.innerText = "delete";
  titleTodo.innerText = data[i].title;
  btnEdit.addEventListener("click", function editItem() {
    showModal();
    input_Add_Note.value = data[i].title;
    console.log(i, data[i].id, data[i].title);
    // thay đổi title trong list
  });

  btndelete.addEventListener("click", function deleteItem() {
    data.splice(i, 1);
    console.log(data);
  });
  inputCheckBox.type = "checkbox";
  titleTodo.style.width = "100%";
  inputCheckBox.addEventListener("change", () => {
    if (inputCheckBox.checked == true) {
      titleTodo.style = "color: #999; text-decoration: line-through;";
    } else {
      titleTodo.style = "color: #000; text-decoration: none;";
    }
  });

  // classList.add: add element cho 1 class
  menuItem.classList.add("menu_toDo_item");
  wrapTitleTodo.classList.add("wrap_titleTodo");
  line.classList.add("line");

  // appendChild: thể thẻ con vào thẻ cha, <thẻ cha>.appendChild(<Thẻ con>)
  wrapTitleTodo.appendChild(inputCheckBox);
  wrapTitleTodo.appendChild(titleTodo);
  wrapTitleTodo.appendChild(btnEdit);
  wrapTitleTodo.appendChild(btndelete);
  menuItem.appendChild(wrapTitleTodo);
  menuItem.appendChild(line);
  menuList.appendChild(menuItem);
}

function showModal() {
  if (containerModal.style.display === "none") {
    containerModal.style.display = "flex";
  } else {
    containerModal.style.display = "none";
  }
}

btnModal.addEventListener("click", showModal);
btnCancel.addEventListener("click", showModal);
// includes, indexOf, search.target.value
inputSearch.addEventListener("change", function search(search) {
  if (data.includes()) {
    // indexOf
  }
});
