//for (var i = 1; i < 12; i++)
    var count = 10; //variable for countdown
    var initiated = 0; //variable for whether or not button was clicked
            //create a function to begin countdown sequence
            function startCountdown()
            {
                if (initiated == 0) 
                { 
                initiated = 1;
                for (var i = 1; i < 11; i++)
                {
                    count--;
                    document.getElementById("countdown").innerHTML = count;
                }
                }
            }