//Dealing with Strings That Won't Convert

//declare the variable

var myString = "I'm a name not a number" ;
var myInt;
var myFloat;

document.write("\" " + myString + "\" is " + parseInt(myString) + " as an integer" + "<BR>");

myInt = parseInt(myString);
document.write("\" " + myString + "\" when converted to an integer equeals " + myInt + "<BR>");


myFloat = parseFloat(myString);
document.write("\" " + myString + "\" when converted to a floating point number equals " + myFloat);