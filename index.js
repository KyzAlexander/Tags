const tagList = document.querySelector(".tagList");
const addedTag = document.querySelector(".addedTag");
const addBtn = document.querySelector(".addBtn");
const checkbox = document.querySelector("#checkboxReadonly");

const onAddTag = () => {
  const tag = document.createElement("li");
  tag.className = "tag";
  tag.innerText = addedTag.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = "X";

  deleteBtn.addEventListener("click", () => deleteBtn.parentElement.remove());
  addedTag.value = "";

  tagList.append(tag);
  tag.append(deleteBtn);

  listTags();
};

const onCheckboxClick = () => {
  const buttonDel = document.querySelectorAll(".deleteBtn");
  if (checkbox.checked) {
    addedTag.disabled = true;
    addBtn.disabled = true;
    buttonDel.forEach((btn) => {
      btn.disabled = true;
    });
  } else {
    addedTag.disabled = false;
    addBtn.disabled = false;
    buttonDel.forEach((btn) => {
      btn.disabled = false;
    });
  }
};

const listTags = () => {
  const tag = document.querySelectorAll(".tag");
  const list = [];
  tag.forEach((elem) => list.push(elem.textContent));
  return console.log(list.map((e) => e.slice(0, e.length - 1)));
};

const newList = (array) => {
  const tag = document.querySelectorAll(".tag");
  tag.forEach((elem, i) => (elem.innerHTML = array[i]));
};

const init = () => {
  addBtn.addEventListener("click", onAddTag);
  checkbox.onchange = onCheckboxClick;
};

init();
