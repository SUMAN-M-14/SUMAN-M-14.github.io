// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Based on Time of Day
function dynamicGreeting() {
    const greetingElement = document.querySelector('.hero p');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "GOOD MORNING";
    } else if (currentHour < 18) {
        greetingMessage = "GOOD AFTERNOON";
    } else {
        greetingMessage = "GOOD EVENING";
    }

    greetingElement.innerHTML = `<strong>${greetingMessage}! I'M <span style="color:DARKBLUE;">SUMAN M</span>, A PASSIONATE SOFTWARE ENGINEERING STUDENT.</strong>`;
}

dynamicGreeting();

// Contact Form Validation (optional, if you plan to add a form)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Add further validation as necessary

    alert('Thank you for reaching out!');
    this.reset(); // Reset the form after submission
});
