function checkPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    let strength = '';
    let color = '';

    if (password.length < 6) {
        strength = 'Fraca';
        color = 'red';
    } else if (password.length < 10) {
        strength = 'Média';
        color = 'yellow';
    } else {
        strength = 'Forte';
        color = 'green';
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

// Adicionando o evento para o Enter
document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});
