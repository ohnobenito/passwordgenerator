//USER INPUT CRITERIA:
let length;
let confirmUpper;
let confirmNumbers;
let confirmSpecial;
let confirmLower;


//THE FOLLOWING ARRAYS ARE USED FOR USER PROMPTS:
let Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let Special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];


//USER CLICKS BUTTON ON PAGE TO GENERATE PASSWORD:
function generate(){

//USER RECEIVES PROMPTS FOR PASSWORD CRITERIA, STARTING WITH PASSWORD LENGTH:

do {    //USING NUMBER(PROMPT TO CHANGE STRING ANSWER TO NUMBER VALUE:
    length = Number(prompt("How many characters would you like your password to be? Please choose a number between 8 and 128", "type answer here"));
} 
while (isNaN(length) || length < 8 || length > 128);
//WHILE LOOP RUNS UNTIL VALID ANSWER IS RECEIVED
 
//AFTER LENGTH IS VALIDATED, SERIES OF PROMPTS COME FOR PASSWORD CRITERIA:
do {
    alert("please choose one or more of the following:");
    confirmUpper =confirm("Would you like this password to include uppercase letters?");
    confirmLower =confirm("Would you like this password to include lowercase letters?");
    confirmNumbers =confirm("Would you like this password to include numbers?");
    confirmSpecial =confirm("Would you like this password to include special characters?");
}
// AT LEAST ONE CRITERIA MUST BE MET, OTHERWISE ALERT AND REPROMPT
while (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial); {
} //WHILE LOOP RUNS UNTIL VALID CHOICE IS SELECTED
    
// FILLING IN USER CRITERIA
// USE OF CONCAT TO COMBINE ARRAYS AS USER CHOOSES
let password=[""]
    
if (confirmUpper) {
    password = Upper;
}
if (confirmLower) {
    password = password.concat(Lower);
}
if (confirmNumbers) {
    password = password.concat(Numbers)
}
if (confirmSpecial) {
    password =password.concat(Special)
}

//AFTER PROMPTS, RUN A FOR LOOP WITH MATH RANDOM TO RANDOMIZE USER SELECTED CRITERIA AND GENERATE PASSWORD:
let makePassword = ""

for (let i = 0; i < length; i++) {
    makePassword = makePassword + password[Math.floor(Math.random() * password.length)];
}
// ADD PASSWORD TO TEXTBOX ON SCREEN:
document.getElementById("display").value = makePassword;
} //CLOSES GENERATE FUNCTION
