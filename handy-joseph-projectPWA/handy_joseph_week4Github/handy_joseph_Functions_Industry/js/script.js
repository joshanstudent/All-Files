//Joseph Handy July 27, 2014 Function Industry



//prompt the enduser with title and what this is
alert("This is a memory game. You must remember the three top students to win.");

//print to the console
console.log("This is a memory game. You must remember the three top students to win.");

// declare variable and prompt the enduser to enter there name
var welcomeYou = "Hello";
var myName = prompt("Please enter your name ",  "");
var beGan;

//print to console
console.log(welcomeYou + " " + myName);

//declare varaible to prompt message
beGan = welcomeYou + " "  + myName + "\n Please click OK to begin!";

//prompt message to click OK
alert(beGan);


//prompt message to click ok to see choices
alert("Who are the three top students?\n Click OK to see the choices!");

//print to console
console.log("Who are the three top students?\n Click OK to see the choices!");

//prompt enduser to read message to make choice on next prompt
alert("Mike did better on the project than Jim and John. \n Jane's project is awesome, and won grand prize. \n Kim and Sean's project wasn't as good as Bill's project.");

//print to console
console.log("Mike did better on the project than Jim and John. \n Jane's project is awesome, and won grand prize. \n Kim and Sean's project wasn't as good as Bill's project.");


//prompt message to click ok to enter choices
alert("Enter 1 for John, Michelle, Sean,\n Enter 2 for Mike, Bill, Jane, \n Enter 3 for Lynne, Kim, Jim, \n \n Click OK to enter your choice");


//print to console
console.info("Enter 1 for John, Michelle, Sean,\n Enter 2 for Mike, Bill, Jane, \n Enter 3 for Lynne, Kim, Jim,  \n \n Click OK to enter your choice");

//declare variable to prompt message to enter top choice
var topStudents = prompt("Who are the three top students? \n Enter 1, 2, or 3.");


//declare if statement for answer 
if ( (topStudents >= 2 && topStudents <= 2) )
{

//prompt message for correct answer and game over	
alert("I see you were paying attention, Great Job!  Game Over!");

//print to console
console.log("I see you were paying attention, Great Job!" +   "Correct Answer = " + topStudents + " Game Over!");


}

//declare else statement if wrong answer is choose
else if (topStudents) {
 
	
	//prompt message enduser wrong answer and need to do some praticing 
	alert("You need some more practice! " + " Wrong Answer! =  " + topStudents + "  Game Over! " );

	//print to console
	console.log('You need some more practice! ' + "Wrong Answer! = " + topStudents + " Game Over! ");
}

//declare else statement when enduser click cancal of exit
else {
	alert("You did not answer the question! Game Over!");
	console.log("You did not answer the question! Game Over!");
}


//declare variable to welcome enduser by there name and to begin the next game  
var beGan;

// print to the console
console.log(welcomeYou + " " + myName);

//prompt enduser by there name and to click ok to begin
beGan = welcomeYou + " "  + myName + "\n Please click OK to begin the Average Game!";

//prompt enduser to click ok
alert(beGan);


//prompt the enduser with title and what this is
alert("This is a memory game. You must remember the averages of the students to win.");

//print to console
console.log("This is a memory game. You must remember the averages of the students to win.");


//declare anonymous function with three parameters
var studentAssignments = function(Mike, John, Kim){

	//declare the definition
	var a = (Mike + John + Kim)/4;

	//return the function
	return a;

}

var a = studentAssignments(92, 96, 100);
alert("Averages for Mike, John, and Kim = " + a + "%");
console.log("Averages for Mike, John, and Kim = " + a +"%");



//declare anonymous function with three parameters
var studentAssignments = function(Bill, Sean, Michelle){

	//declare the definition
	var b = (Bill + Sean + Michelle)/4;

	//return the function
	return b;

}

//assigned the grades values to fing the average
var b = studentAssignments(88, 76, 93);

//prompt enduser with the answer
alert("Averages for Bill, Sean, and Michelle = " + b + "%");

//print to console
console.log("Averages for Bill, Sean, and Michelle = " + b +"%");



//declare anonymous function with three parameters
var studentAssignments = function(Jane, Lynne, Jill ){

	//declare the definition
	var c = (Jane + Lynne + Jill )/4;

	//return the function
	return c;

}


//assigned the grades values to fing the average
var c = studentAssignments(100, 87, 93);
alert("Averages for Jane, Lynne and Jill =  " + c + "%");

//print to console
console.log("Averages for Jane, Lynne and Jill = " + c + "%");

//prompt enduser to click ok to see choices
alert("Which group of students has the highest average?\n Click OK to see the choices!");

//print to console
console.log("Which group of students has the highest average?\n Click OK to see the choices!");

//prompt enduser with choice picks
alert("Enter 1 for Mike, John, and Kim,\n Enter 2 for Bill, Sean, and Michelle  \n Enter 3 for Jane, Lynne and Jill \n \n Click OK to enter your choice");

//print to console
console.info("Enter 1 for Mike, John, and Kim,\n Enter 2 for Bill, Sean, and Michelle  \n Enter 3 for Jane, Lynne and Jill \n \n Click OK to enter your choice");

//declare variable to prompt message to enter top choice
var studentsGroups = prompt("Which group of students has the highest average? \n Enter 1, 2, or 3.");

//declare if statement for answer 
if ( (studentsGroups >= 1 && studentsGroups <= 1) )
{

//prompt enduser that they won the game	
alert("I see you were paying attention, Great Job!  Game Over!");

//print to console
console.log("I see you were paying attention, Great Job!" +   "Correct Answer = " + studentsGroups + " Game Over!");


}

else if (studentsGroups) {
 
	//prompt message enduser wrong answer and need to do some praticing 
	alert("You need some more practice! " + " Wrong Answer! =  " + studentsGroups + "  Game Over! " );

	//print to console
	console.log("You need some more practice! " + "Wrong Answer! = " + studentsGroups + " Game Over! ");
}



else {

	//prompt enduser that they didn't answer the question
	alert("You did not answer the question! Game Over!");

	//print to console
	console.log("You did not answer the question! Game Over!");
}












