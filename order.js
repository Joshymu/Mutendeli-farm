document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order submitted!');
    // Add your form submission code here
    var formData = new FormData(this);
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
    // Add your form submission code here
    var formData = new FormData(this);
    fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
});
