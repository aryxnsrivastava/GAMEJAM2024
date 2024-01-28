
function submitForm() {
    // Get user inputs
    var channelName = document.getElementById('input2').value;
    var headline = document.getElementById('input1').value;
    var description = document.getElementById('input3').value;

    // Store user inputs in local storage
    localStorage.setItem('channelName', channelName);
    localStorage.setItem('headline', headline);
    localStorage.setItem('description', description);

    // Redirect to the submitted news page
    window.location.href = 'submittedNews.html';
    return false; // Prevents the default form submission behavior
}