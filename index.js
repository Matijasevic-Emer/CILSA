const checkField = (event) => {
    const onlyLettersPattern = /^[A-Za-z]+$/
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const name = document.getElementById("name").value.trim()
    const surname = document.getElementById("surname").value.trim()
    const country = document.getElementById("country").value.trim()
    const birthdate = document.getElementById("birthdate").value.trim()
    const email = document.getElementById("email").value.trim()
    const buttonSubmit = document.getElementById("submit")
    let checked = true
    if (name && surname && country && birthdate && email) {
        if (!onlyLettersPattern.test(name)) {
            checked = false
            alert("El campo 'Nombre' solo acepta letras. Por favor corrija")
        }
        if (!onlyLettersPattern.test(surname)) {
            checked = false
            alert("El campo 'Apellido' solo acepta letras. Por favor corrija")
        }
        if (!onlyLettersPattern.test(country)) {
            checked = false
            alert("El campo 'País de residencia' solo acepta letras. Por favor corrija")
        }
        if (!emailPattern.test(email)) {
            checked = false
            alert("El campo Email no corresponde a un correo electrónico. Por favor corrija")
        }
    }
    else {
        checked = false
        alert("Por favor complete los campos del formulario.")
    }
    checked ? buttonSubmit.value = "👌👌👌" : event.preventDefault();
}