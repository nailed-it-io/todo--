window.onload = function() {
  let toDoList = window.localStorage.getItem("todo");
  if (!toDoList) {
    window.localStorage.setItem("todo", JSON.stringify(new Array())); // prazan niz
    toDoList = JSON.stringify(new Array());
  }
  fillList(JSON.parse(toDoList));
};

function myFunction(event) {
  event.preventDefault();
  const inputValue = document.getElementById("input-todo").value; // pravimo konstantu koja uzima vrednosti onog sto smo ukucali
  let toDoList = JSON.parse(window.localStorage.getItem("todo")); // pravimo promenljivu koja ucitava vrednosti iz local-storage-a kao objekat(niz)
  toDoList.push([inputValue, false]); //a stavljamo u b
  window.localStorage.setItem("todo", JSON.stringify(toDoList)); // stavljamo u local storage taj niz sa novim elemtnom koji smo uneli
  fillList(toDoList); // popunili listu sa itemom koji smo uneli
  document.getElementById("input-todo").value = ""; // cistimo input
}

function fillList(list) {
  if (!list) return;
  let toDoList = document.getElementById("todo-list");
  while (toDoList.hasChildNodes()) {
    toDoList.removeChild(toDoList.firstChild); // brisemo prethodne vrednosti iz niza
  }
  for (let i = 0; i < list.length; i++) {
    document
      .getElementById("todo-list")
      .appendChild(createListItem(list[i][0], list[i][1], i));
  }
}

function deleteItem(id) {
  const splitId = id.split("_");
  const index = parseInt(splitId[1]);
  let toDoList = JSON.parse(window.localStorage.getItem("todo"));
  toDoList.splice(i, 1);
  window.localStorage.setItem("todo", JSON.stringify(b));
  fillList(toDoList);
}

function showAll() {
  let toDoList = JSON.parse(window.localStorage.getItem("todo"));
  fillList(toDoList);
}

function showActive(showAct) {
  let toDoList = JSON.parse(window.localStorage.getItem("todo"));
  let tempArray = new Array();
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i][1] === !showAct) {
      tempArray.push(toDoList[i]);
    }
  }
  fillList(tempArray);
}

function checkedItem(id) {
  // id = "item_x"
  const splitId = id.split("_");
  const index = parseInt(splitId[1]);
  let toDoList = JSON.parse(window.localStorage.getItem("todo"));
  toDoList[index][1] = !toDoList[index][1];
  window.localStorage.setItem("todo", JSON.stringify(toDoList));
  document.getElementById(id).style.background =
    toDoList[index][1] === true ? "navajowhite" : "white";
}

function clearAll() {
  window.localStorage.setItem("todo", JSON.stringify(new Array()));
  let toDoList = document.getElementById("todo-list");
  while (toDoList.hasChildNodes()) {
    toDoList.removeChild(toDoList.firstChild); // brisemo prethodne vrednosti iz niza
  }
}

function clearCompleted() {
  let toDoList = JSON.parse(window.localStorage.getItem("todo"));
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i][1] === true) {
      toDoList.splice(i, 1);
      i--;
    }
  }
  window.localStorage.setItem("todo", JSON.stringify(toDoList));
  fillList(toDoList);
}

function createListItem(text, isChecked, index) {
  let itemEle1 = document.createElement("div");
  itemEle1.setAttribute("class", "input-group border");
  itemEle1.id = "item_" + index;
  itemEle1.style.background = isChecked === true ? "navajowhite" : "white";

  let itemEle2 = document.createElement("div");
  let textnode1 = document.createTextNode(text);
  itemEle2.appendChild(textnode1);

  itemEle1.appendChild(itemEle2);

  let itemEle3 = document.createElement("div");
  itemEle3.setAttribute("class", "input-group-append right");

  let itemEle4 = document.createElement("button");
  itemEle4.setAttribute("class", "btn btn-outline-secondary");
  itemEle4.setAttribute("type", "button");
  let textnode2 = document.createTextNode("check");
  itemEle4.appendChild(textnode2);
  itemEle4.setAttribute("onclick", 'checkedItem("item_' + index + '")');

  let itemEle5 = document.createElement("button");
  itemEle5.setAttribute(
    "class",
    "btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
  );
  itemEle5.setAttribute("type", "button");
  itemEle5.setAttribute("data-toggle", "dropdown");
  itemEle5.setAttribute("aria-haspopup", "true");
  itemEle5.setAttribute("aria-expanded", "false");

  itemEle3.appendChild(itemEle4);
  itemEle3.appendChild(itemEle5);

  let itemEle6 = document.createElement("div");
  itemEle6.setAttribute("class", "dropdown-menu");

  let itemEle7 = document.createElement("a");
  itemEle7.setAttribute("class", "dropdown-item");
  let textnode3 = document.createTextNode("check");
  itemEle7.appendChild(textnode3);
  itemEle7.setAttribute("onclick", 'checkedItem("item_' + index + '")');

  let itemEle8 = document.createElement("a");
  itemEle8.setAttribute("class", "dropdown-item");
  let textnode4 = document.createTextNode("delete");
  itemEle8.setAttribute("onclick", 'deleteItem("item_' + index + '")');
  itemEle8.appendChild(textnode4);

  itemEle6.appendChild(itemEle7);
  itemEle6.appendChild(itemEle8);

  itemEle3.appendChild(itemEle6);
  itemEle1.appendChild(itemEle3);

  return itemEle1;
}
