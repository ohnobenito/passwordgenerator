//user input criteria
let values;
let confirmUpper;
let confirmNumbers;
let confirmSpecial;
let confirmLower;
let choices;

let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lower = "abcdefghijklmnopqrstuvwxyz";
let Numbers = "1234567890";
let Special = "!@#$%^&*()-+=/.,;:'";

let password = "";

//USER CLICKS BUTTON ON PAGE TO GENERATE PASSWORD:
function generate(){

//USER RECEIVES PROMPTS FOR PASSWORD CRITERIA, STARTING WITH PASSWORD LENGTH:
do {
    length = prompt("How many characters would you like your password to be? Please choose a number between 8 and 128", "type answer here");
  } 
  while (isNaN(length) || length < 8 || length > 128);
   //runs this loop until valid answer is received
 
    //AFTER LENGTH IS VALIDATED, SERIES OF PROMPTS COME FOR PASSWORD CRITERIA:
do {
    alert("please choose one or more of the following:");
    confirmUpper =confirm("Will this password include uppercase letters?");
    confirmLower =confirm("Will this password include lowercase letters?");
    confirmNumbers =confirm("Will this password include numbers?");
    confirmSpecial =confirm("Will this password include special characters?");
}
    // AT LEAST ONE CRITERIA MUST BE MET, OTHERWISE ALERT AND REPROMPT
    while (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial); {
    }
 
// IF UPPER IS CONFIRMED, MUST INCLUDE UPPER.
// IF LOWER IS CONFIRMED, MUST INCLUDE LOWER.
// IF NUMBERS IS CONFIRMED, MUST INCLUDE NUMBERS.
// IF SPECIAL IS CONFIRMED, MUST INCLUDE SPECIAL.
// set values for password

//AFTER PROMPTS, RUN A FOR LOOP WITH MATH RANDOM TO RANDOMIZE USER SELECTED CRITERIA AND GENERATE PASSWORD:


// ADD PASSWORD TO TEXTBOX ON SCREEN:
document.getElementById("display").value = password;
}

//EXECUTE ALL OF THAT AND RECEIVE A+ AND BE THE JAVASCRIPT MASTER