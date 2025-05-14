const form = document.getElementById('contact:form');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const succesmsg = document.getElementById('success-message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    succesmsg.textContent = '';

    let Valid = true;
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        Valid = false;
    } 
    if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        Valid = false;
    }
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message can not blank.';
        Valid = false;
    }

    if (Valid) {
        succesmsg.textContent = 'Your message has been sent successfully!';
        form.reset();
    }
});

