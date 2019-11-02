var generate = document.getElementById("generate");
var copyText = document.getElementById("copy");

var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericChar = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!","&","#","*","$","%","?","^","@"];
var comboChar = []

generate.addEventListener("click", function(event) { 

        var pwLength = prompt("Select a number of characters");

        while (pwLength > 128 || pwLength < 8){
            if (pwLength < 8){
                alert("Password is too short.");
                var pwLength = prompt("Select a number of characters (Must be between 8-128)");
            }

            else if(pwLength > 128){
                alert("Password is too long.");
                var pwLength = prompt("Select a number of characters (Must be between 8-128)");
            }
        }

        var lowerCase = confirm("Do you want to include lowercase characters?");
        var upperCase = confirm("Do you want to include uppercase characters?");
        var numeric = confirm("Do you want to include numeric characters?");
        var special = confirm("Do you want to include special characters?");

        if (lowerCase){
            comboChar = comboChar.concat(lowerCaseChar);
            console.log(comboChar);
        }

        if (upperCase) {
            comboChar = comboChar.concat(upperCaseChar);
            console.log(comboChar);
        }

        if (numeric) {
            comboChar = comboChar.concat(numericChar);
            console.log(comboChar);
        }

        if (special) {
            comboChar = comboChar.concat(specialChar);
            console.log(comboChar);
        }

        var password = "";

        for (var i=0; i<pwLength; i++){
                
            var randomChar = comboChar[Math.floor(Math.random()*comboChar.length)];
                
            password += randomChar;
        }
                    
        console.log(password);
        var textbox = document.getElementById("password");
        textbox.value = password;

});   


copyText.addEventListener("click", function(event) {
    password.select();
    password.setSelectionRange(0, 130);

    document.execCommand("copy");
});  
                                    

        








