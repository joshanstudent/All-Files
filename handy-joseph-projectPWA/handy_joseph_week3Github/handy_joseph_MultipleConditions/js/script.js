//Joseph Handy July 22, 2014 Multiple Conditions ch3_examp2

//declare variable

var myAge = Number (prompt("Enter your age") );

if (myAge >= 0 && myAge <= 10)
{console.log("myAge is between 0 and 10<br />");
}

if (!(myAge >= 0 && myAge <= 10) )

{console.log("myAge is NOT between 0 and 10<br />");
}

if (myAge >= 80 || myAge <=10)

{console.log("myAge is 80 or above OR 10 or below<br />");
}

if ( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) )

{console.log("myAge is between 30 and 39 or myAge is between 80 and 89");
}

