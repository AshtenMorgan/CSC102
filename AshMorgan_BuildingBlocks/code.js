var currency = 100; //Declares variable for credits

var hasPaid = false; //Declares bool for whether or not player has paid for a roll

function play()  //Function for rolling dice and recieving an outcome
{ 
    if (hasPaid == true) //Checks for whether or not player has paid to roll
    {
    var dieA = Math.ceil(Math.random() * 6); //Generates random whole number value from 1 to 6 for Die A
    var dieB = Math.ceil(Math.random() * 6); //Generates random whole number value from 1 to 6 for Die B

    var sum = dieA + dieB; //Calculates sum of die rolls A and B

    document.getElementById("dieARoll").innerHTML = "Die A | "+ dieA; //replaces inner HTML text for dieARoll
    document.getElementById("dieBRoll").innerHTML = "Die B | "+ dieB; //replaces inner HTML text for dieBRoll
    document.getElementById("rollSum").innerHTML = "Total | "+ sum; //replaces inner HTML text for the Total of the rolls

    if (sum == 7) //checks if total of rolls is equal to 7
    {
        document.getElementById("outcome").style.color='rgb(240, 32, 22)'; //changes color of outcome text to red
        document.getElementById("outcome").innerHTML = "Craps! You Lose."; //replaces innerHTML text for outcome
        hasPaid = false; //updates bool to false so player must pay again to roll
    }
    else if (sum == 11) //checks if total of rolls is equal to 11
    {
        document.getElementById("outcome").style.color='rgb(240, 32, 22)'; //changes color of outcome text to red
        document.getElementById("outcome").innerHTML = "Craps! You Lose."; //replaces innerHTML text for outcome
        hasPaid = false; //updates bool to false so player must pay again to roll
    }

    else if (dieA == dieB) //checks if dieA and dieB return the same value
    {
        document.getElementById("outcome").style.color='rgb(32, 250, 22)'; //changes color of outcome text to green
        document.getElementById("outcome").innerHTML = "DOUBLES! You win!"; //changes innerHTML text for outcome
        currency = currency + 20; //adds value to currency to reflect a win
        document.getElementById("currency").innerHTML = "Credits | "+ currency +"c"; //updates currency display
        hasPaid = false; //updates bool to false so player must pay again to roll
    } 
    
    else 
    {
        document.getElementById("outcome").style.color='rgb(255, 250, 22)'; //changes color of outcome text to yellow
        document.getElementById("outcome").innerHTML = "You did not win or lose. Please try again."; //changes innherHTML text for outcome
    }
    }
else if (hasPaid == false) //checks if hasPaid is false to check if player has paid
    {
    if (currency >= 10) //checks if player has more than 10 credits to pay their way back into the game
        {
            currency = currency - 10; //subtracts a value from the currency
            document.getElementById("currency").innerHTML = "Credits | "+ currency +"c"; //changes innerHTML text for Credits to reflect payment
            hasPaid = true; //changes hasPaid from false to true
            play(); //calls the play function after player has paid
        }
        else 
        {
            document.getElementById("dieARoll").style.color='rgb(240, 32, 22)'; //changes dieARoll text to red
            document.getElementById("dieARoll").innerHTML = "You're broke"; //changes dieARoll text
            document.getElementById("dieBRoll").style.color='rgb(240, 32, 22)'; //changes dieBRoll text to red
            document.getElementById("dieBRoll").innerHTML = "You're broke"; //changes dieBRoll text
            document.getElementById("rollSum").style.color='rgb(240, 32, 22)'; //changes rollSum text to red
            document.getElementById("rollSum").innerHTML = "You're broke"; //changes rollSum text
            document.getElementById("outcome").style.color='rgb(240, 32, 22)'; //changes outcome text to red
            document.getElementById("outcome").innerHTML = "Come back when you have more credits, scum."; //changes outcome text to reflect no money
        }
    }
}