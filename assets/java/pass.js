//USER CLICKS BUTTON TO GENERATE PASSWORD
function generate(){

//USER RECEIVES PROMPTS FOR PASSWORD CRITERIA
let length = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128", "type answer here");

 //IF NO NUMBER SELECTED, ALERT MUST POP UP AND PREVENT MOVING FORWARD
    //if else statements? 
 
    //AFTER LENGTH IS SELECTED, SERIES OF PROMPTS COME FOR PASSWORD CRITERIA
confirmUpper =confirm("Will this password include uppercase letters?")
confirmLower =confirm("Will this password include lowercase letters?")
confirmNumbers =confirm("Will this password include numbers?")
confirmSpecial =confirm("Will this password include special characters?")
 
// IF UPPER IS CONFIRMED, MUST INCLUDE UPPER.
// IF LOWER IS CONFIRMED, MUST INCLUDE LOWER.
// IF NUMBERS IS CONFIRMED, MUST INCLUDE NUMBERS.
// IF SPECIAL IS CONFIRMED, MUST INCLUDE SPECIAL.
// set values for password
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let special = "!@#$%^&*()-+=/.,;:'";

//AFTER PROMPTS, RUN A FOR LOOP TO RANDOMIZE SELECTION
for(let i =0; i<=length; i++){
    password = password + upper.charAt + lower.charAt + numbers.charAt + special.charAt(Math.floor(Math.random() * Math.floor(upper.length)))
}
// ADD PASSWORD TO TEXTBOX ON SCREEN
document.getElementById("display").value = password;
}

//EXECUTE ALL OF THAT AND RECEIVE A+ AND BE THE JAVASCRIPT MASTER