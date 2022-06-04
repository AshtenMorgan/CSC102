function credCheck()   //Function for checking credentials of user input                          
{
    var firstName = document.forms[0].elements["FirstName"];  //creates variable for input of First Name            
    var lastName = document.forms[0].elements["LastName"];   //creates variable for input of Last Name
    var badge = document.forms[0].elements["Badge"];   //creates variable for input of Badge Number
   
    if (firstName.value == "")    //If nothing is input in the First Name input field                             
    {
        window.alert("Please enter your first name.");  
        firstName.focus();  //highlights First Name input field
    }
    else if (lastName.value == "")                              
    {
        window.alert("Please enter your last name.");
        lastName.focus();  //highlights Last Name input field
    }
    else if (firstName.value.length + lastName.value.length > 20)  //If the length of the input first and last name is greater than 20                            
    {
        window.alert("First and last name cannot total more than 20 characters.");
        //highlights both first and last name input fields
        firstName.focus();
        lastName.focus();
    }
    else if (badge.value.length != 3)                                  
    {
        window.alert("Please enter a 3-digit badge number.");
        badge.focus();  //highlights badge input field
    }
    else //if no previous conditions are met (in this case, if all inputs are valid)
    {
        window.alert("Logged In Successfully! Welcome " + firstName.value + " " + lastName.value + "!"); //welcomes user with custom message
        location.replace("EventDriven.html"); //switches to EventDriven.html webpage
    }
}