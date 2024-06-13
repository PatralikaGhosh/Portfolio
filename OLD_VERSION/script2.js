document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    var buttons = document.querySelectorAll('.openButton');
    var closeButtons = document.querySelectorAll('.closeButton');
    var fadedBoxes = document.querySelectorAll('.overlay');

    // Function to open the faded box
    function openFadedBox(targetId) {
        var fadedBox = document.getElementById(targetId);
        if (fadedBox) {
            fadedBox.style.display = 'flex'; // Display the faded box
        }
    }

    // Function to close the faded box
    function closeFadedBox(targetId) {
        var fadedBox = document.getElementById(targetId);
        if (fadedBox) {
            fadedBox.style.display = 'none'; // Hide the faded box
        }
    }

    // Event listeners for open buttons
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = this.getAttribute('data-target');
            openFadedBox(targetId);
        });
    });

    // Event listeners for close buttons
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            var targetId = this.getAttribute('data-target');
            closeFadedBox(targetId);
        });
    });
});
