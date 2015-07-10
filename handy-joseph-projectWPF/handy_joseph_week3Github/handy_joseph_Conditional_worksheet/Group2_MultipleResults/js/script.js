//Joseph Handy July 22, 2014 Group 2: Multiple Results

//declare variable

var userName = prompt("Enter User Name");
var passWord = prompt("Enter Password");


// enter password into prompt

if (passWord === "") {
	passWord = prompt("Enter Password");
	
}

//enter username into prompt

if (userName){
		alert("Welcome! " + userName);
	}


//will prompt the enduser is they click cancal or close	

	else {
	alert("You did not a User Name!");
}



//print out

console.log("Welcome! " + userName);
console.log("Password entered by user:  " + passWord);










