/* var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
}); */

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        var alvoEvento = event.target;
        var paidoAlvo = alvoEvento.parentNode;
        paidoAlvo.remove();
    }, 600)

});