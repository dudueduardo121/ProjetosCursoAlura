$("#botao-placar").click(mostraPlacar);
$("#botao-sinc").click(sincronizaPlacar);

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();
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

function sincronizaPlacar() {
    var placar = []; // pegamos o placar criamos um array
    var linhas = $("tbody>tr");
    linhas.each(function() {
      var usuario = $(this).find("td:nth-child(1)").text();
      var palavras = $(this).find("td:nth-child(2)").text();
      // salvamos 
      var score = {
          usuario: usuario,
          pontos: palavras
      };
      // colocamos dentro de um array placar
      placar.push(score);
      //console.log(placar);
    });
    // criamos um objeto para ser enviado via post para o endereço
    var dados ={
        placar: placar
    };
    $.post("http://localhost:3000/placar",dados, function(){
        console.log("dados salvos");
        $(".tooltip").tooltipster("open").tooltipster("content", "Sucesso ao sincronizar dados...");
    })

    .fail(function(){
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar dados...");
    })

    .always(function(){
        setTimeout(function(){
            $(".tooltip").tooltipster("close");
        },2000);
    });
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar", function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find(".botao-remover").click(removerLinha);
            $("tbody").append(linha);
        })
    })
}
