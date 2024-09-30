document.getElementById('showRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Aqui você pode adicionar a lógica para enviar os dados de login e cadastro para o servidor
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de login
    alert('Login realizado com sucesso!');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de cadastro
    alert('Cadastro realizado com sucesso!');
});


