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
    name = name + value + "<br>";
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
var a = fruits.lastIndexOf("Orange");

//JSON.parse
var obj = JSON.parse('{"Pen", "Apple", "Apple pen"}');

//JSON.stringfy
var obj = {name: 'Tu', age: '30', city: 'Ha Noi'};
var myJSON = JSON.stringify(obj);

//Date.now
var count = Date.now();

//Getters
var person = {
    firstName: "Le",
    lastName: "Tu",
    country: "Việt Nam",
    get information(){
        return this.firstName + " " + this.lastName + " " + this.country;
    }
};
document.getElementById("").innerHTML = person.information;

//Getters and setters
var person = {
    firstName: "Le",
    lastName: "Tu",
    language: "NO",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    }
};

person.lang = "english";
document.getElementById("").innerHTML = person.lang;

//Object.defineProperty
var employee = {
    id: "1",
    Name: "Mai Quang Nam",
    language: "Chinese",
}
Object.defineProperty(employee, "language", {
    value:"EN",
    writable: true,
    enumerable: true,
    configurable: true
});

var property = "";
for(var x in employee){
    property += property[x] + "<br/>"
}
document.getElementById("").innerHTML = property;
    
