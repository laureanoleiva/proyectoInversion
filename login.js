//Función que Loguea al Usuario y guarda Usuario y Contraseña en el Storage

function logIn() {
    let username = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    localStorage.setItem("user", username)
    localStorage.setItem("pass", password)

};

//Tomo datos del Storage y declaro variables para mostrar cartel de error al loguearse o poder ingresar a la página

let user = localStorage.getItem("user")
let pass = localStorage.getItem("pass")

console.log(user)

if (user == "laureano" && pass == "1234" || user == "laura" && pass == "lamejorprofe") {
    window.location.href = "cotizaciones.html"
} if (user == null && pass == null) {
    Swal.fire('Inicie Sesión')
}
else {
    Swal.fire({
        icon: 'error',
        title: 'Usuario y/o Contraseña Incorrecta',
        text: 'Prueba con Usuario: laureano y Password: 1234 o con Usuario: laura y Password: lamejorprofe',
    })
}



//Función que trae datos de Usuarios de una API, los datos que me interesan son el Username e ID (que será utilizado como contraseña)
//La realidad es que quería con esta base de datos de usuarios, obtener el username de cada una de las personas y el ID de cada uno de ellos usarlo como contraseña
//para poder ingresar al sistema, pero no logré realizarlo
//De todas formas, si bien no fueron utilizado estos datos, los plasmo en el console.log para mostrar el llamado de una API

function logInUsuario() {

    const URLusuario = "https://jsonplaceholder.typicode.com/users"
    fetch(URLusuario)
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            let ingresoUsuarios = usuarios;
            console.log(ingresoUsuarios)
        }
        )

}
logInUsuario();


