// script.js
const passwordForm = document.getElementById('password-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const messageContainer = document.getElementById('message-container');

passwordForm.addEventListener('submit', function(event) {
 event.preventDefault();

 const username = usernameInput.value;
 const password = passwordInput.value;

 if (!isPasswordValid(password)) {
  displayErrorMessage("Password must be at least 8 characters long and contain at least one uppercase letter and one digit.");
 } else {
  removeErrorMessage();
  displaySuccessMessage(`Welcome, ${username}! Your Password Is Valid.`);
  // Perform further actions, like submitting the form
 }
});

function isPasswordValid(password) {
 const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
 return passwordPattern.test(password);
}

function displayErrorMessage(message) {
 const errorMessage = document.createElement('p');
 errorMessage.classList.add('error-message');
 errorMessage.textContent = message;
 messageContainer.innerHTML = '';
 messageContainer.appendChild(errorMessage);
}

function displaySuccessMessage(message) {
 const successMessage = document.createElement('p');
 successMessage.classList.add('success-message');
 successMessage.textContent = message;
 messageContainer.innerHTML = '';
 messageContainer.appendChild(successMessage);
}

function removeErrorMessage() {
 const errorMessage = messageContainer.querySelector('.error-message');
 if (errorMessage) {
  messageContainer.removeChild(errorMessage);
 }
}

