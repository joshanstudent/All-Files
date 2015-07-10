//Joseph Handy July 22, 2014 Group 3 Multiple Conditions

//declare variable

var timeMovie = prompt("Enter the Movie Showing Time");

//Movie times between 3pm to 5pm, rate is $7.00. Any other time the rate is $12.00 
if ( (timeMovie >= 3 && timeMovie <= 5) || (timeMovie >= 8 && timeMovie <= 2) )

	{ alert("All Movie Shows between 3pm to 5pm, are discount at $7.00");
console.log('All Movie Shows between 3pm to 5pm, are discount at $7.00');


}


//this is the other time rate at $12.00
else {
	alert("Your Movie Show Time doesn't qualify for discount rates! Your Movie rate is $12.00" );

	console.log('Your Movie Show Time does not qualify for discount rates! Your Movie rate is $12.00');

	}



//declare variable
var customerAge = prompt("Enter your age to see if you will receive a discount");


// Ages 10 and under, rate is $7.00. Also, ages 55 and older is $7.00 
if ( (customerAge >= 0 && customerAge <= 10) || (customerAge >= 55 && customerAge <= 100) )

{
	alert("Your Age, qualify you for movie ticket rate at $7.00");

	console.log('Your Age, qualify you for movie ticket rate at $7.00');
}

// Ages 11 to 54, the rate is $12.00

else {alert("Your Age does not qualify for discount rate! Your rate is $12.00");

	console.log('Your age does not qualify for discount rate! Your rate is $12.00');
}



















