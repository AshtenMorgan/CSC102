function start()
{
    new Audio("StartSound.mp3").play()
    document.getElementById("startButton").disabled = true //disables start button when START is clicked
    document.getElementById("stopButton").disabled = false //enables stop button when START is clicked

}

function stop()
{
    new Audio("StopSound.mp3").play()
    document.getElementById("stopButton").disabled = true //disables stop button when STOP is clicked
    document.getElementById("startButton").disabled = false //enables start button when STOP is clicked
}