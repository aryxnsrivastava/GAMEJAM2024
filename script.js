

function showPreview(event){
    if(event.target.files.length > 0){
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    }
}
function showVideoPreview(event) {
    const videoPreview = document.getElementById('file-ip-2-preview');
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const videoURL = URL.createObjectURL(file);

        // Set the video source
        videoPreview.src = videoURL;

        // Ensure the video is loaded before setting the display property
        videoPreview.onloadedmetadata = function () {
            videoPreview.style.display = 'block';
            videoPreview.play(); // Start playing the video
        };
    } else {
        videoPreview.style.display = 'none';
    }
}



function submitForm() {
    // Get user inputs
    var channelName = document.getElementById('channelName').value;
    var headline = document.getElementById('headline').value;
    var userImage = document.getElementById('file-ip-1').files[0];
    var description = document.getElementById('Description').value;

    // Create URL parameters
    var url = `submittednews.html?channelName=${encodeURIComponent(channelName)}&headline=${encodeURIComponent(headline)}&description=${encodeURIComponent(description)}`;

    // Add userImage to URL if provided
    if (userImage) {
        var imageUrl = URL.createObjectURL(userImage);
        url += `&userImage=${encodeURIComponent(imageUrl)}`;
    }

    // Redirect to the submitted news page
    window.location.href = url;
}