const formLogin = document.querySelector('.login-form')
formLogin.addEventListener('submit',handlerSubmit)
function handlerSubmit(event) {
    event.preventDefault();
    const { email, password } = ewent.currentTarget.elements
    if (!email.value || !password.value) {
        const message = `insert all field`;
        alert (message)
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data)
    }
    formLogin.reset()
}