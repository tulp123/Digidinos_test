//trim
var str = "    Đời chỉ là thế thôi    ";
alert(str.trim());

//isArray
function Fruits (){
    var fruits = ['Apple', 'Bannana', 'Mango'];
    var x = document.getElementById("a");
    x.innerHTML = Array.isArray(fruits);
}

//forEach
var name = "";
var numbers = ['Hoàng', 'Giang', 'Sơn'];
numbers.forEach(myFunction);

function myFunction(value){
    name = name + value + "<br>";S
}

//map
var numbers1 = [40,6,7,8,9,10];
var numbers2 = numbers1.map(myFunction);

function myFunction(value){
    value = value *2;
}

//filter
var numbers = [40,8,9,2,3];
var find = numbers.filter(myFunction);
    function myFunction(value) {
        value = value > 19;
    }

//reduce
var numbers = [45, 6, 8, 9];
var sum = numbers.reduce(numbers);
function myFunction(total, value) {
    return total + value;
}

//every 
var numbers = [40,8,9,2,3];
var allOver20 = numbers.every(myFunction);
function myFunction(value) {
    return value >20;
} 

//index
var fruits = ["Banana","Apple","Orange"];
var a = fruits.indexOf("Apple");

//last index of
var fruits = ["Banana", "Apple", "Orange"];
var a = fruits.indexOf("Orange");

//JSON.parse
var obj = JSON.parse('{"Pen", "Apple", "Apple pen"}');

//JSON.stringfy
var obj = {name: 'Tu', age: '30', city: 'Ha Noi'};
var myJSON = JSON.stringify(obj);