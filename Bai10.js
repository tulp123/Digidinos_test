//Base call back function
var keywords = ["street", "man", "woman", "black"];

keywords.forEach(function (eachName, index) {
    console.log(index + 1 + ". " + eachName);
});

//how to function do
function createPassword(callback) {
    return callback('free');
}
var password = createPassword(function (secret_key) {
    return secret_key;
});

alert(password);

//callback object
var student = {
    name: 'tule',
    setName: function (name) {
        this.name = name;
    }
};

function test(callback) {
    callback('Nguyễn Văn Nam');
};

test(student.setName);
document.write(student.name);
document.write('<br/>');
document.write(window.name);

//multiple 
function One(cb) {
    console.log("one");
    cb.forEach(s => s.apply());
}

function Two() {
    console.log("two");
}

function Three() {
    console.log("three");
}

One(Two, Three);
