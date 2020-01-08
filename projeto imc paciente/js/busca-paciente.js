
// REQUISIÇÃO AJAX
// CRIA A VARIAVEL BUSCA 
var botaobuscar = document.querySelector("#buscar-paciente");

botaobuscar.addEventListener("click", function(){
    console.log("buscando paciente...");

    //CRIA A VARIAVEL ATRIBUI XMLHTTPREQUEST
    var xhr = new XMLHttpRequest();
    // CHAMA COM A FUNÇÃO abrir conexão .OPEN PASSANDO O METHOSDO GET OU POST PASSANDO O ENDEREÇO
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //PARA TRAzER OS DADOS USAR A FUNÇÃO ADDEVENTLISTENER COM O PARAMETRO LOAD E A FUNÇÃO
    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("ocultar");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            //USAR O FOREACH PARA VARRER OS PACIENTES E CHAMAR A FUNCÃO ADICIONAPACIENTENATABELA
            pacientes.forEach( function(paciente) {
            adicionaPacientenaTabela(paciente);
            });
        }else{
            console.log( xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("ocultar");
        }

        
    });

    xhr.send();
});