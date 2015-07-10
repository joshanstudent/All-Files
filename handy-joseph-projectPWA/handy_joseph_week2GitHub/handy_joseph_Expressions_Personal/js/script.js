//Joseph Handy July 15, 2014, Expression_Personal

//Expressions Assignment - Personal

//declare variable
var wirelessMouse = prompt("How many batteries your use in 30 days for you wireless mouse?");
var wirelessKeyboard = prompt("How many batteries you use in 30 days for your wireless keyboard?");


//assigned the string to prompt for the end-user to fill in the prompt to see there year count
var answer;
answer = wirelessMouse * wirelessKeyboard;

//assigned the string to prompt for the end-user to fill in and the end-user will see what they said 
if (answer) {
	alert("Total of batteries used in a year!" + answer);

}

//assigned this string when the end-user click onto the cancel or wish not to answer the question
 else {

 alert("You did not answer the question!");

 }
     
//print out to console
console.log(wirelessMouse);
console.log(wirelessKeyboard);
console.log(answer);
