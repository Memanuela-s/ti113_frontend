document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || password !== confirmPassword || !/^(?=.*\d.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        alert('Dados inválidos! Verifique os campos e tente novamente.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.username === username)) {
        alert('Usuário já cadastrado!');
        return;
    }

    users.push({ username, email });
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('registerForm').reset();
    renderTable();

    document.getElementById('registerBtn').textContent = 'UNLOCKER';
    document.querySelectorAll('input').forEach(input => input.disabled = true);
});

function renderTable() {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = user.username;
        row.insertCell(1).textContent = user.email;
    });
}

renderTable();
