function login() {
    // Get the values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Construct the URL for GET request (this is just an example)
    var url = 'process_login.php?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
    
    // Perform GET request using XMLHttpRequest (or fetch API)
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle the response if needed
        console.log(xhr.responseText); // Example: response handling
      }
    };
    xhr.send();
  }
  