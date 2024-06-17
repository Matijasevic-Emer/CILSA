const checkField = (event) => {
    const onlyLettersPattern = /^[A-Za-z-á-é-í-ó-ú]+$/
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

const changeStyle = (ck) => {
    if (ck.checked) {
        document.documentElement.style.setProperty('--primary-bg-color', '#000');
        document.documentElement.style.setProperty('--secondary-bg-color', '#fff');
        document.documentElement.style.setProperty('--tertiary-bg-color', '#121313');
        document.documentElement.style.setProperty('--form-bg-color', '#fff');
        document.documentElement.style.setProperty('--border-color', '#ccd0d5');
        document.documentElement.style.setProperty('--text-color', '#f00');
        document.documentElement.style.setProperty('--submit-bg-color', '#000');
        document.documentElement.style.setProperty('--submit-bg-hover-color', '#fff');
        document.documentElement.style.setProperty('--submit-text-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--primary-bg-color', '#3b5998'); // Color original
        document.documentElement.style.setProperty('--secondary-bg-color', '#ffffff'); // Color original
        document.documentElement.style.setProperty('--tertiary-bg-color', '#f0f2f5'); // Color original
        document.documentElement.style.setProperty('--form-bg-color', '#ffffff'); // Color original
        document.documentElement.style.setProperty('--border-color', '#ccd0d5'); // Color original
        document.documentElement.style.setProperty('--text-color', '#1c1e21'); // Color original
        document.documentElement.style.setProperty('--submit-bg-color', '#42b72a')
    }
}
