// Variables


// EVENTOS
const resgitroForm = document.querySelector('#registrar')
resgitroForm.addEventListener('click', (e) => {


    e.preventDefault()


    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    if (name == '') {

        return alert('Faltan Datos "Nombre"')

    }

    if (email == '') {

        return alert('Faltan Datos "Email"')

    }

    if (password == '') {

        return alert('Faltan Datos "Password"')

    } else {

        const Users = JSON.parse(localStorage.getItem('users')) || []
        const usuarioRegistrado = Users.find(user => user.email === email)
        if (usuarioRegistrado) {

            return alert('Usuario ya esta registrado')

        }





        Users.push({ name: name, email: email, password: password })
        localStorage.setItem('users', JSON.stringify(Users))
        alert('Resgistro exitoso')


    }
})



