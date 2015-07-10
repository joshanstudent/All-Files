//Joseph Handy July 15, 2014, Conditionals_Wacky

//declare variable


var rideBike = prompt("How fast can you ride a bike? Type your speed, 1 mph to 100 mph.");


//string prompt enduser to answer the qestion

if (rideBike >= 0 || rideBike <= 100)
 {
	alert("You can ride a bike fast! Mph = " + rideBike);

//print out

	console.log('I can ride a bike fast! Mph = ' + rideBike);
}

//prompt enduser when click onto canal or close

else {
	alert("You didn't answer the question! ");

//print out

	console.log("You didn't answer the question! ");
}




