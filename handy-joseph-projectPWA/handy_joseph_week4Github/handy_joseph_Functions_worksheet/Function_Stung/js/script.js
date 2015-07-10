//Joseph Handy July 27, 2014 Function Worksheet Stung

//Calculate how many bee stings are needed to kill an animal in a function

// declare variable and function with a parameter
function restedAnimal(victimtWeight)  {
	var stings = victimtWeight * 8.666666667;

	//prompt message to enduser of how many bee sting per pound
	alert("It takes 8.666666667 Bee stings per pound to kill an animal at. " + stings +  " pounds.");


	//print message to console of how many bee sting per pound
	console.log("It takes 8.666666667 Bee stings per pound to kill an animal at. " +  stings +  " pounds");


	//return function
	return restedAnimal;

}


//This is the argument with the renamed variable to prompt message to enduser to enter animal pounds of weight
var victimtWeight1 = prompt("It takes 8.666666667 Bee stings per pound to kill an animal. \n To found out how many Bee stings it will take to kill that animal? \n Input the Animal Pounds.");


//invocate the parameter and created an argument to renamed the new variable for enduser to enter data within the promptbox
restedAnimal(victimtWeight1);

