//call gán trị cho hàm khởi tạo
function initProduct(name, price){
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    initProduct.call(this, name, price);
}
function Hat(name, price) {
    initProduct.call(this, name, price);
}

var food = new Food('Xoài','6.000');
var hat = new Hat('Red Hat', '70.000');
console.log(food);
console.log(hat);

//call gọi hàm anonymous
(function(name){
    console.log(name);
}).call(this, 'Đợi một giấc mơ');

function showMessage(message)
{
    this.message = message;
    return this;
}
 
var blog = showMessage.call({"name": "Le Phuong Tu"}, "18 tuổi");
console.log(blog); 

//apply 
var sayHello = function(name, message){
    console.log(message+name);
};
sayHello.apply(sayHello, ['Tú','Lê']);

