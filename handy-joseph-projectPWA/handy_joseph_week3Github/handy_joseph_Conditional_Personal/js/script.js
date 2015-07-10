//Joseph Handy July 15, 2014, Conditionals_Personal


//declare variable

var learn = 3;
var practice;

// this is the condition long form

/*if (learn < 2)
{
	practice = "Need to practice writing arrays";
}

else {
	practice = "Doing well writing arrays";
}


// print out
console.log(practice);
*/


// this is the Ternary method
practice = (learn < 2) ? "Need to practice writing arrays" : "Doing well writing arrays";


// print out
console.log(practice);