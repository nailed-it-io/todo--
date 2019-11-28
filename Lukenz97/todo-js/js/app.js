window.onload = function(){
    let b = window.localStorage.getItem("todo");
    if(b === undefined || b === null){
        window.localStorage.setItem("todo", JSON.stringify(new Array)); // prazan niz
        b = JSON.stringify(new Array);
    }
    fillList(JSON.parse(b));
}
function myFunction(event){
    event.preventDefault();
    const a = document.getElementById("input-todo").value; // pravimo konstantu koja uzima vrednosti onog sto smo ukucali 
    let b = JSON.parse(window.localStorage.getItem("todo"));// pravimo promenljivu koja ucitava vrednosti iz local-storage-a kao objekat(niz)
    b.push([a, false]); //a stavljamo u b
    window.localStorage.setItem("todo", JSON.stringify(b)); // stavljamo u local storage taj niz sa novim elemtnom koji smo uneli
    fillList(b);// popunili listu sa itemom koji smo uneli
    document.getElementById("input-todo").value = '';// cistimo input 
}
function fillList(list){
    if(list === undefined || list === null || list === "")
        return;
    let lista = document.getElementById("lista")
    while (lista.hasChildNodes()) {  
        lista.removeChild(lista.firstChild); // brisemo prethodne vrednosti iz niza
      }
    for(let i = 0; i < list.length; i++) {
        document.getElementById("lista").appendChild(createListItem(list[i][0], list[i][1], i));
    }
}
function deleteItem(id){
    let s = id.split("_");
    let i = parseInt(s[1]);
    let b = JSON.parse(window.localStorage.getItem("todo"));
    b.splice(i,1)
    window.localStorage.setItem("todo", JSON.stringify(b));
    fillList(b);



}
function showAll(){
    let b = JSON.parse(window.localStorage.getItem("todo"));
    fillList(b);
}
function showActive(x){
    let b = JSON.parse(window.localStorage.getItem("todo"));
    let c = new Array;
    for(let i = 0; i < b.length; i++) {
        if(b[i][1] === !x){
            c.push(b[i]);
        }
    }
    fillList(c);
}
function checkedItem(id){ // id = "item_x"
    let s = id.split("_");
    let i = parseInt(s[1]);
    let b = JSON.parse(window.localStorage.getItem("todo"));
    b[i][1] = !b[i][1]
    window.localStorage.setItem("todo", JSON.stringify(b));
    if(b[i][1] === true){
        document.getElementById(id).style.background = 'navajowhite'
    }else {
        document.getElementById(id).style.background = 'white'
    }
}
function clearAll(){
    window.localStorage.setItem("todo", JSON.stringify(new Array));
    let lista = document.getElementById("lista")
    while (lista.hasChildNodes()) {  
        lista.removeChild(lista.firstChild); // brisemo prethodne vrednosti iz niza
      }
}
function clearCompleted(){
    let b = JSON.parse(window.localStorage.getItem("todo"));
    for(let i = 0; i < b.length; i++){
        if(b[i][1] === true){
            b.splice(i,1);
            i--;
        }
    }
    window.localStorage.setItem("todo", JSON.stringify(b));
    fillList(b);
}
function createListItem(text, isChecked, index){
    var div_1 = document.createElement("div");
    div_1.setAttribute('class',"input-group border");
    div_1.id = "item_" + index
    if(isChecked === true){
        div_1.style.background = 'navajowhite'
    }else {
        div_1.style.background = 'white'
    }
    
    var div_2 = document.createElement("div");
    var textnode1 = document.createTextNode(text);
    div_2.appendChild(textnode1);

    div_1.appendChild(div_2);

    var div_3 = document.createElement("div");
    div_3.setAttribute('class',"input-group-append right");

    var div_4 = document.createElement("button");
    div_4.setAttribute('class',"btn btn-outline-secondary");
    div_4.setAttribute('type',"button");
    var textnode2 = document.createTextNode("check");
    div_4.appendChild(textnode2);
    div_4.setAttribute('onclick', 'checkedItem("item_' + index + '")')

    var div_5 = document.createElement("button");
    div_5.setAttribute('class',"btn btn-outline-secondary dropdown-toggle dropdown-toggle-split");
    div_5.setAttribute('type',"button");
    div_5.setAttribute('data-toggle',"dropdown");
    div_5.setAttribute('aria-haspopup',"true");
    div_5.setAttribute('aria-expanded',"false");
    
    div_3.appendChild(div_4);
    div_3.appendChild(div_5);

    var div_6 = document.createElement("div");
    div_6.setAttribute('class',"dropdown-menu");

    var a_1 = document.createElement("a");
    a_1.setAttribute('class',"dropdown-item");
    var textnode3 = document.createTextNode("check");
    a_1.appendChild(textnode3);
    a_1.setAttribute('onclick', 'checkedItem("item_' + index + '")')

    var a_2 = document.createElement("a");
    a_2.setAttribute('class',"dropdown-item");
    var textnode4 = document.createTextNode("delete");
    a_2.setAttribute('onclick', 'deleteItem("item_' + index + '")')
    a_2.appendChild(textnode4);

    div_6.appendChild(a_1);
    div_6.appendChild(a_2);

    div_3.appendChild(div_6);
    div_1.appendChild(div_3);

    return div_1;
}
