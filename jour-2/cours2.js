//exo 1
var integer = 102;
var float = 13.9;
console.log(integer);

//exo2
var basic = 34;
var stringified = basic.toString();
console.log(stringified);

//exo3
var num = 1.5;
var rounded = Math.floor(num);
console.log(rounded);

//exo 4
var test=12;
var bis= 5;
var resultat= test+bis;
console.log(resultat);

// exo 5

var test=143; 
var bis= 219;
console.log(test===bis);

// exo6

var limit= 50;
var score =64;
var resultat;
if (score >= limit){
    resultat="Ok good !";
}
else{
    resultat="oh nooo....!";
}
console.log(resultat);
 
//exo 07

var password = "azerty";
var passewordok = 5;
var resultat2;
if (password.length > passewordok){
    resultat2 ="the password is secure";
}
console.log(resultat2);

//exo 8

if (score >= limit && password.length > passewordok){
    resultat="Evreything is good";
}
else if (score >= limit || password.length > passewordok){
    resultat="Something is good";
}
else{
    resultat= "noting is good";
}
console.log(resultat);

// exo bonus 
var min =1;
var max =10;
var caca=Math.floor(Math.random() * (max - min + 1) + min);
if (caca==10){
   console.log ("Yes I win !");
}else{
    console.log ("tu es nul !")
}
console.log("caca:"+caca);






