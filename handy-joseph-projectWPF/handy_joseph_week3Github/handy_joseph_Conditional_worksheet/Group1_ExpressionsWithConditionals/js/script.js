//Group 1: Expressions with Conditionals 

//declare variable


var degFahren = Number(prompt("Enter the degrees Fahrenheit"));
var degCent;


//assigned degCent a string value, namely the value 5/9 * (degFahren - 32)
degCent = 5/9 * (degFahren - 32);

//print the string
console.log(degFahren + "\xB0 Fahrenheit is" + degCent +"\xB0 centigrade<br /> ");

//if the temp is true, That's below the freezing point of water, if not move to the next statement
if (degCent < 0) {


console.log("That's below the freezing point of water");

}


//if the temp is false, That's the boiling point of water
if (degCent == 100) {

console.log("That's the boiling point of water");
}