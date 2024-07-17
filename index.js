const msg = document.getElementById('msg');
const checkField = (event) => {
    const onlyLettersPattern = /^[A-Za-z-á-é-í-ó-ú]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const country = document.getElementById("country").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();
    const email = document.getElementById("email").value.trim();
    let checked = true;

    if (name && surname && country && birthdate && email) {
        if (!onlyLettersPattern.test(name)) {
            checked = false;
            customAlert("El campo 'Nombre' solo acepta letras. Por favor corrija");
        }
        if (!onlyLettersPattern.test(surname)) {
            checked = false;
            customAlert("El campo 'Apellido' solo acepta letras. Por favor corrija");
        }
        if (!onlyLettersPattern.test(country)) {
            checked = false;
            customAlert("El campo 'País de residencia' solo acepta letras. Por favor corrija");
        }
        if (!emailPattern.test(email)) {
            checked = false;
            customAlert("El campo Email no corresponde a un correo electrónico. Por favor corrija");
        }
    } else {
        checked = false;
        customAlert("Por favor complete los campos del formulario.");
    }

    if (checked) {
        okAlert("Exito! tu mensjae fue enviado!!")
    } else {
        event.preventDefault();
        event.stopPropagation();
    }


    // Activar las clases de Bootstrap para mostrar los errores
    event.target.classList.add("was-validated");
};

const customAlert = (msg) => {
    console.log(msg);

}

const okAlert = (msg) => {

    msg.innerHTML = `
        <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${msg}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
}


const changeStyle = (ck) => {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const formContainer = document.querySelector('.card');
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submit');

    if (ck.checked) {
        // Aplicar estilos de alto contraste
        body.classList.remove('bg-light', 'text-dark');
        body.classList.add('bg-dark', 'text-warning');

        header.classList.remove('bg-primary', 'text-white');
        header.classList.add('bg-dark', 'text-danger');

        footer.classList.remove('bg-primary', 'text-white');
        footer.classList.add('bg-dark', 'text-danger');

        formContainer.classList.remove('bg-light');
        formContainer.classList.add('bg-dark', 'text-warning');

        form.classList.remove('bg-white');
        form.classList.add('bg-dark', 'text-warning');

        submitButton.classList.remove('btn-success');
        submitButton.classList.add('btn-warning', 'text-dark');
    } else {
        // Revertir a los estilos normales
        body.classList.remove('bg-dark', 'text-warning');
        body.classList.add('bg-light', 'text-dark');

        header.classList.remove('bg-dark', 'text-danger');
        header.classList.add('bg-primary', 'text-white');

        footer.classList.remove('bg-dark', 'text-danger');
        footer.classList.add('bg-primary', 'text-white');

        formContainer.classList.remove('bg-dark', 'text-warning');
        formContainer.classList.add('bg-light');

        form.classList.remove('bg-dark', 'text-warning');
        form.classList.add('bg-white');

        submitButton.classList.remove('btn-warning', 'text-dark');
        submitButton.classList.add('btn-success');
    }
};


