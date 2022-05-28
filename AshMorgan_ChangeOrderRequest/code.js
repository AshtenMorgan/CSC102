var count = 11; //variable for countdown
var initiated = 0; //variable for whether or not button was clicked
function startCountdown() //creates a function to begin countdown sequence
{
    if (initiated == 0) 
    { 
        initiated = 1; //prevents repeated initiation of startCountdown
        for (var i = 0; i < 11; i++) //loops ten times
        {
            if (i < 6)
            {
                setTimeout(displayCount, 1000 * i) //calls displayCount after (1000 * i) milliseconds
            }

            else if (i >= 6 && i < 10)
            {
                setTimeout(warning, 1000 * i)
            }

            else
            {
                setTimeout(blastOff, 1000 * i) //calls blastOff after 10,000 milliseconds
            }
        }
    }
}
function displayCount() //creates function for displaying count
{
    count--; //decrements the value of count by 1
    document.getElementById("countdown").innerHTML = count; //displays count at <p id="countdown">
}
function blastOff() //creates function for displaying "Blast off!"
{
    //count--;
    document.getElementById("countdown2").innerHTML = " "; //displays "Blast off!" at <p id="countdown">
    document.getElementById("countdown").innerHTML = "Blast off!";
    //resets button
    initiated = 0;
    count = 11;
}
function warning()
{
    count--;
    document.getElementById("countdown2").innerHTML = "Warning! Less than half way to launch. T-minus...";
    document.getElementById("countdown").innerHTML = count;
}