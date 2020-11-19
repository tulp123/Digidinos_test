//var, let và const
var t=10;
{
    let t = 6;
}

var x=20;
{
    const x = 7;
}

//arrow functions
const x = (x,y) => x+y;

//Classes
class Car {
    constructor(name, type, year) {
        this.name = name;
        this.type = type;
        this.year = year;
    }
}

let myCar = new Car("Audi A4", "Xe tốt", 2020);
let myCar1 = new Car("Vin Fast", "Chất lượng", 2019);

document.getElementById("").innerHTML = myCar.name + "" + myCar.type + "" + myCar.year;


//Promise object
let myPromise = new Promise (function(mySuccessful, myError){
    setTimeout(function() {mySuccessful("I love you !!"); }, 300);
});
myPromise.then(function(value) {
    document.getElementById("").innerHTML = value;
});

//the symbol type
const person = {
    firstName: "Jhon",
    LastName: "Lee",
    age: 54,
    job: "Marketing"
};
let id = new symbol("id");
person.id = 123456;

//defult parameter values
function myFunction(x, y = 10) {
    return x + y;
}
myFunction(15);

//array.find
var numbers = [4, 6, 8, 9, 12, 15, 18, 19];
var first = numbers.find(search);

function search(value) {
    return value > 18;
}

//array.findIndex
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(search1);

function search1(value) {
    return value > 19;
}

//new number properties check number
Number.isInteger(10);
Number.isInteger(10.5);

//isFinite
isFinite(10/0) + isFinite(10/1);
Number.isNaN(4,132);
Number.isNaN(0/0);
Number.isNaN(Infinity*0);

