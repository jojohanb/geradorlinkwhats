//declarando as variaveis

var copiar = document.getElementById("copiar");
var areaLink = document.getElementById("area-link");
var texto = document.getElementById("texto");
var inputTelefone = document.getElementById("input-telefone")
var enviar = document.getElementById("enviar");

//adicionando eventos
inputTelefone.addEventListener("input", validarTelefone);

copiar.addEventListener("click", function(){gerarLink();});

enviar.addEventListener("click", abrirLink);

areaLink.addEventListener("click", copiarLink)

inputTelefone.addEventListener("focus", function() {
  areaLink.style.display = "none";
  texto.style.display = "none";
});
//O evento focus é disparado ao clicar dentro do campo ou navegar usando o tab



//adicionando as funcoes

function validarTelefone(event) {
  var telefone = event.target.value;
  var validaTelefone = /^[\d()-\s]+$/; //A variavel validaTelefone recebe uma expressao regular que é usada para validar telefone(ou seja só pode conter digitos, parenteses, hifens e espacos)
  var digitos = telefone.replace(/\D/g, ""); //A variavel digitos recebe  uma expressao regular que é utilizada para remover todos os caracteres nao numericos de telefone

  if (!validaTelefone.test(telefone)) //Nessa linha é verificado se o telefone digitado nao obedece ao padrao de validaTelefone 
      {
      event.target.value = telefone.slice(0, -1); //Se a condicao nao corresponde ao padrao, o valor de entrada é atualizado para estar sem o ultimo caractere 
      return;
  } 

  if (digitos.length <= 11) {
    var telefoneFormatado = digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); //mascara do telefone (xx) xxxxx-xxxx, a expressao /(\d{2})(\d{5})(\d{4})/ captura a quantidade especificada nas {}, na expressao  "($1) $2-$3" refere-se aos grupos de capturas 
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
        var link =  "https://wa.me/55" + digitos;
        areaLink.innerHTML = link;
        texto.textContent = "Clique No Link Para Copiar";
        visibilidade() //Chamada da funcao visibilidade
    } else {
        alert("Por favor, insira um número de telefone válido.");
        areaLink.style.display = "none";
        texto.style.display = "none";
     }
  }

function copiarLink(){
  var link = areaLink.textContent 

    navigator.clipboard.writeText(link).then(() => { //Nessa linha é utilizado a API Clipboard para escrever o conteúdo de texto na área de transferência do sistema, a função writeText() retorna uma promessa, que será resolvida quando a operação for concluída.
      texto.textContent="Link copiado para área de transferência"
    })}


 function abrirLink() {
  var telefone = inputTelefone.value;
  var digitos = telefone.replace(/\D/g, ""); 

  if (digitos.length === 11) {
      var link = "https://wa.me/55" + digitos;
      window.open(link,"_blank") //A funcao window.open serve para abrir uma nova janela do navegador 
  } else {
    alert ("Por favor, insiea um numero de telefone valido")
  }
 }

//CONCLUIDO
