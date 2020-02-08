// // // // REPLACE ELEMENT

// // // // Create Element
// // // const newHeading = document.createElement('h2');
// // // // Add id
// // // newHeading.id = 'task-title';
// // // // New text node
// // // newHeading.appendChild(document.createTextNode('Task List'));

// // // // Get the old heading
// // // const oldHeading = document.getElementById('task-title');
// // // //Parent
// // // const cardAction = document.querySelector('.card-action');

// // // // Replace
// // // cardAction.replaceChild(newHeading, oldHeading);

// // // // REMOVE ELEMENT
// // // const lis = document.querySelectorAll('li');
// // // const list = document.querySelector('ul');

// // // // Remove list item
// // // lis[0].remove();

// // // // Remove child element
// // // list.removeChild(lis[3]);

// // // // CLASSES & ATTR
// // // const firstLi = document.querySelector('li:first-child');
// // // const link = firstLi.children[0];

// // // let val;

// // // // Classes
// // // val = link.className;
// // // val = link.classList;
// // // val = link.classList[0];
// // // link.classList.add('test');
// // // link.classList.remove('test');
// // // val = link;

// // // // Attributes
// // // val = link.getAttribute('href');
// // // val = link.setAttribute('href', 'http://google.com');
// // // link.setAttribute('title', 'Google');
// // // val = link.hasAttribute('title');
// // // link.removeAttribute('title');
// // // val = link;

// // // console.log(val);

// //==================icon playing======================//

// // const e1 = document.querySelectorAll(".delete-item");

// // const e2 = e1[3].firstElementChild;
// // e1[4].appendChild(e2);

// // console.log(e1[3].firstElementChild);



// // const newfont = e1[3];
// // //newfont.innerHTML = '<i class="fas fa-coffee"></i>';

// // newfont.innerHTML = '<i class="fad fa-coffee"></i>';

// // console.log(newfont);



// //=============remove element===========//

// // let e1 = document.querySelector('.collection');
// // let e2 = e1.parentElement;
// // console.log(e1);

// // e1.remove();

// // console.log(e1);



// // e2.appendChild(e1);

// let e1 = document.querySelector('.clear-tasks');

// console.log(e1);

// //method 1

// // e1.addEventListener("click", onclick);

// //  function onclick(alibaba) {
// //      console.log(alibaba.target);

// //     alibaba.target.innerText = "yahoo";
    
// //     alibaba.preventDefault();
// //  }




// // console.log(e1.onclick);
// // e1.onclick = "alert(1)";
// // console.log(e1.onclick);

// // function myfunc(e){

// //     console.log("===============alibaba");
// //     console.log(e.target);
    

// //         //  alibaba.target.innerText = "yahoo";
        
// //         //  preventDefault();

// // }

// function handler1(event) {
//     alert('Button capturin');
//     console.log(event);
    
    
//   };

//   function handler2() {
//     alert('body bubling');
//   }
//   function handler3() {
//     alert('body cap');
//   }

 
//   e1.addEventListener("click", e=>alert("button bubling")); // Thanks!
//   e1.addEventListener("click", e=>alert("button capturing"));
   
//   var e2 = e1.parentElement;
//   console.log(e2);
//  document.body.addEventListener("click", e=>alert("body bubling"),);
//   document.body.addEventListener("click", e=>alert("body capturing"),true);

//   e2.addEventListener("click", e=>alert("middle bubling"));


var elm1 = document.querySelector(".collection");
console.log(elm1);

elm1.addEventListener("click", elm1Handler);

function elm1Handler(e){
  console.log("click is done");

  var elmClicked = e.target;
  if (elmClicked.className ==="fa fa-remove" || elmClicked.className ==="delete-item secondary-content"){
      elm2Remove = elmClicked.closest("li");
      elm2Remove.remove();
  }
  
}

//----------------------------------------


var ar = [];
ar[0]= 'ram';



localStorage.setItem('name',JSON.stringify(ar));

var isItaArray = localStorage.getItem("name");

var abc;
abc =[];


console.log(Array.isArray(JSON.parse(isItaArray)));

















