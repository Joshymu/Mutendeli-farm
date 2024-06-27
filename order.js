document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Display a submission alert
    alert('Order submitted!');

    // Collect form data
    var formData = new FormData(this);

    // Replace '{your-form-id}' with your actual Formspree form ID
    fetch('https://formspree.io/f/{your-form-id}', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // If successful, show success message
            alert('Order successfully submitted!');
        } else {
            // If there's an error, show an error message
            alert('There was a problem with your order submission.');
        }
    })
    .catch(error => {
        // Catch any network errors and log them
        console.error('Error:', error);
        alert('There was a problem with your order submission.');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Display a submission alert
    alert('Message sent!');

    // Collect form data
    var formData = new FormData(this);

    // Replace '{your-form-id}' with your actual Formspree form ID
    fetch('https://formspree.io/f/{your-form-id}', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // If successful, show success message
            alert('Message successfully sent!');
        } else {
            // If there's an error, show an error message
            alert('There was a problem with your message submission.');
        }
    })
    .catch(error => {
        // Catch any network errors and log them
        console.error('Error:', error);
        alert('There was a problem with your message submission.');
    });
});
