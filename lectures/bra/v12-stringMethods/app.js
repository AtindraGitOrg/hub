/* jshint -W104 */
/* jshint -W119 */



example();

function example(){
'use strict';

let str1 ="ram";
let str2 ="shyam";
let str3 = "ram and shyam and are brothers and there age is 23";
let age = 23;

let val = str1+" " + str2;

 val = str1.length;


 val = str1.concat(str2);

 val = str1.toLowerCase();

 val = str2.toUpperCase();

 val=str1[2];

 val = str2.indexOf("s");

 val = str2.lastIndexOf("a");

 val = str1.charAt(2);

 val= str1.substring(1,3);


 val= str3.split("and");



 //==================tempelate literal=============//


let html = `<h1>ok this is first heading ${val}</h1>`;

document.body.innerHTML = html;





console.log(val);

}