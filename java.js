/*//INGRESO DE USUARIO Y CONTRASEÑA
let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");
//ALERTA DE BIENVENIDA AL USUARIO
alert("¡¡Bienvenido, " + usuario + " !!")
*/

const miCartera = [];

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
    <th class="text-center">Precio</th>
    <th class="text-center">Comprar</th>
    <th class="text-center">Vender</th>
</tr>
`;

tabla.append(thead);

let tablaBody = document.createElement("tbody");

for (const accionesEnTabla of acciones) {
    tablaBody.innerHTML += `
<tr>
    <td class="imageLogo"><img src="./imagenes/${accionesEnTabla.image}" class="img-fluid" alt="..."></td>
    <td class="text-center align-middle">${accionesEnTabla.ticker}</td>
    <td class="text-center align-middle">${accionesEnTabla.name}</td>
    <td class="text-center align-middle">${accionesEnTabla.price} USD</td>
    <td class="text-center align-middle"><button id='btnCompraAcciones${accionesEnTabla.id}' class="btn btn-success">Comprar</button></td>
    <td class="text-center align-middle"><button id='btnVentaAcciones${accionesEnTabla.id}' class="btn btn-danger">Vender</button></td>
</tr>
`;
}

tabla.append(tablaBody);


let cardCrypto = document.getElementById("cardsCrypto")

for (const cryptosCards of crypto) {
    cardCrypto.innerHTML += `
    <div class="card " >
        <img src="./imagenes/${cryptosCards.image}" class="card-img-top img-fluid mx-auto" style="width: 50%" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center align-middle">${cryptosCards.ticker}</h5>
            <p class="card-text text-center align-middle">${cryptosCards.name}</p>
            <h5 class="card-title text-center align-middle">${cryptosCards.price} USD</h5>
            <button id='btnCompraCrypto${cryptosCards.id}' class="btn btn-success text-center align-middle">Comprar</button>
            <button id='btnVentaCrypto${cryptosCards.id}' class="btn btn-danger text-center align-middle">Vender</button>
        </div>
    </div>`
}

//EVENTOS

acciones.forEach((accionesEnTabla) => {
     document.getElementById(`btnCompraAcciones${accionesEnTabla.id}`).addEventListener("click", function () {
        agregarALaCartera(accionesEnTabla);
    });
})

crypto.forEach((cryptosCards) => {
    document.getElementById(`btnCompraCrypto${cryptosCards.id}`).addEventListener("click", function () {
        agregarALaCartera(cryptosCards);
    });
})


function agregarALaCartera(activoPorAgregar) {
    miCartera.push(activoPorAgregar);
    document.getElementById("tablabodyCartera").innerHTML += `
    <tr>
    <td class="imageLogo"><img src="./imagenes/${activoPorAgregar.image}" class="img-fluid" alt="..."></td>
        <td class="align-middle">${activoPorAgregar.ticker}</td>
        <td class="align-middle">${activoPorAgregar.cantidad}</td>
        <td class="align-middle">${activoPorAgregar.price} USD</td>
        <td class="align-middle">${activoPorAgregar.price * activoPorAgregar.cantidad} USD</td>
    </tr>
    `

    let dineroInvertido = miCartera.reduce((acumulador, activos) => acumulador + (activos.price * activos.cantidad), 0)

    document.getElementById("totalInvertido").innerText = "Total Invertido =  " + dineroInvertido +" USD";
}
