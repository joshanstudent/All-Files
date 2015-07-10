//Joseph Handy July 15, 2014, Expression_Wacky

//declare variable

var ans = prompt("Why do you want to become a web developer?");

//assigned the string to prompt for the end-user to fill in and the end-user will see what they said

if (ans) {
	alert("You said, " + ans);
}

//assigned this string when the end-user click onto the cancel or wish not to answer the question

else {
	alert("You did not answer the question!");
}


//declare variable
var ans1 = prompt("How long have you been thinking about going to school to learn web development?");


//assigned the string to prompt for the end-user to fill in and the end-user will see what they said

if (ans1) {

	alert("You said," + ans1);
}

//assigned this string when the end-user click onto the cancel or wish not to answer the question

else {
	alert("You did not answer the question!");
}
 

//declare variable
 var webClasses = prompt("How many years are you willing to go to school for Web Development?, 'Enter Numbers Only'");

 var totalSemester = prompt("How many classes are you going to take per semester year, 'Enter Numbers Only' ");


//assigned the string to prompt for the end-user to fill in the prompt to see there semester and years total
 var answer;
 answer = webClasses * totalSemester;


//assigned the string to prompt for the end-user to fill in and the end-user will see what they said 
if (answer) {
	alert("Here is the total number of classes needed to complete your education for Web Development within the amount of years you entered," + answer);
}

//assigned this string when the end-user click onto the cancel or wish not to answer the question
else {
	alert("You did not answer the question!");
}

console.log(ans);
console.log(ans1);
console.log(answer);
 




