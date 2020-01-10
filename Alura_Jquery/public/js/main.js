var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function() {
    console.log("Pagina carregada...");
    inicializaTamanhoFrase();
    inicializacontadores();
    inicializaCronometro();
    //quando a pagina for carregada aiva no botao chama a função reinicia jogo
    $("#botao-reiniciar").click(reiniciaJogo);
});


//função pega o tamanho da frase
function inicializaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoSpam = $("#tamanho-li");
    tamanhoSpam.text(numPalavras);
}


//----------------------------------//

//função inicia contadores

function inicializacontadores(){
    
    campo.on("input", function(){
    var conteudo = campo.val();

    var qtPalavras = conteudo.split(/\S+/).length -1; // espressão regular para não pegar espaço em branco
    $("#contador-palavras").text(qtPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
    
});
}
//------------------------------------//

// função inicicronometro segundos e bloquear o textarea
function inicializaCronometro(){
    var tempoRest = $("#tempo-digitacao").text();
    campo.one("focus", function(){
    var cronometroId = setInterval(function(){
            tempoRest --;
        $("#tempo-digitacao").text(tempoRest);

        if(tempoRest < 1){
            campo.attr("disabled", true);
            campo.addClass("campoDesativado");
            clearInterval(cronometroId);
        }
        
    }, 1000);
});
}


//-----------------------------------//

//funcao reiniciar jogo
function reiniciaJogo(){

        campo.attr("disabled", false);
        campo.val("");
        campo.removeClass("campoDesativado");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometro();
}


//------------------------------------//




