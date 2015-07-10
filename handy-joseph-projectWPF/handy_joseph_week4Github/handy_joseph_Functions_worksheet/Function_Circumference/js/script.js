//Joseph Handy July 27, 2014 Function Worksheet Circumference 

//Circumference of a Circle, declare variable and function


// declare variable and function with a parameter
function circumferenceCircle(radiusOfCircle) {
    var circleIsX = radiusOfCircle * 2 * 3.14

    //prompt message to enduser, the answer for the circumference of the circle
    alert("The calculation of the circumference of a circle for the radius input = " + circleIsX +  " is the circumference of this circle!");


    //print message to console, what is the value of the circumference of the circle
    console.log("The Calculation of the circumference of a circle for the radius input = " + circleIsX +  " is the Circumference of this Circle!");


    //return function
    return circumferenceCircle;

}



//This is the argument with the renamed variable to prompt message to enduser to enter a number to find the circumference of the input value of the circle
var radiusOfCircle1 = prompt("To find the circumference of the circle. \n Enter the radius of the circle.");


//invocate the parameter and created an argument to renamed the new variable for enduser to enter data within the promptbox
circumferenceCircle(radiusOfCircle1);