

var maniPrice = 500
var großPrice = 300
var smallPrice = 200
if (großPrice * smallPrice == 1000) {
    console.log("yes")
} else {
    console.log("no")
}
var z = 1000
y = 800
x = 500
if (z + y == 1500) {
    console.log("good")
} else {
    console.log("bad")

}

var mainPrice = 2000
großPrice = 1500
smallPrice = 1000
document.getElementById("hi").innerHTML = großPrice - smallPrice;


var hasDiscount = false;
if (hasDiscount == true) {
    var mainPrice = 350;
} else {
    var mainPrice = 450;
}
document.getElementById("hallo").innerHTML = mainPrice;


/*  var myAge = (10 +20 ) +"osama" + (20 +50)
  document.getElementById("test").innerHTML = myAge 
*/

var myName = "tawfek",
    myAge = 26,
    myCountry = "germany";

document.getElementById("test").innerHTML =
    "<span style='color:red'>My Name Is</span>: " + "<span style='color:green'>" + myName + "</span>" + "<br>" +
    "<span style=\"color:blue\"> my age is </span> :<span style='color:yellow'> " + myAge + "</span>" + "<br>" +
    " my country is " + myCountry;

var z = 23 % 2

document.getElementById("teto").innerHTML = z

/* var Nummer = 1;
 alert(Nummer++);
 */

var pommes = 200
if (pommes < 150) {
    console.log("no it is a apfel")
} else if (pommes == 200) {
    console.log("yes it is pommes")
} else {
    console.log("it is a banana")
}


/* 
var yourName = prompt("whats your name") 
 var yourAge = prompt("whats your age")
 if(yourName == "tawfek " && yourAge > 18){
     document.getElementById("teto").innerHTML = 
     "ant m3lm w seed al nas " + yourName + " w sho ma bdak bt3ml"
 }else if(yourName !== "tawfek" && yourAge < 18){
 document.getElementById("teto").innerHTML =
 "anta wa7ed 5ra ya " +yourName+ " w an2l3 mn hon"
 }
*/
var arr = [1, 2, 3, 4, 5,];
var summe1 = 0;
arr.forEach(myFunction);
console.log(summe1);
//var summe2 = arr.reduce();
//console.log(summe2);
function myFunction(item) {
    summe1 += item;
}
class articel {
    mwst = 0.5
}
class zeitschreift extends articel {
    mwst = .19
}
z = new zeitschreift
console.log(z.mwst)
/*
function sayHi() {
    var myPommes = "soheel";
    if (myPommes === "soheel"){
        alert("tl7s teze " + myPommes + "wn2l3 bra")
    }
    else{
        alert("m3lm wseed al nas ya " + myPommes + "w ahla wshla")
    }
}
sayHi()
*/
function myAgeInHours() {
    var myAge = 26;
    return myAge * 365 * 24;
}
var tawfek = myAgeInHours()
document.getElementById("hii").innerHTML =
    "your age in hours is " + tawfek + " Hours"


function myProdect(pommes, appfel) {
    var discount = 50
    return pommes + appfel - discount
}
document.getElementById("teest").innerHTML = myProdect(250, 150);


/*
var season = prompt(" what is your favorite season")

switch (season){
    case "winter":alert("this season is too cold")
    break;
    case "summer": alert("this season is too hot")
    break;
    case "spring":alert("this season is amazing")
    break;
    default:alert("you dont write a seson")
    break;
}
*/

var x = 1
console.log(x)
function myNummer1() {
    x = 2
    console.log(x)
}
function myNummer2() {
    x = 3
    console.log(x)
}
myNummer1()
myNummer2()
console.log(x)

