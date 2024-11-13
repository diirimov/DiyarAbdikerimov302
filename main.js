
document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;
    const email = document.getElementById('email').value;
    
   
    if (password !== repeatPassword) {
        alert("Пароли не совпадают!");
        event.preventDefault(); 
        return;
    }

    
    if (password.length < 8) {
        alert("Пароль должен содержать не менее 8 символов!");
        event.preventDefault();
        return;
    }

  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Введите корректный email!");
        event.preventDefault();
        return;
    }
    
    alert("Регистрация прошла успешно!");
});
