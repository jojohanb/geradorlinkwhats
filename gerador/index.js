//declarando as variaveis

var copiar = document.getElementById("copiar");
var areaLink = document.getElementById("area-link");
var texto = document.getElementById("texto");
var inputTelefone = document.getElementById("input-telefone")
var enviar = document.getElementById("enviar");

//adicionando eventos
inputTelefone.addEventListener("input", validarTelefone);
copiar.addEventListener("click", function() {
  gerarLink();
  visibilidade();
});


//adicionando as funcoes

function validarTelefone(event) {
  var telefone = event.target.value;
  var validaTelefone = /^[\d()-\s]+$/;
  var digitos = telefone.replace(/\D/g, ""); //Essa linha tem o objetivo de remover todos os caracteres não numéricos

  if (!validaTelefone.test(telefone))  {
      event.target.value = telefone.slice(0, -1);
      return;
  } 

  if (digitos.length <= 11) {
    var telefoneFormatado = digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    event.target.value = telefoneFormatado
  } 

  if (digitos.length===11) {
      event.target.style.color = "green";
  } else {
     event.target.style.color = ""
  }
}


function visibilidade() {
  if (areaLink.style.display=="none") {
      areaLink.style.display="inline"
      texto.style.display="inline"
  } else {
    areaLink.style.display="none"
    texto.style.display="none"
  };
}


 function gerarLink() {
   var telefone = inputTelefone.value;
   var digitos = telefone.replace(/\D/g, ""); 

   if (digitos.length === 11) {
       var link = "https://wa.me/55" + digitos;
       areaLink.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
   } else {
       alert("Por favor, insira um número de telefone válido.");
       areaLink.style.display = "none";
       texto.style.display = "none";
    }
 }




//function copiarLink(){
//    navigator.clipboard.writeText(input.value).then(() => {
  //      alert("area copiada")
   // })

//}


