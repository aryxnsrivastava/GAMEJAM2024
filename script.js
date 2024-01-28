// Function to handle form submission
function submitForm() {
    // Get values from the form
    const channelName = document.getElementById('channelName').value;
    const headline = document.getElementById('headline').value;
    const description = document.getElementById('Description').value;

    // Get photo URL
    const photoUrl = document.getElementById('file-ip-1-preview').src;

    // Get video URL
    const videoUrl = document.getElementById('file-ip-2-preview').src;

    // Construct the URL for submittedNews.html with parameters
    const submittedNewsUrl = `submittedNews.html?channelName=${encodeURIComponent(channelName)}&headline=${encodeURIComponent(headline)}&description=${encodeURIComponent(description)}&photoUrl=${encodeURIComponent(photoUrl)}&videoUrl=${encodeURIComponent(videoUrl)}`;

    // Redirect to submittedNews.html with parameters
    window.location.href = submittedNewsUrl;
}

// Function to display a preview of the selected photo
function showPreview(event) {
    const input = event.target;
    const preview = document.getElementById('file-ip-1-preview');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Function to display a preview of the selected video
function showVideoPreview(event) {
    const input = event.target;
    const preview = document.getElementById('file-ip-2-preview');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.classList.add('show'); // Show the video preview element
        };
        reader.readAsDataURL(file);
    }
}
