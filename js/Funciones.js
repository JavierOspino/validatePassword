$("#btnValidar").click(function (event) {
  event.preventDefault();

  let re = /^(([A-Z]{1})([\d]{3})([a-z]{3})([\W]{3}))$/;
  var match = re.test($("#pass").val());
  if (!match) {
    Swal.fire("Contraseña inválida");
  } else {
    Swal.fire("Contraseña válida");
  }
});

function mostrarContrasena() {
  var tipo = document.getElementById("pass");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}
