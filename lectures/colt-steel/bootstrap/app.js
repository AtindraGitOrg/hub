
   
    let e1 = document.getElementsByClassName("dropdown-toggle");
    let e2 = e1[0];
    console.log(e2);
    
    
    
    
    e2.addEventListener('click',myFunction);

function myFunction(e) {
    
    
    let toggleE= document.getElementsByClassName("dropdown-menu")[0];
    let a1= toggleE.style.display;
    console.log(a1);

    if (a1!== "block")
    toggleE.setAttribute("style","display:block");

    else
    toggleE.setAttribute("style","display:none");
    
}
