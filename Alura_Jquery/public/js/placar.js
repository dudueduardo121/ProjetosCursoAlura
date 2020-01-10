$("#botao-placar").click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Fabiola";
    var numPalavras = $("#contador-palavras").text();
    var botaoremover = "<a href='#'><i class='small material-icons'>delete</i></a>"

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removerLinha);

    corpoTabela.append(linha);
    $(".placar").slideDown(400);
    scrollPlacar();
}

function scrollPlacar(){
   var posicaoPlacar = $(".placar").offset().top;
   $("body").animate(
    {
        scrollTop: posicaoPlacar+"px"
    },1000);
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>"); //criar elemento
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;

}

function removerLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut();
    setTimeout(function(){
        linha.remove();
    }, 1000);
    
}

function mostraPlacar(){
    $(".placar").stop().slideToggle(600);
}