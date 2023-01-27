
//Create a "close" button and append it to each list item
const myNodeList = document.getElementsByName("Li");
var i;
for (i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Ajouter un "checked" pour valider la tâche
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'Li') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Créer une nouvelle tâche en cliquant sur le bouton "Ajouter" 
function newElement() {
    var li = document.createElement("li");
}
