/* jshint -W104 */

let user ={
    name:"rakesh",
    age:23,

};

console.time('abc');

console.log(user);
console.table(user);

console.timeEnd('abc');


//==========strings============//
let val;
let str1 = "ravi";
let str2 = "kumar";

val = "helo my name is " + str1 +" "+ str2 +" and my age is "+user.age +" that\"s it";
let age = user.age;

//=========default functions===========//
console.log(val.length);

console.log(user.age);
//=========create element=========//
let header=document.createElement("h1");
document.body.appendChild(header);
header.innerText=val;


