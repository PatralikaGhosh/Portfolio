// Get elements
var openButton = document.getElementById('openButton');
var fadedBox = document.getElementById('fadedBox');
var closeButton = document.getElementById('closeButton');
// Function to open the faded box
function openFadedBox() {
    if (fadedBox) {
        fadedBox.style.display = 'flex'; // Display the faded box
    }
}
// Function to close the faded box
function closeFadedBox() {
    if (fadedBox) {
        fadedBox.style.display = 'none'; // Hide the faded box
    }
}
// Event listeners
if (openButton) {
    openButton.addEventListener('click', openFadedBox);
}
if (closeButton) {
    closeButton.addEventListener('click', closeFadedBox);
}
