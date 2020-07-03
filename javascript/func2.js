
function fun1() {
    // document.getElementById("show").innerHTML = "Hello";
}
fun1();

var fun2 = function (str) {
    // document.getElementById("show").innerHTML = str;
}
fun2("Hello");

function outerFunc(func) {
    func(2,3,4,5,6);
}

function argsFunc() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    document.getElementById("show").innerHTML = sum;
}

outerFunc(argsFunc);

