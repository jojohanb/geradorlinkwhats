var input = document.getElementById("input")
var link = document.getElementById("link")
var enviar = document.getElementById("enviar")

document.getElementById('link').addEventListener('click', function() {
    var Input2 = document.getElementById('input2');
    Input2.style.display = Input2.style.display === 'none' ? 'block' : 'none'; //
});


input.addEventListener("input", validarTelefone);

function validarTelefone(event) {
    var telefone = event.target.value;
    var validaTelefone = /^[\d()-\s]+$/;
    var digitos = telefone.replace(/\D/g, "");  //

    if (!validaTelefone.test(telefone))  {
        event.target.value = telefone.slice(0, -1);
        return;
    } 
    if (digitos.length===11){
        event.target.style.color="green"
    }  else {
        event.target.style.color = "";
    }
    var telefoneFormatado = digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    event.target.value = telefoneFormatado;
}

