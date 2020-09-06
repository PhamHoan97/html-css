document.getElementById("demo").innerHTML = 5 + 6;

// Declare variables : let / var / const 
var x = 12;
x = 13;
console.log(x);

const y = 12;
// Error y = 5;
console.log(y);

let name = "hoan";
console.log(name);
let a = 12,
    b = 4;

let c = a / b;

console.log(c);

// Object 
var person = {
    firstName: "Hoan",
    lastName: "Pham",
    age: 12
}
var person =  JSON.parse(
    {
        "employees":[
          {"firstName":"John", "lastName":"Doe"},
          {"firstName":"Anna", "lastName":"Smith"},
          {"firstName":"Peter", "lastName":"Jones"}
        ]
    }
)
    {
        "firstName": "Hoan"
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName.toLowerCase());

var string1 = "hoan111";
var string2 = "pham111";
console.log(string1 + string2);


// Array 
var fruits = [
    'orange', 'apple'
];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.toString());
console.log(fruits.join("*"));
console.log(fruits.pop()); // delete last element
console.log(fruits.push("banana"));
console.log(fruits[0]);
console.log(fruits.length);
// vi tri them vao va so phan tu bi loai di 
console.log("Su dung splice");
fruits.splice(2, 0, "Lemon", "Kiwi");
var removed = fruits.splice(0, 2, "Lemon", "Kiwi");
console.log(fruits);
console.log(removed);
// sap xep thu tu 
console.log(fruits.sort());


// Function
var mul = multiplication(4, 3);

function multiplication(a, b) {
    return a * b;
}
console.log(mul);

// This is comment 
// Way1:function declaration
function displayHTML() {
    // Get id and display html
    document.getElementById("name").innerHTML = "HoanPhamA1";
    // alert(1);
}

var callbacks = [];
// selt invoke -> avoid name conflict
(function() {
    // var i = 0;
    for (let i = 0; i < 5; i++) {
        callbacks.push(function() {
            return i;
        });
    }
})();
console.log(callbacks.map(function(cb) { return cb(); }));

var callbacks1 = [];
for (var i = 0; i < 5; i++) {
    callbacks1.push(i);
}
console.log(callbacks1);

// https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
function bar() {
    return 3;
}
console.log(bar); // result function 
console.log(bar()) // 3

// function expression 
var bar1 = function() {
    return 111111;
};
console.log(bar1); // ham -> thi co ()
console.log(bar1()); //ket qua

// Array
// Map : sua thuoc tinh cua doi tuong 
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);
var results = numbers1.map((value, index, array) => {
    return value * 2;
});

function myFunction(value) {
    return value * 2;
}
console.log(results);

// Filter :  loc lay 1 so doi tuong
// loc so chan 
var evenNumber = numbers1.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumber);

// Reduce : nhan vao 1 mang va tra ra 1 gia tri duy nhat

var sum = numbers1.reduce((preValue, currValue, currIndex, array) => {
    return preValue + currValue;
}, 0);
console.log(sum);


const topics = [{
        topic: "ReactJS",
        posts: [{ postID: "id1", title: "title1" }, { postID: "id2", title: "title2" }]
    },
    {
        topic: "Vue.js",
        posts: [{ postID: "id3", title: "title3" }, { postID: "id4", title: "title4" }]
    }
];

// 2 vong lap 

var alltopics = topics.reduce((acc, currValue) => {
    return [...acc, ...currValue.posts]
}, []);
console.log(alltopics);

// 
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}