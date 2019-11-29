var faker =require('faker');
var n=0;
while(n-->10){
var productName = faker.commerce.productName();
var price = faker.commerce.price();

console.log(productName);
console.log(price);
// n++;
}