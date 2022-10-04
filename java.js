let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");

alert("¡¡Bienvenido, " + usuario + " !!")

let inversion = parseInt(prompt("Elija tipo de inversión a realizar:\n1-Acciones\n2-Criptomonedas\n3-Obligaciones Negociables\n4-Bonos\n5-Fondo Común de Inversión\n6-Salir del Sistema"))

switch (inversion) {
    case 1:
        alert("Comprarás Acciones");
        break;
    case 2:
        alert("Comprarás Criptomonedas");
        break;
    case 3:
        alert("Comprarás Obligaciones Negociables");
        break;
    case 4:
        alert("Comprarás Bonos");
        break;
    case 5:
        alert("Comprarás Fondo Común de Inversión");
        break;
    case 6:
        alert("Usted saldrá del Sistema");
        break;
    default:
        alert("Elección no válida")
}