/*
Name: Joseph Handy
Date: 09/7/2014
Class & Section:  PWA1-01
Assignment:Goal 1: Duel 1
*/

/*** test to see if script will print ***/

    //self-executing function
(function(){
    console.log("FIGHT!!!");

/*** users will enter their names for the fighters ***/

    //player name
        var playerOneName = "Spiderman";
        var playerTwoName = "Batman";

/*** this is the damage level that the fighters endure within each round ***/

    //player damage
        var player1Damage = 50;
        var player2Damage = 50;

/*** this is the life cycle of the fighter's health during the game ***/

    //player health
        var playerOneHealth = 100;
        var playerTwoHealth = 100;

/*** the indication of what round it is ***/

    // fight round
        var round = 0;

/*** this loops through each round and reduce the player's health until there is a winning fighter ***/

    // loops through rounds and reduces the player's health
    function fight(){
        console.log("in the fight function");

/*** this is to indicate to the users that the health of the fighters start at 100% ***/

    //alert prompt indicating the fighter's health is at 100%
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

/*** this is a "For Loop" to cycle through ten rounds, starting from zero and ending at nine ***/

    //"For Loop"
            for (var i=0; i<10;i++){

/*** this is to indicate random levels of damage to each fighter per each round ***/

    //random formula Math.floor(Math.random()*(max-min) + min);
        var minDamage1 = player1Damage * .5;
        var minDamage2 = player2Damage * .5;
        var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);


/*** damages that is inflicting among each other during the fight ***/

    //inflicting damage
        playerOneHealth-=f1;
        playerTwoHealth-=f2;

/*** print out damages among each fighter ***/
        //print console log
        console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);


        var results = winnerCheck();
        console.log(results);

        if(results ==="no winner"){
           round++;
           alert(playerOneName+":"+playerOneHealth+" *ROUND"+round+"OVER* "+ playerTwoName+":"+playerTwoHealth);

        // if no winner, die
        }else{
            alert(results);

            //stop the loop
            break;
        }


        };
    };

/*** states the winner or loser for each round ***/

    //invoke after each round and returns a string of either the winner or loser
        function winnerCheck(){

          console.log("in winnerCheck FN");

            var result ="no winner";

/*** If player One wins than players two lose. If neither of the players win, this will called a tie ***/

        // determine which of the players has won or no winner
            if(playerOneHealth<1 && playerTwoHealth<1){
                result = "No Winner!";
            }else if(playerOneHealth<1){
                result =playerTwoHealth+" Batman WINS!!!"
            }else if(playerTwoHealth<1){
                result =playerOneHealth+" Spiderman WINS!!!"
            };


/*** the result from the if else statement with be returned to Winner Check ***/

    //return result for a winner, lose or no winner
    return result;

            };

/*** program begin below ***/

    // this fight call is where the program actually begins
        console.log("progam starts");
            fight();


})()