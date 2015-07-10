//Joseph Handy July 27, 2014 Function Wacky


//declare function with parameter
function addDivideValues(a,b,c) {

//delcare variable definition
var d = a+b/c;

//return the value
return d;

}

//prompt value for enduser
alert(addDivideValues(25,4,6));

//print to console
console.log(addDivideValues(25,4,6));

////////////////////////////////////////////////////


//declare variable
	var age = 45
	var wow;

//created if and else statement for your viewing	

/*	if (age <40){
		wow = "Just getting started to live";

}

	else {

		wow = "Awesome Time to have fun";
	}
alert(wow);
console.log(wow);

*/


// declare Ternary from if and else statement to write the same code in a short version
wow = (age < 40) ? "Just getting started to live" : 
"Awesome Time to have fun";

//prompt message for enduser
alert(wow);

//print to console
console.log(wow);