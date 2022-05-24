//login
function acceder() {
    localStorage.setItem("Email", document.getElementById("correo").value);
    localStorage.setItem("Contraseña", document.getElementById("contraseña").value);
    
    if ((document.getElementById("correo").value != "") && (document.getElementById("contraseña").value != "")) {
        location.href="index.html";
    } else {
        alert("Por favor ingrese email y contraseña");
    }
};