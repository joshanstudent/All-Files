//Converting Strings To Numbers

//declare the variable

var myString = "56.02 degrees centigrade" ;
var myInt;
var myFloat;

document.write("\" " + myString + "\" is " + parseInt(myString) + " as an integer" + "<BR>");

myInt = parseInt(myString);
document.write("\" " + myString + "\" when converted to an integer equeals " + myInt + "<BR>");


myFloat = parseFloat(myString);
document.write("\" " + myString + "\" when converted to a floating point number equals " + myFloat);