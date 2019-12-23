// // let person = {
// //     name:"zak",
// //     age : 20,
// //     friends: ["codey","roney"],
// //     codey:{
// //         age:25,
// //         lang:"english",
// //     }

// // }

// // //console.log(person.name);

// // //console.log(person.friends[1]);

// // console.log(person.codey.age);


// let val ;

// val = window.outerHeight;

// // val = window.screen;
// console.log(val);

// console.log(window.location);

// history.go(-2);




// function calling(abc,yes,no){
//     if(abc) above18()
//     else
//     below18()
// }

// function above18(){
//     console.log("can enter the site");
// }

// function below18(){
//     console.log("stop");
// }

// calling();

//calling(true, "above188","below188");


//Arrow function

// let func =(a,b) => a+b;



// console.log(func(2,3));

//console.log(func2);

// var arguments = [1, 2, 3];
// var arr = () => arguments[0];

// console.log(arr()); // 1

// function foo(n,m) {
//   var f = () => arguments[1] ; // foo's implicit arguments binding. arguments[0] is n
//   return f();
// }

// console.log(foo(3,2));  // 6


//arrow function this relation

// 'use strict';

//  // does not create a new scope
//   let i= 10;
//   let b= () => {console.log(this.i, this)};
//   let c= function() {
//     console.log(this.i, this);
//   };


// b(); // prints undefined, Window {...} (or the global object)
// c(); // prints 10, Object {...}



let values={
    a:2,
    b:3,
    reduce :function (c,d){
        return(c(45,65));
    }
}



let total = values.reduce(function (a, b) {
    return a+b;
  //  console.log(b);

  }, 0);

  console.log(total);




