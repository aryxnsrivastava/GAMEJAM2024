var imageContainer2 = document.querySelector('.button2');
var imageContainer3 = document.querySelector('.button3');
var imageContainer1 = document.querySelector('.button1');
var startButton = document.getElementById('start-button');
var aboutButton = document.getElementById('about-button');
var howButton = document.getElementById('how-button');
var textElement = document.getElementById('text-overlay2');

imageContainer1.addEventListener('mouseover', function() {
    howButton.src = 'buttons/Hover.png';
    textElement.style.opacity = 0.5; // Set opacity to half
});

imageContainer1.addEventListener('mouseout', function() {
    howButton.src = 'buttons/Normal.png';
    textElement.style.opacity = 1; // Set opacity back to full
});

imageContainer2.addEventListener('mouseover', function() {
    startButton.src = 'buttons/Hover.png';
    textElement.style.opacity = 0.5; // Set opacity to half
});

imageContainer2.addEventListener('mouseout', function() {
    startButton.src = 'buttons/Normal.png';
    textElement.style.opacity = 1; // Set opacity back to full
});

imageContainer3.addEventListener('mouseover', function() {
    aboutButton.src = 'buttons/Hover.png';
    textElement.style.opacity = 0.5; // Set opacity to half
});

imageContainer3.addEventListener('mouseout', function() {
    aboutButton.src = 'buttons/Normal.png';
    textElement.style.opacity = 1; // Set opacity back to full
});

textElement.addEventListener('mouseenter', function() {
    textElement.style.opacity = 0.5; // Set opacity to half
});

textElement.addEventListener('mouseleave', function() {
    textElement.style.opacity = 1; // Set opacity back to full
});

function handleClick(buttonNumber) {
    // Play a click sound (adjust the sound file path accordingly)
    // Change the image source
    if (buttonNumber == 1){
        howButton.src = '/Users/anshdeepbhachoo/GAMEJAM2024/buttons/Clicked.png';
        setTimeout(function () {
            window.location.href = 'howToPlay.html';
        }, 1000); // 1000 milliseconds (1 second) delay
    }

    else if (buttonNumber == 2){
        startButton.src = '/Users/anshdeepbhachoo/GAMEJAM2024/buttons/Clicked.png';
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000); // 1000 milliseconds (1 second) delay
    }

    else if (buttonNumber == 3){
        aboutButton.src = '/Users/anshdeepbhachoo/GAMEJAM2024/buttons/Clicked.png';
        setTimeout(function() {
            window.location.href = 'about.html';
        }, 1000); // 1000 milliseconds (1 second) delay

    // After a delay (adjust the delay time accordingly), navigate to the intended webpage
    
    //link 1
    
    /*if (buttonNumber === 1){
    setTimeout(function () {
        window.location.href = 'howToPlay.html';
    }, 1000); // 1000 milliseconds (1 second) delay
    }

    //link 2
    else if (buttonNumber === 2){
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000); // 1000 milliseconds (1 second) delay
    }  

    //link 3
    else if (buttonNumber === 3){
        setTimeout(function() {
            window.location.href = 'about.html';
        }, 1000); // 1000 milliseconds (1 second) delay
    }   */   
    }
}