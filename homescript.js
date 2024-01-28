var imageContainer = document.querySelector('.button2');
var startButton = document.getElementById('start-button');
var textElement = document.getElementById('text-overlay2');

imageContainer.addEventListener('mouseover', function() {
    startButton.src = '/Users/anshdeepbhachoo/GAMEJAM2024/buttons/Hover.png';
    textElement.style.opacity = 0.5; // Set opacity to half
});

imageContainer.addEventListener('mouseout', function() {
    startButton.src = '/Users/anshdeepbhachoo/GAMEJAM2024/buttons/Normal.png';
    textElement.style.opacity = 1; // Set opacity back to full
});

textElement.addEventListener('mouseenter', function() {
    textElement.style.opacity = 0.5; // Set opacity to half
});

textElement.addEventListener('mouseleave', function() {
    textElement.style.opacity = 1; // Set opacity back to full
});

function handleClick() {
    // Play a click sound (adjust the sound file path accordingly)

    // Change the image source
    startButton.src = '/Users/anshdeepbhachoo/GAMEJAM2024/buttons/Clicked.png';
    // After a delay (adjust the delay time accordingly), navigate to the intended webpage
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000); // 1000 milliseconds (1 second) delay
}