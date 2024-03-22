let carrito = [];
const mostrar = document.getElementById("mostrar");

fetch('../js/stock.json')
    .then((res) => res.json())
    .then((data) => {

        data.forEach((producto1) => {
            const { id, titulo, imagen, categoria, descripcion, precio } = producto1;
            let contenido = document.createElement('div')
            contenido.className = "card cardEstilo cardestilo";
            contenido.style = "width: 18rem;";
            contenido.innerHTML = `
            <img src="${imagen}" class="card-img-top" alt="${id}">
            <div class="card-body cardiv">
                <h4 class="card-title">${titulo}</h4>
                <p class="card-text">${descripcion}</p>
                <p class="card-text">${precio}</p>
                <p class="card-text">Código: ${categoria.nombre}</p>
            </div>
            `;

            mostrar.append(contenido);

            let comprar = document.createElement("a");
            comprar.innerText = "Agregar al carrito"
            comprar.className = "btn btn-primary btnAgregar"
            mostrar.lastChild.append(comprar)
            comprar.addEventListener("click", () => {
                carrito.push({
                    nombre: titulo,
                    precio: precio
                });
            });
        })
    })

let carritoMostrar;

const sweetAlert = document.querySelector('#carritoBtn');

sweetAlert.addEventListener('click', () => {

    let compratotal = "";
    carrito.forEach(carrito => {
        compratotal += "<p>" + carrito.nombre + ' $' + carrito.precio + "</p>";

    });

    const total = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);

    Swal.fire(
        {
            title: 'Su carrito',
            html: compratotal +
                '<p> Su total es: $ ' + total + '</p>',

            showCloseButton: true,
            closeButtonAriaLabel: 'cerrar',

            showConfirmButton: true,
            confirmButtonText: 'Terminar compra',
            confirmButtonColor: '#04A1A8',

            showCancelButton: true,
            cancelButtonText: 'Seguir comprando',
            cancelButtonColor: '#04A1A8',
        })
        .then((resultado) => {
            if (resultado.isConfirmed) {
                Swal.fire({
                    title: 'Muchas gracias por su compra!!'
                })
                carrito = [];
                compratotal = "";
            }
        });
})

carritoMostrar = localStorage.getItem("carrito");

