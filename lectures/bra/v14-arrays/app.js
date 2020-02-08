/* jshint -W104 */
/* jshint -W119 */



example();

function example(){
'use strict';


//=====decleration and assignment======//
const array1 = [12,15,98,76,45];

const array2 = new Array(22,45,67,98);

const array3 = new Array(2);

array3[0]="abc";

array3[1]=2;
array3[2]="bcd";



//console.log(typeof(array3[2]));


//=======methods for arrays===========//


//============= 1) length=============//

let val = array2.length;
console.log(val);


//=============  2)  Array.isArray() ========//


val = Array.isArray(array1);
console.log(val);


val = array1 + array2;
console.log(typeof(val));



}