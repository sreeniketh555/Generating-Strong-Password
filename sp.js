const passwordBox = document.getElementById("password");
const lengthInput = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    let password = "";
    const allCharacters = upperCase + lowerCase + NUMBERS + symbols;

    for (let i = 0; i < lengthInput; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    passwordBox.value = password;
} 
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}