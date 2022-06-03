function credCheck()                             
{
    var firstName = document.forms[0].elements["FirstName"];              
    var lastName = document.forms[0].elements["LastName"];   
    var badge = document.forms[0].elements["Badge"];
   
    if (firstName.value == "")                                 
    {
        window.alert("Please enter your first name.");
        firstName.focus();
        return false;
    }
    else if (lastName.value == "")                              
    {
        window.alert("Please enter your last name.");
        lastName.focus();
        return false;
    }
    else if (firstName.value.length + lastName.value.length > 21)                              
    {
        window.alert("First and last name cannot total more than 20 characters.");
        lastName.focus();
        return false;
    }
    else if (badge.value.length != 3)                                  
    {
        window.alert("Please enter a 3-digit badge number.");
        badge.focus();
        return false;
    }
    else
    {
        window.alert("Logged In Successfully! Welcome " + firstName.value + " " + lastName.value + "!");
    }
}