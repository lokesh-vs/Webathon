
function togglePassword() {
    var showPasswordButton = document.querySelector("#show-password-button");
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent ="Hide";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent ="Show";
    }
}
function openNewPage() {
    if (document.querySelector("#myForm").checkValidity()){
    // Set the URL of the new webpage
    var newPageUrl = './hack.html'; // Replace with your desired URL

    // Open the new webpage
    window.location.href = newPageUrl;
    }
}

function validateLogin(event) {
    event.preventDefault();

    // Get username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check against hardcoded username and password
    if (username === "user" && password === "password") {
        // Redirect to a success page or perform other actions
        alert("Login successful!");
        if (document.querySelector("#myForm").checkValidity()){
            // Set the URL of the new webpage
            var newPageUrl = './index.html'; // Replace with your desired URL
        
            // Open the new webpage
            window.location.href = newPageUrl;
            }
        // You can redirect to another page using window.location.href
    } else {
        // Display an error message
        alert("Invalid username or password.");
    }
}

