/*
 Name: Joseph Handy
 Date: 09/15/2014
 Class & Section:  PWA1-01
 Assignment:Goal 4: Duel 3
 */

/****************************************************************

I got very frustrated with the code. This unused codes was driving
me crazy, so I code it to a way I'm familiar of doing.

Scroll down to part 2 for actual code. Please don't harm me too
 bad, on grading my assignment. Thanks

****************************************************************/

// this part of code is turn off (See Part 2, below)

/*** test to see if script will print ***/

//// Self executing function
//(function(){
//
//    /*** print to console.log ***/
//    console.log("FIGHT!!!");
//
/////*** old code ***/
//    ///*** defining the Arrays for Player1 and player2 ***/
//
//    //var player1 = ["Spiderman", "50", "100"];
//    //var player2 = ["Batman" , "50", "100"];
//
//
//    /*** Defining the DOM that is access the HTML tags ***/
//    /***Don't need # if using getElementbyId***/
//    var fighter1_txt = document.querySelector("#sm").querySelector("p");
//
//    /***Don't need # if using querySelector***/
//    var fighter2_txt = document.querySelector("#bm").querySelector("p");
//
//    /***Pull in text between h4 or h5 tag***/
//    var round_txt = document.querySelector("h5");
//
//    /***Pull in main button that starts the game***/
//    var button = document.querySelector("fight_btn");
//
//
//    /*** print to console.log ***/
//    console.log();
//
//
//    /*** Setup Click Event ***/
//    button.addEventListener("click", fight, false);
//
//    /*** Don't use >> button.onclick = fight: Need Event Listener for more flexibility ***/
//
//
//    /*** Define Arrays Objects ***/
//    var fighters = [
//        {
//            /*** index[0] name Spiderman ***/
//            name:"Spiderman",
//            /*** index0.damage ***/
//            damage:50,
//            /*** index0.health ***/
//            health:100
//        },
//        {
//            /*** index[1] Batman ***/
//            name:"Batman",
//            /*** index1.damage ***/
//            damage:50,
//            /*** index1.health ***/
//            health:100
//        }];
//
//    var round = 1;
//
//    /*** Initialize DOM InnerHTML text for Top of page ***/
//    round_txt.innerHTML = "Click FIGHT BUTTON to Start! ";
//    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
//    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
//
//    /*** Remove Old JS Function, but need the below if we use addEventListener in line 15 above. ***/
//
////*** Fighting Function ***/
//        //CREATE "FIGHT" FUNCTION
//    function fight()
//    {
//
//        //old code
////    function fight(){
////    }
//
//
//        /*** old code ***/
//        /*** print fight ***/
//        //console.log("Fight!!!");
//
//        /*** prompt for fighting game ***/
//            //alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);
//
//        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
//        fighter2_txt.innerHTML = fighters[1].name + ";" + fighters[1].health;
//
//        /*** damage determining ***/
//        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
//        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);
//
//        /*** old code ***/
//        /*** Inflict damage ***/
//        //player1[2] -= f1;
//        //player2[2] -= f2;
//
//        /*** Inflict damage ***/
//        fighter1_txt[0].health -= f1;
//        fighter2_txt[1].health -= f2;
//
//        /*** print console.log ***/
//        console.log(fighters[0].health, fighters[1].health);
//
//        /*** Check for Winner ***/
//        var result = winnerCheck();
//
//        /*** print result of winnerCheck ***/
//        console.log(result);
//
//        /*** Display result of winnerCheck ***/
//        if (result === "no winner") {
//
//            /*** old code ***/
//                //round++;
//                //alert(player1[0] + ":" + player1[2] + "  *ROUND " + round + " OVER" + "*  " + player2[0] + ":" + player2[2]);
//
//            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
//            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
//
//        }else{
//            fighter1_txt.innerHTML = result;
//            fighter2_txt.innerHTML = "";
//
//            /*** Disable button, need the below if using addEventListener ***/
//            button.removeEventListener("click", fight, false);
//            /*** button.disabled = true; ***/
//
//            /*** button.onclick = "return false"; ***/
//
//
//            document.querySelector(".buttonblue").innerHTML = "DONE!!!";
//
//        }
//
//
//
//
//    }
//
//
//    function winnerCheck(){
//
//        var result = "no winner";
//
//        if (fighters[0].health <1 && fighters[1].health <1)
//        {
//            result = "You Both Die - GAME OVER!";
//
//        }else if(fighters[0].health <1){
//
//            result = fighters[1].name + " WINS!!! "
//        }else if(fighters[1].health < 1){
//
//            result = fighters[0].name + " WINS!!! "
//        }
//        return result;
//    }
//})();

/************************************************************
 Part 2 Starts here
 ***********************************************************/

/*** test to see if script will print ***/

// Self executing function

(function(){

    function disableButton(){
        document.querySelector(".buttonblue").disabled = true;
    }

    document.querySelector(".buttonblue").onclick  = function(){
        fight();

    };


    var fighters = [

        {
            /*** index[0] name Spiderman ***/
            name:"Spiderman",
            /*** index0.damage ***/
            damage:20,
            /*** index0.health ***/
            health:100
        },

        {
            /*** index[1] Batman ***/
            name:"Batman",
            /*** index1.damage ***/
            damage:20,
            /*** index1.health ***/
            health:100
        }
    ];
    var rounds = 1;


    /*** Initialize DOM InnerHTML text for Top of page ***/

    var fighter1_txt = document.getElementById("kabal");
    fighter1_txt.innerHTML = fighters[0].name + " : " + fighters[0].health;

    var fight2_txt = document.getElementById("kratos");
    fight2_txt.innerHTML = fighters[1].name + " : " + fighters[1].health;

    /***Pull in text between h4 or h5 tag***/
    var round_txt = document.querySelector("h5");
    round_txt.innerHTML = "Click FIGHT BUTTON to Start! ";



    function fight(){


        document.getElementById("round").innerHTML = "Round " + rounds + " is over";

        /*** old code ***/
        /*** print fight ***/
        //console.log("Fight!!!");

        /*** prompt for fighting game ***/
        //alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);

        /*** damage determining ***/
        var minDamageP1 = fighters[0].damage * .5;
        var minDamageP2 = fighters[1].damage * .5;
        var f1 = Math.floor(Math.random() * (fighters[0].damage-minDamageP1)+minDamageP1);
        var f2 = Math.floor(Math.random() * (fighters[1].damage-minDamageP2)+minDamageP2);


        /*** old code ***/
        /*** Inflict damage ***/
            //player1[2] -= f1;
            //player2[2] -= f2;

        /*** Inflict damage ***/
        fighters[0].health-=f1;
        fighters[1].health-=f2;

        /*** Defining the DOM that is access the HTML tags ***/
        var fighter1_txt = document.getElementById("kabal");
        fighter1_txt.innerHTML = fighters[0].name + " " + fighters[0].health;

        var fighter2_txt = document.getElementById("kratos");
        fighter2_txt.innerHTML = fighters[1].name + "  " + fighters[1].health;

        var results = winnerCheck();



        /*** Display result of winnerCheck ***/
        //console.log(results);
        if(results ==="No winner"){
            rounds++;

        } else {
             /*** button.disabled = true; ***/

            /*** button.onclick = "return false"; ***/

            document.querySelector("#round").innerHTML = "Game Over!";
            document.querySelector("#kabal").innerHTML = results;
            document.querySelector("#kratos").innerHTML = "";
            document.querySelector(".buttonblue").onclick = disableButton();



        }

    }

    function winnerCheck(){
        //console.log("In winner check function");

        var result="No winner";

        if(fighters[0].health<0 && fighters[1].health<1){
            result = "GAME OVER!  YOU BOTH DIED";

        } else if(fighters[0].health<1){
            result = "GAME OVER! " + fighters[1].name + " WINS!"


        }else if(fighters[1].health<1){
            result = "GAME OVER! " + fighters[0].name + " WINS!"
        }

        return result;

    }
})();







/******************* Old codes, turned off ************************/
/*
 Name: Joseph Handy
 Date: 09/7/2014
 Class & Section:  PWA1-01
 Assignment:Goal 1: Duel 1
 */

//  /*** test to see if script will print ***/
//
//      //self-executing function
//  (function(){
//      console.log("FIGHT!!!");
//
//      /*** users will enter their names for the fighters ***/
//
//      //player name
//      var playerOneName = "Spiderman";
//      var playerTwoName = "Batman";
//
//      /*** this is the damage level that the fighters endure within each round ***/
//
//      //player damage
//      var player1Damage = 50;
//      var player2Damage = 50;
//
//      /*** this is the life cycle of the fighter's health during the game ***/
//
//      //player health
//      var playerOneHealth = 100;
//      var playerTwoHealth = 100;
//
//      /*** the indication of what round it is ***/
//
//      // fight round
//      var round = 0;
//
//      /*** this loops through each round and reduce the player's health until there is a winning fighter ***/
//
//          // loops through rounds and reduces the player's health
//      function fight(){
//          console.log("in the fight function");
//
//          /*** this is to indicate to the users that the health of the fighters start at 100% ***/
//
//              //alert prompt indicating the fighter's health is at 100%
//          alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
//
//          /*** this is a "For Loop" to cycle through ten rounds, starting from zero and ending at nine ***/
//
//          //"For Loop"
//          for (var i=0; i<10;i++){
//
//              /*** this is to indicate random levels of damage to each fighter per each round ***/
//
//              //random formula Math.floor(Math.random()*(max-min) + min);
//              var minDamage1 = player1Damage * .5;
//              var minDamage2 = player2Damage * .5;
//              var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
//              var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);
//
//
//              /*** damages that is inflicting among each other during the fight ***/
//
//                  //inflicting damage
//              playerOneHealth-=f1;
//              playerTwoHealth-=f2;
//
//              /*** print out damages among each fighter ***/
//                  //print console log
//              console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);
//
//
//              var results = winnerCheck();
//              console.log(results);
//
//              if(results ==="no winner"){
//                  round++;
//                  alert(playerOneName+":"+playerOneHealth+" *ROUND"+round+"OVER* "+ playerTwoName+":"+playerTwoHealth);
//
//                  // if no winner, die
//              }else{
//                  alert(results);
//
//                  //stop the loop
//                  break;
//              }
//
//
//          };
//      };
//
//      /*** states the winner or loser for each round ***/
//
//          //invoke after each round and returns a string of either the winner or loser
//      function winnerCheck(){
//
//          console.log("in winnerCheck FN");
//
//          var result ="no winner";
//
//          /*** If player One wins than players two lose. If neither of the players win, this will called a tie ***/
//
//          // determine which of the players has won or no winner
//          if(playerOneHealth<1 && playerTwoHealth<1){
//              result = "No Winner!";
//          }else if(playerOneHealth<1){
//              result =playerTwoHealth+" Batman WINS!!!"
//          }else if(playerTwoHealth<1){
//              result =playerOneHealth+" Spiderman WINS!!!"
//          };
//
//
//          /*** the result from the if else statement with be returned to Winner Check ***/
//
//          //return result for a winner, lose or no winner
//          return result;
//
//      };
//
//      /*** program begin below ***/
//
//          // this fight call is where the program actually begins
//      console.log("program starts");
//      fight();
//
//
//  })(

/*************** End of Old code turned off **********************/