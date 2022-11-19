//Declaración del Arrary Mi Cartera de Inversiones
let miCartera = JSON.parse(localStorage.getItem("miCartera")) || [];

//En este punto reviso si existe una Cartera de inversión guardada en el Storage, en caso de que exista
//La dibuja en el Offcanvas, si no existe, lanza un mensaje en el Offcanvas.
(miCartera.length != 0) && dibujarMiCartera();
(miCartera.length == 0) && (document.getElementById("totalInvertido").innerText = "No se ha realizado ninguna inversión ¡Comience hoy mismo a invertir en su futuro!")

//Declaro la función dibujar Mi Cartera para que sea mostrada en caso de que exista una previa en el Storage
function dibujarMiCartera() {
    for (const activoPorAgregar of miCartera) {
        document.getElementById("tablabodyCartera").innerHTML += `
    <tr>
    <td class="imageLogo"><img src="./imagenes/${activoPorAgregar.image}" class="img-fluid" alt="..."></td>
        <td class="align-middle">${activoPorAgregar.ticker}</td>
        <td class="align-middle">${activoPorAgregar.cantidad}</td>
        <td class="align-middle">${activoPorAgregar.price} USD</td>
        <td class="align-middle">${activoPorAgregar.price * activoPorAgregar.cantidad} USD</td>
        <td class="text-center align-middle"><button id='btnVentaAcciones${activoPorAgregar.id}' class="btn btn-danger" onclick="vender(event)">Vender</button></td>
    </tr>
    `
        let dineroInvertido = miCartera.reduce((acumulador, activos) => acumulador + (activos.price * activos.cantidad), 0)
        document.getElementById("totalInvertido").innerText = "Total Invertido =  " + dineroInvertido + " USD";
    }
}

//Obtengo dato del nombre de Usuario desde el Storage y lo muestro en el Navbar pasando el nombre todo a mayuscula
let nombreDeUsuario = localStorage.getItem("user");

if (nombreDeUsuario == "laureano" || nombreDeUsuario == "laura") {
    document.getElementById("nombreDeUsuario").innerText = ("¡Bienvenido, " + nombreDeUsuario.toUpperCase() + " !")
    document.getElementById("buttonSesion").innerText = ("Cerrar Sesión")
}
else {
    document.getElementById("buttonSesion").innerText = ("Iniciar Sesión");
    window.location.href = "index.html"
}

//Creación de Tabla de Acciones, tomando datos del Objeto Literal que se encuentra en activo.js
//Primero hago los correspondientes llamados al HTML, para crear etiquetas, asignarles clases e indicar padres
let tablaAcciones = document.getElementById("tablaAcciones");

let tabla = document.createElement("table");
tabla.className = "table table-striped";
tablaAcciones.append(tabla);

let thead = document.createElement("thead");

thead.innerHTML += `
<tr>
    <th class="text-center">Imagen</th>
    <th class="text-center">Ticker</th>
    <th class="text-center">Nombre</th>
    <th class="text-center">Precio Dólar</th>
    <th class="text-center">Precio ARS</th>
    <th class="text-center">Comprar</th>
</tr>
`;

tabla.append(thead);

let tablaBody = document.createElement("tbody");

//En este punto se realiza la correspondiente función que crea la tabla
function dibujarTablaAcciones() {
    for (const accionesEnTabla of acciones) {
        tablaBody.innerHTML += `
<tr>
    <td class="imageLogo"><img src="./imagenes/${accionesEnTabla.image}" class="img-fluid" alt="..."></td>
    <td class="text-center align-middle">${accionesEnTabla.ticker}</td>
    <td class="text-center align-middle">${accionesEnTabla.name}</td>
    <td class="text-center align-middle"> ${accionesEnTabla.price} USD</td>
    <td class="text-center align-middle">AR$ ${accionesEnTabla.price * dolarCompra}</td>
    <td class="text-center align-middle"><button id='btnCompraAcciones${accionesEnTabla.id}' class="btn btn-success">Comprar</button></td>
</tr>
`;
    }

    tabla.append(tablaBody);

    //EVENTO Que agrega a la Cartera el Activo Comprado

    acciones.forEach((accionesEnTabla) => {
        document.getElementById(`btnCompraAcciones${accionesEnTabla.id}`).addEventListener("click",
            function () {
                Swal.fire({
                    title: `¿Desea Comprar una acción de ${accionesEnTabla.name}?`,
                    showDenyButton: true,
                    confirmButtonText: '¡SI!',
                    denyButtonText: `NO`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(`¡Felicitaciones, compraste una acción de ${accionesEnTabla.name}!`);
                        agregarALaCartera(accionesEnTabla);
                    } else if (result.isDenied) {
                        Swal.fire('¡El activo no ha sido comprado!')
                    }
                })
            });
    })
}

//Creación de Cards Crypto, tomando datos del Objeto Constructor que se encuentra en activo.js
let cardCrypto = document.getElementById("cardsCrypto")

function dibujarCardsCrypto() {
    for (const cryptosCards of crypto) {
        cardCrypto.innerHTML += `
    <div class="card " >
        <img src="./imagenes/${cryptosCards.image}" class="card-img-top img-fluid mx-auto" style="width: 50%" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center align-middle">${cryptosCards.ticker}</h5>
            <p class="card-text text-center align-middle">${cryptosCards.name}</p>
            <h5 class="card-title text-center align-middle"> ${cryptosCards.price} USD</h5>
            <h5 class="card-title text-center align-middle">AR$ ${cryptosCards.price * dolarCompra}</h5>
            <button id='btnCompraCrypto${cryptosCards.id}' class="btn btn-success text-center align-middle">Comprar</button>
        </div>
    </div>`
    }

    //EVENTO Que agrega a la Cartera el Activo Comprado

    crypto.forEach((cryptosCards) => {
        document.getElementById(`btnCompraCrypto${cryptosCards.id}`).addEventListener("click",
            function () {
                Swal.fire({
                    title: `¿Desea Comprar un ${cryptosCards.name}?`,
                    showDenyButton: true,
                    confirmButtonText: '¡SI!',
                    denyButtonText: `NO`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(`¡Felicitaciones, compraste un ${cryptosCards.name}!`);
                        agregarALaCartera(cryptosCards);
                    } else if (result.isDenied) {
                        Swal.fire('¡El activo no ha sido comprado!')
                    }
                })
            });
    })
}

//FUNCION Que agrega al carrito luego de realizar el evento

function agregarALaCartera(activoPorAgregar) {
    miCartera.push(activoPorAgregar);
    document.getElementById("tablabodyCartera").innerHTML += `
    <tr>
    <td class="imageLogo"><img src="./imagenes/${activoPorAgregar.image}" class="img-fluid" alt="..."></td>
        <td class="align-middle">${activoPorAgregar.ticker}</td>
        <td class="align-middle">${activoPorAgregar.cantidad}</td>
        <td class="align-middle">${activoPorAgregar.price} USD</td>
        <td class="align-middle">${activoPorAgregar.price * activoPorAgregar.cantidad} USD</td>
        <td class="text-center align-middle"><button id='btnVentaAcciones${activoPorAgregar.id}' class="btn btn-danger" onclick="vender(event)">Vender</button></td>
    </tr>
    `

    let dineroInvertido = miCartera.reduce((acumulador, activos) => acumulador + (activos.price * activos.cantidad), 0)

    if (miCartera.length != 0) {
        document.getElementById("totalInvertido").innerText = "Total Invertido =  " + dineroInvertido + " USD";

        localStorage.setItem("miCartera", JSON.stringify(miCartera));
    } else {
        document.getElementById("totalInvertido").innerText = "No se ha realizado ninguna inversión ¡Comience hoy mismo a invertir en su futuro!"
    }
}

//Función Cerrar Sesión, en donde se limpia todo el Local Storage y te devuelve a la Página de Inicio de Sesión

function cerrarSesion() {
    localStorage.clear();
    window.location.href = "index.html";
}

//Obtener valor dolar API

function obtenerDolar() {
    //Se define la URL
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
        //Se transforma de formato String a Array de Objeto
        .then(respuesta => respuesta.json())
        //Del Array de Objeto se toma solamente la cotización del Dolar Blue
        .then(cotizaciones => {
            const dolarBlue = cotizaciones.blue;
            //Se muestra en pantalla solamente el valor del Dolar Blue promedio
            document.getElementById("cotizacionDolar").innerHTML += `
                <p>Valor Dolar: $ ${dolarBlue.value_avg}</p>
            `;
            //Se declara la variable que asigna el valor del Dolar Blue Promedio
            dolarCompra = dolarBlue.value_avg;
            //Se procede a dibujar las tablas y cards de los activos con valor en Pesos Argentino Actualizado
            dibujarTablaAcciones();
            dibujarCardsCrypto();
        })
}
//Se llama a la función Obtener Dolar
obtenerDolar();


//Para vender activos
function vender(ev) {
    let fila = ev.target.parentElement.parentElement;
    let id = fila.children[0].innerText;
    let indice = miCartera.findIndex(producto => producto.id == id);
    // Elimino el producto de la Cartera de Inversión
    miCartera.splice(indice, 1);
    //Elimino la Fila de la Tabla del Offcanvas
    fila.remove();

    Toastify({
        text: `Activo vendido`,
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    //Se realizan las acciones para volver a ajustar la suma y lanzar mensaje en caso de que la Cartera de Inversión este vacía
    let dineroInvertido = miCartera.reduce((acumulador, activos) => acumulador + (activos.price * activos.cantidad), 0)

    if (miCartera.length != 0) {
        document.getElementById("totalInvertido").innerText = "Total Invertido =  " + dineroInvertido + " USD";

        localStorage.setItem("miCartera", JSON.stringify(miCartera));
    } else {
        document.getElementById("totalInvertido").innerText = "No se ha realizado ninguna inversión ¡Comience hoy mismo a invertir en su futuro!"
        localStorage.setItem("miCartera", JSON.stringify(miCartera));
    }
}


//Creación de Reloj que actualiza la hora cada un segundo, ubicada en la NavBar

const horaActual = () => {
    let hora = document.getElementById("horaActual");

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    hora.innerText = `La hora actual es: ${time}`;
};

horaActual();
setInterval(horaActual, 1000);