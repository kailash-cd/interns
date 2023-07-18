$(document).ready(function() {
    $('#loginform').submit(function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        // Make a POST request to the login API endpoint
        $.ajax({
            url: 'http://54.225.122.8:7000/bh/login/v1',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: username, password: password }),
            success: function(response) {
                if (response === 'Success') {
                    // Successful login
                    alert('Login successful!');
                } else {
                    // Incorrect password
                    alert('Incorrect password');
                }
            },
            error: function() {
                // Error handling
                alert('An error occurred');
            }
        });
    });
});

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Send data to the backend
    fetch('/process', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


  
  