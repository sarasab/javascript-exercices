//exo 1
var fruit = ["mango", "lemon","blueberry"]
console.table(fruit);

//exo 2

var ingredients =["eggs","milk","butter"]
console.table (ingredients.slice (2));

var ingredients =["eggs","milk","butter"]
ingredients.indexOf=0;
console.table(ingredients.indexOf);

//exo 3

var objects= ["pen","book","lamp"]
objects.push("chair","laptop");
objects.pop("lamp");
objects.reverse(3,2,1,0);
console.log(objects);




//exo 4
var numbers = [4,10,8,12,6]
numbers.reverse(3,2,1,0);
numbers.sort((a, b) => a - b);
console.table(numbers);

//exo 5

var total= 0;
var limit= 10;
for (var i = 0; i<=limit; i++){
    total=total+i
}
console.log(total);

//exo 6
var sentence = "Hello Konexio !";
var phraseDecoupe = sentence.split("");
console.log(phraseDecoupe);
phraseDecoupe.sort((a, b) => b - a);
console.table(phraseDecoupe);
var newSentence = "";
for (var i = 14; i >= 0; i--) {
    console.log(phraseDecoupe[i]);
    newSentence = newSentence + (phraseDecoupe[i]);
}
console.log(newSentence);

//exo 7






