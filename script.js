function generatePassword() {
    let length = document.getElementById("length").value;
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+";

    let allChars = "";

    if (uppercase) allChars += upperChars;
    if (lowercase) allChars += lowerChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    let passwordField = document.getElementById("password");

    if (passwordField.value === "") {
        alert("Generate password first!");
        return;
    }

    passwordField.select();
    document.execCommand("copy");

    alert("Password copied!");
}