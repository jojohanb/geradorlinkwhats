var input = document.getElementById("input")
var link = document.getElementById("link")
var enviar = document.getElementById("enviar")


input.addEventListener("input", validarTelefone);

function validarTelefone(event) {
    var telefone = event.target.value;
    var validaTelefone = /^[\d()-\s]+$/;
    var digitos = telefone.replace(/\D/g, ""); 

    if (!validaTelefone.test(telefone))  { 
        alert("Por Favor, preencha o campo corretamente com 11 dígitos!");
        event.target.value = telefone.slice(0, -1);
        return;
    }
    var telefoneFormatado = digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    event.target.value = telefoneFormatado;
    event.target.style.color="green"

}

