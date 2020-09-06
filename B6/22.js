var x = document.getElementById("demo").innerHTML;
var y = document.getElementsByClassName("demoClass")[0].innerHTML;
var z = document.getElementsByTagName("h1")[0].innerHTML;
document.getElementById("color").style.color = "blue";
// di kem voi noi dung van ban va truoc do co createElement 
document.getElementById("append").append(document.createTextNode("Method append !"));
// document.getElementById("append").innerHTML = "Method innerHTML !"
console.log(x);
console.log(y);
console.log(z);

// Addtional content 
document.body.onload = addElement;

function addElement() {
    // create div 
    var newDiv = document.createElement("div");
    // give it content 
    var newContent = document.createTextNode("  Greeting!");
    // difference createTextNode vs innerHTML
    newDiv.appendChild(newContent);
    var afterDiv = document.getElementById("color");
    document.body.insertBefore(newDiv, afterDiv);
}

function remove111() {
    const parentNode = document.getElementById("removeChild");
    // var truy cap trong ca pham vi function, let trong vong lap 
    console.log(parentNode.children.length);
    for (let i = 0; i < parentNode.children.length; i++) {
        // let chi truy cap trong pham vi block 
        let child = parentNode.children[i];
        if (child.getAttribute("class") === "delete") {
            parentNode.removeChild(child);
        }
    }
}

// Bai toan lam sao de check xem 1 element co cha hay k ?
// parentElement vs parentNode -> same
console.log(document.getElementsByClassName("child")[0].parentNode);
console.log(document.getElementsByClassName("child")[0].parentElement);

function checkParent(parent, child) {
    var parentCheck = child.parentNode;
    console.log(typeof parentCheck);
    console.log(typeof parent);
    // different == : k can vs === : dung the loai 
    // '' == '0'           // false
    // 0 == ''             // true
    // 0 == '0'            // true

    // false == 'false'    // false
    // false == '0'        // true

    // false == undefined  // false
    // false == null       // false
    // null == undefined   // true
    if (parentCheck !== null && parentCheck == parent) {
        return true;
    }
    return false;
}

function checkElement() {
    var parent = document.getElementsByClassName("parent")[0];
    var child = document.getElementsByClassName("child")[0];
    var nonChild = document.getElementsByClassName("non--child")[0];
    document.getElementsByClassName("result--child")[0].innerHTML = checkParent(parent, child);
    document.getElementsByClassName("result--nonChild")[0].innerHTML = checkParent(parent, nonChild);
}