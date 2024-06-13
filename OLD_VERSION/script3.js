// Get elements
var openButton2 = document.getElementById('openButton2');
var fadedBox2 = document.getElementById('fadedBox2');
var closeButton2 = document.getElementById('closeButton2');
// Function to open the faded box
function openFadedBox() {
    if (fadedBox2) {
        fadedBox2.style.display = 'flex'; // Display the faded box
    }
}
// Function to close the faded box
function closeFadedBox() {
    if (fadedBox2) {
        fadedBox2.style.display = 'none'; // Hide the faded box
    }
}
// Event listeners
if (openButton2) {
    openButton2.addEventListener('click', openFadedBox);
}
if (closeButton2) {
    closeButton2.addEventListener('click', closeFadedBox);
}
