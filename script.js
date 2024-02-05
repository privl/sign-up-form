const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

password.addEventListener('input', comparePassword);
confirmPassword.addEventListener('input', comparePassword);

function comparePassword() {
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('not-matched');
    } else {
        confirmPassword.classList.remove('not-matched');
    }
}