//Joseph Handy July 27, 2014 Converting a Series of Fahrenheit Values


//declare variables to use
var degFahren = new Array (212, 32, -459.15);
var degCent = new Array ();

// declare the loop to access the array index
var loopCounter;


//this is the first loop to test to see if it is true
for (loopCounter = 0; loopCounter <=2; loopCounter++){

	degCent[loopCounter] = 5/9 * (degFahren[loopCounter] - 32);
}


//this is the second loop and if the first loop is true, this loop will excute. This loop will count down from 2 to 0 then stop looping
for (loopCounter = 2; loopCounter >= 0; loopCounter--){
	
	
	//print values to the console
	console.log("Value " + loopCounter + " was " + degFahren[loopCounter] + " degrees Fahrenheit ");


	//prompt values to the enduser
	alert("Value " + loopCounter + " was " + degFahren[loopCounter] + " degrees Fahrenheit ");

	//print values to the console
	console.log(" which is " + degCent[loopCounter] + "degrees centigrade");
	//prompt values to the enduser
	alert(" which is " + degCent[loopCounter] + "degrees centigrade");
}
