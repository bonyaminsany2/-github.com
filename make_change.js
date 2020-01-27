var $ = function (id) { return document.getElementById(id); }; // Defining with $.
var calculateChange = function() { // Creating an variable into funtions.
var cents, quarters, dimes, nickels, pennies;
cents = Math.floor(parseInt($("cents").value));//Entering the cents.
if (isNaN(cents) || cents < 0 || cents > 99) { // If the value user entered is not a number.
alert("Enter number between 0 and 99");// Alart msg will pop up"Enter number between 0 and 99".
} else { 
quarters = cents / 25; // Dividing cents for quartes.
quarters = Math.floor(quarters); //Making the value a floor number.
cents = cents % 25; // Keeping into cents.
dimes = cents / 10; // Calculating the dimes
dimes = Math.floor(dimes); //Making the value a floor number.
cents = cents % 10; // Keeping into cents.
nickels = cents / 5; //Diving cents by 5 to make nickels.
nickels = Math.floor(nickels);//Making the value a floor number.
pennies = cents % 5; //// Keeping into cents.
$("quarters").value = quarters;
$("dimes").value = dimes;
$("nickels").value = nickels;
$("pennies").value = pennies;
}
};
window.onload = function () {
$("calculate").onclick = calculateChange;
$("cents").focus();
};