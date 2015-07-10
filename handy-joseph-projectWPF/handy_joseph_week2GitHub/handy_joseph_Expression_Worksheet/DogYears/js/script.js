//Expression Worksheet Dog Years

//declare variable
var humanAge = prompt("A dog age in human age years, is a year old. \n'Enter the dog age in human age years.' ");
var sparkyAge = prompt("A dog that is a year old in human years is 7 years old in dog years. \n'Enter 7 to find out how old is the dog.'");

var answer;
answer = humanAge * sparkyAge;

//assigned the string to prompt for the end-user to fill in and the end-user will see what they said 
if (answer) {
	alert("A dog that is a year old in human years is 7 years old in 'dog years.'," + answer);
}

//assigned this string when the end-user click onto the cancel or wish not to answer the question
else {
	alert("You did not answer the question!");
}

//print console 
console.log(answer);
 