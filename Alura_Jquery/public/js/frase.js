// requisição .get ajax jquery
$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

// função abre a conexão 
function fraseAleatoria(){

    $("#spinner").toggle();

    $.get("http://localhost:3000/frases",trocaFrase)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){   
        $("#spinner").toggle();
    });
}
// função gera a frase aleatoria
function trocaFrase(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    inicializaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)

}

function buscaFrase(){

    $("#spinner").toggle();

    var fraseId = $("#frase-id").val();
    console.log("id da frase"+fraseId)
    var dados = {
        id: fraseId
    };
    $.get("http://localhost:3000/frases",dados, trocaFraseId)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    })
}

function trocaFraseId(data){
    var frase = $(".frase");
    frase.text(data.texto);
    inicializaTamanhoFrase()
    atualizaTempoInicial(data.tempo);
}