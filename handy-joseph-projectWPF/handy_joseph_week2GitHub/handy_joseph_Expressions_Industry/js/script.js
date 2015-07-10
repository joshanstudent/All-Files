//Joseph Handy july 15, 2014 Expressions Industry

//declare variable
var photoSize1 = prompt("Enter your photo size to be downsize, 'Enter the largest size first' ");
var photoSize2 = prompt("Enter your photo size to be downsize");

//assigned the string to prompt for the end-user to fill in the prompt to see the enlarged size
var answer;
answer = (photoSize1 - photoSize2)*2;

//assigned the string to prompt for the end-user to fill in and the end-user will see what they said

if (answer) {
	alert("Here is your total downsize photo pixel size!" + answer);

//assigned this string when the end-user click onto the cancel or wish not to answer the question
} else{
	alert("You did not answer the question!");
}


console.log(photoSize1);
console.log(photoSize2);
console.log(answer);


