// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// Outter height and width ========================1====================
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points===============================2=======================
val = window.scrollY;
val = window.scrollX;

// Location Object==========================3=========================
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect=====================================4====================
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object==========================5=========================
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;



console.log(val);
