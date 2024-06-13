// Text to display with typing effect
const textToType: string = "Patralika Ghosh";

// Speed of typing in milliseconds
const typingSpeed: number = 100;

// Get the element where the text will be displayed
const typingTextElement: HTMLElement | null = document.getElementById("typing-text");

// Function to simulate typing effect
function typeText() {
    let index: number = 0;
    const textLength: number = textToType.length;

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