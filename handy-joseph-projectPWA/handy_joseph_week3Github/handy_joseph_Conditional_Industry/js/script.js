//Joseph Handy July 15, 2014, Conditionals_Industry

//declare variable

var writeCode = prompt("How good are you writing code? \n Enter 1 thru 10 to see how good a code writer you are.");


// this string will ask the user to a value from 6 to 10, indicating there code writing and will prompt them with a message
if ( (writeCode >= 6 && writeCode <= 10) )
{
alert("Good to see that you are on you way to be a good code writer! ");

console.log('Good to see that you are on you way to be a good code writer!' + writeCode);
}


// this string will become visual when the enduser answer the prompt with a value from 0 to 5 indicating that they need some coding practice
else if (writeCode) {
 
	alert("You need some more practice! ");

	console.log('You need some more practice ' + writeCode);
}


// if the enduser click onto cancel or close the prompt box, this message will appear

else {
	alert("You did not answer the question!");
}


