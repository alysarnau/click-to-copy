let copyButton = document.querySelector("#click-to-copy")
copyButton.addEventListener("click", copyToClipboard)
let generatePasswordBtn = document.querySelector("#click-to-generate")
generatePasswordBtn.addEventListener("click", generatePassword)
let copyText = document.querySelector("#copy-text")

function copyToClipboard() {
    // select copy text at point of click
    copyText = document.querySelector("#copy-text")
    if (copyText.value.length < 1) {
        alert("Please enter text!");
        return
    }
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

function generatePassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 16
    let password = ""
    for (let i = 0; i < passwordLength+1; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.charAt(randomNumber)
    }
    console.log(password)
    copyText.value = password
}