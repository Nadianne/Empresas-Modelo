var overLay = document.getElementById("Overlay");
var closeProduto = document.getElementById("close-produto");
var paragrafoPopUpDisplay = document.querySelectorAll("#detalhes-produto-info p");
var imagensPopUp = document.querySelectorAll("#imagens-details-produto img")
var h1PopUp = document.querySelector("#detalhes-produto-info h1");

var paragrafoPopUpText = [];
var pathImgPopUp;
var h1PopUpText = "";

closeProduto.addEventListener("click",function (){
    overLay.style.display = "none";
});

function alterarPopUp(){
    h1PopUp.innerHTML = h1PopUpText;
    for(var i = 0; i < paragrafoPopUpText.length;i++){
        paragrafoPopUpDisplay[i].innerHTML = paragrafoPopUpText[i];
    }
    imagensPopUp[0].src = pathImgPopUp + "0.png";
    imagensPopUp[1].src = pathImgPopUp + "1.WEBP";
    imagensPopUp[2].src = pathImgPopUp + "2.WEBP";
    overLay.style.display = "block";
}

var paineisTorino = document.querySelectorAll(".painel-torino");
paineisTorino.forEach(function(painelTorino) {
    painelTorino.addEventListener("click", function() {
        h1PopUpText = "Painel Suspenso <span>Torino</span>";
        paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 150cm", "Largura: 30cm", "Profundidade: 3 cm"];
        pathImgPopUp = "../imagens-moveis/PAINEL EDN/t0";
        alterarPopUp();
    });
});

var paineisFox = document.querySelectorAll(".painel-fox");
paineisFox.forEach(function(painelFox) {
  painelFox.addEventListener("click", function() {
    h1PopUpText = "Painel Suspenso <span>FOX NEW</span>";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
      "Dimensões: Altura: 80cm", "Largura: 80cm", "Profundidade: 5 cm"];
    pathImgPopUp = "../imagens-moveis/PAINEL EDN/t1";
    alterarPopUp();
  });
});


var racksCristalPermobili = document.querySelectorAll(".rack-cristal-permobili");
racksCristalPermobili.forEach(function(rackCristalPermobili) {
  rackCristalPermobili.addEventListener("click", function() {
    h1PopUpText = "Rack Cristal Permobili";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
      "Dimensões: Altura: 100cm", "Largura: 100cm", "Profundidade: 10 cm"];
    pathImgPopUp = "../imagens-moveis/RACK CRISTAL/r0";
    alterarPopUp();
  });
});

var sofasRavena = document.querySelectorAll(".sofa-ravena");
sofasRavena.forEach(function(sofaRavena) {
  sofaRavena.addEventListener("click", function() {
    h1PopUpText = "Sofá 3 lugares <span>RAVENA</span>";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
      "Dimensões: Altura: 110cm", "Largura: 250cm", "Profundidade: 20 cm"];
    pathImgPopUp = "../imagens-moveis/SOFÁ/s0";
    alterarPopUp();
  });
});

var poltronasDecorativas = document.querySelectorAll(".poltrona-decorativa");
poltronasDecorativas.forEach(function(poltronaDecorativa) {
  poltronaDecorativa.addEventListener("click", function() {
    h1PopUpText = "Poltrona Decorativa";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
      "Dimensões: Altura: 60cm", "Largura: 80cm", "Profundidade: 5 cm"];
    pathImgPopUp = "../imagens-moveis/POLTRONA/p0";
    alterarPopUp();
  });
});