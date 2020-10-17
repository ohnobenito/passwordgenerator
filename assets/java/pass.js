//USER INPUT CRITERIA:
let length;
let confirmUpper;
let confirmNumbers;
let confirmSpecial;
let confirmLower;


//THE FOLLOWING ARRAYS ARE USED FOR USER PROMPTS:
let Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let Numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
let Special = [" ", "!", "\"", "#", "$", "%", "&","'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
let password = "";

//USER CLICKS BUTTON ON PAGE TO GENERATE PASSWORD:
function generate(){

//USER RECEIVES PROMPTS FOR PASSWORD CRITERIA, STARTING WITH PASSWORD LENGTH:

do {    //USING NUMBER(PROMPT TO CHANGE STRING ANSWER TO NUMBER VALUE:
    length = Number(prompt("How many characters would you like your password to be? Please choose a number between 8 and 128"));
} 
while (isNaN(length) || length < 8 || length > 128);
alert("You've requested your password is " + length + " characters long");

//WHILE LOOP RUNS UNTIL VALID ANSWER IS RECEIVED
 
//AFTER LENGTH IS VALIDATED, SERIES OF PROMPTS COME FOR PASSWORD CRITERIA:
do {
    alert("please choose one or more of the following:");
    confirmUpper =confirm("Choose OK if you would like to include UPPERCASE characters in your password");
    confirmLower =confirm("Choose OK if you would like to include LOWERCASE characters in your password");
    confirmNumbers =confirm("Choose OK if you would like to include NUMBERS in your password");
    confirmSpecial =confirm("Choose OK if you would like to include SPECIAL CHARACTERS in your password");
}
// AT LEAST ONE CRITERIA MUST BE MET, OTHERWISE ALERT AND REPROMPT
while (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial); {
} //WHILE LOOP RUNS UNTIL VALID CHOICE IS SELECTED

    
// FILLING IN USER CRITERIA
// USE OF CONCAT TO COMBINE ARRAYS AS USER CHOOSES
let password=[]
    
if (confirmUpper) {
    alert("You've requested your password contains UPPERCASE");
    password = password.concat(Upper);
    //ADD AT LEAST ONE IF TRUE
}
if (confirmLower) {
    alert("You've requested your password contains LOWERCASE");
    password = password.concat(Lower);
    //ADD AT LEAST ONE IF TRUE
}
if (confirmNumbers) {
    alert("You've requested your password contains NUMBERS");
    password = password.concat(Numbers);
    //ADD AT LEAST ONE IF TRUE
}
if (confirmSpecial) {
    alert("You've requested your password contains SPECIAL CHARACTERS");
    password =password.concat(Special);
    //ADD AT LEAST ONE IF TRUE
}

//AFTER PROMPTS, RUN A FOR LOOP WITH MATH RANDOM TO RANDOMIZE USER SELECTED CRITERIA AND GENERATE PASSWORD:

let makePassword = ""

for (let i = 0; i < length; i++) {
    makePassword = makePassword + password[Math.floor(Math.random() * password.length)];
}
// ADD PASSWORD TO TEXTBOX ON SCREEN:
document.getElementById("display").value = makePassword;
} //CLOSES GENERATE FUNCTION
