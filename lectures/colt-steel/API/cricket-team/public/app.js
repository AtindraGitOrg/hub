let count = 1;

let tableElm = document.querySelector("table");


tableElm.addEventListener("click", clickTd);


var cross = document.createElement("i");
cross.innerHTML = ('<i class="fas fa-times"></i>');


function clickTd (e){

    if (count <= 9 && count % 2 !== 0) {
        var cross = document.createElement("i");
        cross.innerHTML = ('<i class="fas fa-times"></i>');
        var td = e.target.closest("td");
        console.log(e.target);
        td.appendChild(cross);
    }


    if (count <= 9 && count % 2 === 0) {
        var circle = document.createElement("i");
        circle.innerHTML = ('<i class="far fa-circle"></i>');
        var td = e.target.closest("td");
        console.log(e.target);
        td.appendChild(circle);
    }

count++;
}