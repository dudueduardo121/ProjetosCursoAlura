var campoFiltro = document.querySelector("#filtraTabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0 ){

        for(var i = 0; i < pacientes.length; i ++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i");// expressão regular
            // verificação
            if(!expressao.test(nome)){
                paciente.classList.add("ocultar");
            }else{
                paciente.classList.remove("ocultar");
            }
        }
        
    }else{
        for(var i = 0; i < pacientes.length; i ++){
            var paciente = pacientes[i];
            paciente.classList.remove("ocultar");
        }
    }
    
});