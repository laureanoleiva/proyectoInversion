//INGRESO DE USUARIO Y CONTRASEÑA
let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");
//ALERTA DE BIENVENIDA AL USUARIO
alert("¡¡Bienvenido, " + usuario + " !!")
//ELECCIÓN DE TIPO DE INVERSIÓN A REALIZAR
let inversion = parseInt(prompt("Elija tipo de inversión a realizar:\n1-Acciones\n2-Criptomonedas\n3-Obligaciones Negociables\n4-Bonos\n5-Fondo Común de Inversión\n6-Salir del Sistema"))
//FUNCIÓN QUE INDIQUE QUE DESEA COMPRAR CON CICLO - A FUTURO EXISTIRÁ UNA LISTA DE LA CUAL PODRA SELECCIONAR EL ACTIVO


function comprar() {
    let compraInversion;
    let cantidadInversion;

    do {
        compraInversion = prompt("Indique que desea comprar (Escriba - fin - para salir)");

        if (compraInversion != "fin") {
            cantidadInversion = parseInt(prompt("Indique cantidad que desea comprar"));
            alert("Usted comprará " + cantidadInversion + " de " + compraInversion);
        }
    } while (compraInversion != "fin");
}
//acciones.forEach((accion)=>alert(accion.id+" - "+accion.name));
//alert("Elige entre las siguientes acciones:\n"+acciones.id+" - "+acciones.name+" - "+acciones.price)
switch (inversion) {
    case 1:
        alert("Hay " + acciones.length+ " Acciones disponibles para comprar:");
        for (const accion of acciones) {
            alert(accion.id + " - " + accion.name + " - Precio: $" + accion.price)
        };
        comprar();
        break;
    case 2:
        alert("Hay " + crypto.length + " Criptomonedas disponibles para comprar:");
        for (const cryptomoneda of crypto) {
            alert(cryptomoneda.id + " - " + cryptomoneda.name + " - Precio: $" + cryptomoneda.price)
        };
        comprar();
        break;
    case 3:
        alert("Comprarás Obligaciones Negociables");
        comprar();
        break;
    case 4:
        alert("Comprarás Bonos");
        comprar();
        break;
    case 5:
        alert("Comprarás Fondo Común de Inversión");
        comprar();
        break;
    case 6:
        alert("Usted saldrá del Sistema");
        comprar();
        break;
    default:
        alert("Elección no válida")
}