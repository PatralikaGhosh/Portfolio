
// // Text to display with typing effect
// var textToType = "Patralika Ghosh";
// Speed of typing in milliseconds
var typingSpeed = 100;
// Get the element where the text will be displayed
var typingTextElement = document.getElementById("typing-text");
// Function to simulate typing effect
function typeText(textToType) {
    var index = 0;
    var textLength = textToType.length;
    if (typingTextElement) {
        typingTextElement.textContent = "";
        function type() {
            if (index < textLength) {
                if (typingTextElement) {
                    typingTextElement.textContent += textToType.charAt(index);
                    index++;
                    setTimeout(type, typingSpeed);
                }
            }
        }
        // Start the typing effect
        type();
    }
}
