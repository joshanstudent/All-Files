//Joseph Handy July 27, 2014 Using The Switch Statement


//declare variable
var secretNumber = prompt("Pick a number between 1 and 5 : ", "");

//parseInt() to convert the string that is returned from the prompt() to an integer value
	secretNumber = parseInt(secretNumber);

//switch statement, the variable and it's number that the case statement will be compared against
switch (secretNumber)
{
	
	//case statements are check for numbers between 1 and 5, because this is the number asking the user to enter
	
		case 1:
	//print message
		console.log('Too low!');
		break;

	case 2:
	//print message
		console.log('Too low!');
		break;

	//this case statement, message the enduser that they have guessed the number	

	case 3:
		//print message
		console.log('You guessed the secret number!');
		break;

	case 4:
	//print message
		console.log('Too high!');
		break;

	case 5:
	//print message
		console.log('Too high!');
		break;

	//this statement, tells the enduser that they didn't enter a number between 1 and 5

	default:
	//print message
		console.log('"You did not enter a number between 1 and 5.');

}

// print message, also, this string is used as a case end-statement with a break-statement 
console.log('Execution continues here');