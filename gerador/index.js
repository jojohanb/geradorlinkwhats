//var input = document.getElementById("input")
//var link = document.getElementById("link")
//var enviar = document.getElementById("enviar")
//var input2 = document.getElementById("input2")

//document.getElementById('link').addEventListener('click', function() {
//    var Input2 = document.getElementById('input2');
//    Input2.style.display = Input2.style.display === 'none' ? 'block' : 'none'; //
//});


//input.addEventListener("input", validarTelefone);
//input2.addEventListener("input", copiarLink());
//link.addEventListener("click", gerarLink())



//function validarTelefone(event) {
//    var telefone = event.target.value;
  //  var validaTelefone = /^[\d()-\s]+$/;
    //var digitos = telefone.replace(/\D/g, "");  //nessa linha o replace serve para substituir os nao digitos por vazio

   // if (!validaTelefone.test(telefone))  {
     //   event.target.value = telefone.slice(0, -1);
      //  return;
   // } 
   // if (digitos.length===11){
     //   event.target.style.color="green"
   // }  else {
    //    event.target.style.color = "";
   // }
   // var telefoneFormatado = digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
   // event.target.value = telefoneFormatado;
//}

//function gerarLink(){
  //  var randomLink= Math.random().toString(36).slice(-10)
    //input2.value=randomLink
//}

//function copiarLink(){
//    navigator.clipboard.writeText(input.value).then(() => {
  //      alert("area copiada")
   // })

//}


