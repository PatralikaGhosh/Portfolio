// Text to display with typing effect
var textToType = "Patralika Ghosh";
// Speed of typing in milliseconds
var typingSpeed = 100;
// Get the element where the text will be displayed
var typingTextElement = document.getElementById("typing-text");
// Function to simulate typing effect
function typeText() {
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
// Start typing when the page loads
window.onload = typeText;
// Get the elements
var overlay = document.querySelector('.overlay');
var closeButton = document.querySelector('.close-button');
// Function to open the faded box
function openFadedBox() {
    if (overlay) {
        overlay.style.display = 'flex'; // Display the overlay
    }
}
// Function to close the faded box
function closeFadedBox() {
    if (overlay) {
        overlay.style.display = 'none'; // Hide the overlay
    }
}
// Event listeners for opening and closing the faded box
if (overlay && closeButton) {
    overlay.addEventListener('click', closeFadedBox);
    closeButton.addEventListener('click', closeFadedBox);
}
