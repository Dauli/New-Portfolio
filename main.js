// Listen for submit form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get value stored in variable;
    var name = getInputValue('name');
    var email = getInputValue('email');
    var message = getInputValue('message');

    console.log(name);
}

// Function to get forms values
function getInputValue(id) {
    return document.getElementById(id).value;
}