(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_NIHnHXYmsCWOlgEzdqfmD');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // Service ID for gmail and Template ID
            emailjs.sendForm('service_32y0agp', 'template_6mem2gj', this)
                .then(function() {
                    console.log('SUCCESS!');
                    alert('Message sent!');
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Error..');
                });
        });
    }

    