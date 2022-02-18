// Login button event
function login() {
    const emailInput = document  // email input value capturing
        .querySelector('.email__input').value;
    const passwordInput = document  // password input value capturing
        .querySelector('.password__input').value;
    // user validation 
    if (emailInput === 'abc@def.com' && passwordInput === 'abc') {
        window.location.href = 'banking.html';  // redirect to banking page
    } else if (emailInput === '' || passwordInput === '') {
        document
            .querySelector('.error__msg').innerText =
            'Enter email & password'; // error handling
        setTimeout(hideError, 1000);
    } else {
        document
            .querySelector('.error__msg').innerText =
            'Invalid email or password'; // error handling
        setTimeout(hideError, 1000);
    }
}

function hideError() {
    document
        .querySelector('.error__msg').innerText = '';
}
