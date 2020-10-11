// user clicks button to generate password //
function generate(){

    //set password length
    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

    let password ="";

    //create for loop to choose password characters
    for(var i =0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add pass to previously password sections
    document.getElementById("lastpass").innerHTML += password + "<br>";
}

// set default length display to 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

// function to copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");
}
// user receives PROMPT for password criteria and selects what should be included:
// - user chooses between 8-128 characters
// - user chooses at least one of the following criterias: lowercase, uppercase, numeric, special characters 

// after user defines above, a password is generated

// password is then displayed on screen or through alert