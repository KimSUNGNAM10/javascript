var num;
document.write(typeof num); //typeof 타입을 보여줌
document.write("<br>");  //undefined 변수만 선언되고 값이 없는 상태
num = 10;
document.write(typeof num);
document.write("<br>");
num = "niiiiiiiice";
document.write(typeof num);
document.write("<br>");
num = {
    name: "hong",
    age: 01
}
document.write(typeof num);
document.write("<br>");

var num1, num2, num3;
num1 = "sp"; //처음 나온것이 문자라서 결과값은 sp2030 
num2 = 20;   //sp50을 나오게 하려면 (num2 + num3)
num3 = 30;
num = num1 + (num2 + num3);
// var num1, num2;    js 에서는 가능
// num1 = "sp";
// num2 = 20;
console.log(num);

num3 = "20"; //true 
console.log(num2 === num3); // ==    === 차이 

var sum = 0;
for (var i = 0; i < 10; i++) {
    if (i<5)
        continue;
    sum = sum + i;  // sym += i; 같음
}
console.log("결과값은 " + sum);

var $sum = 10; //변수에 앞자리에 $ _ 가능
var _sum = 20;
var sum1 = null;
var num1 = 10;
var _$sum = 10;