function checkPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    
    const criteriaMet = [
        lengthCriteria,
        uppercaseCriteria,
        lowercaseCriteria,
        numberCriteria,
        specialCharCriteria
    ].filter(Boolean).length;

    
    let strength = '';
    let color = '';

    if (password.length === 0) {
        strength = 'Digite uma senha';
        color = 'black';
    } else if (criteriaMet === 1) {
        strength = 'Muito Fraca';
        color = 'red';
    } else if (criteriaMet === 2) {
        strength = 'Fraca';
        color = 'orange';
    } else if (criteriaMet === 3) {
        strength = 'Média';
        color = 'yellow';
    } else if (criteriaMet === 4) {
        strength = 'Forte';
        color = 'green';
    } else if (criteriaMet === 5) {
        strength = 'Muito Forte';
        color = 'darkgreen';
    }

    result.textContent = `Força da senha: ${strength}`;
    result.style.color = color;
}


document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});
