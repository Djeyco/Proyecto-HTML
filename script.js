document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var login = document.form.login.value;
    var password = document.form.password.value;
    if (password === '1002' && login === 'ejci') {
        window.location.href = 'page.html';
    } else {
        alert("Por favor, ingrese nombre de usuario y contraseña correctos.");
    }
});
