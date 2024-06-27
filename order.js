document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order submitted!');

    var formData = new FormData(this);
    fetch('https://formspree.io/f/{your-form-id}', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Order successfully submitted!');
        } else {
            alert('There was a problem with your order submission.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your order submission.');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');

    var formData = new FormData(this);
    fetch('https://formspree.io/f/{your-form-id}', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Message successfully sent!');
        } else {
            alert('There was a problem with your message submission.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your message submission.');
    });
});
