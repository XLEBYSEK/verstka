document.getElementById("btn").addEventListener("click",
    function () {
        const LoginInput = document.getElementById("log").value
        const PasswordInput = document.getElementById("pass").value
        let login = "log"
        let password = "pass"
        if (LoginInput === login && PasswordInput === password) {
            window.open('lenta.html')

        }
    
    else {
        alert("Неверные данные")}
    })



