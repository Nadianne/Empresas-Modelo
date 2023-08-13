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
    imagensPopUp[0].src = pathImgPopUp + "0.webp";
    imagensPopUp[1].src = pathImgPopUp + "1.webp";
    imagensPopUp[2].src = pathImgPopUp + "2.webp";
    overLay.style.display = "block";
}

document.getElementById("start0").addEventListener("click",function(){
  h1PopUpText = "Guarda-Roupa Casal com Espelho";
  paragrafoPopUpText = ["O Guarda-Roupa Móveis Europa é um móvel que irá superar todas as suas expectativas nos quesitos organização e beleza. Ele é moderno e funcional, por contar com espaços para guardar roupas e sapatos.",
  "Dimensões: <br> Altura: 235cm", "Largura: 275cm", "Profundidade: 63cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c0";
  alterarPopUp();
});

document.getElementById("start1").addEventListener("click",function(){
  h1PopUpText = "";
  paragrafoPopUpText = ["Roupeiro 100% em MDF. Oferece beleza, durabilidade e resistência. Perfil puxador em alumínio na cor Bronze; sistema de rodízios de portas de correr que evita o descarrilamento e proporciona um deslizamento suave e silencioso",
  "Dimensões:<br> Altura: 235cm", "Largura: 228cm", "Profundidade: 56cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c1";
  alterarPopUp();
});

document.getElementById("start2").addEventListener("click",function(){
  h1PopUpText = "Guarda-Roupa Casal Creta <span>2 Portas</span>";
  paragrafoPopUpText = ["O Guarda-Roupa Casal Creta 2 Portas 4 Gavetas 100% Mdf Brauna/Off White - Europa Móveis é produzido em 100% MDF na escala de brilho Semi-Brilho.",
  "Dimensões:<br> Altura: 235cm", "Largura: 251cm", "Profundidade: 64cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c2";
  alterarPopUp();
});

document.getElementById("start3").addEventListener("click",function(){
  h1PopUpText = "Guarda-roupa Casal Oslos <span>6 Porta</span>";
  paragrafoPopUpText = ["O Guarda-Roupa Casal Oslo 6 Portas 4 Gavetas 100% Mdf Peroba/Off White - Madermaques é produzido em 100% mdf na escala de brilho Semi-Brilho",
  "Dimensões:<br> Altura: 235cm", "Largura: 210cm", "Profundidade: 50cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c3";
  alterarPopUp();
});

document.getElementById("start4").addEventListener("click",function(){
  h1PopUpText = "Guarda-roupa Casal com Espelho <span>6 Portas</span>";
  paragrafoPopUpText = ["O guarda-roupa possui o tamanho de casal, seu material é feito em MDF com revestimento em laca e acabamento em verniz UV na cor peroba e off-white.",
  "Dimensões:<br> Altura: 235cm", "Largura: 240cm", "Profundidade: 55cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c4";
  alterarPopUp();
});

document.getElementById("start5").addEventListener("click",function(){
  h1PopUpText = "Guarda-Roupa Made Marcs Bergone <span>6 Porta</span>";
  paragrafoPopUpText = ["Guarda-Roupa Muito espaçoso e capaz de atender todas as necessidades de quem busca manter roupas e acessórios muito bem organizados e fáceis de localizar!",
  "Dimensões:<br> Altura: 237cm", "Largura: 274cm", "Profundidade: 61cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c5";
  alterarPopUp();
});

document.getElementById("start6").addEventListener("click",function(){
  h1PopUpText = "Guarda Roupa Casal <span>2 Portas 4 Gavetas</span>";
  paragrafoPopUpText = ["Guarda roupa verona com 1 espelho, ideal para quem precisa de organização com espaço.",
  "Dimensões:<br> Altura: 218cm", "Largura: 202cm", "Profundidade: 51cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c6";
  alterarPopUp();
});

document.getElementById("start7").addEventListener("click",function(){
  h1PopUpText = "Guarda-Roupa Casal <span>Bergone</span>";
  paragrafoPopUpText = ["O Guarda roupa Casal Moscou é composto por duas portas de correr e todo fabricado em MDF. As portas deslizantes em trilho inferior de alumínio com roldanas com molas com sistema anti-descarrilhamento ,que permite sofisticação e maior facilidade de abertura.",
  "Dimensões:<br> Altura: 237cm", "Largura: 228cm", "Profundidade: 55,8cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c7";
  alterarPopUp();
});

document.getElementById("start8").addEventListener("click",function(){
  h1PopUpText = "Guarda-Roupa Verona com <span>1 Espelho</span>";
  paragrafoPopUpText = ["Guarda roupa Maranello da Europa vai levar qualidade e sofisticação para o seu quarto. Ele possui 3 portas de correr, tem espelho e um amplo espaço interno.",
  "Dimensões:<br> Altura: 219,5cm", "Largura: 223,5cm", "Profundidade: 56,1cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c8";
  alterarPopUp();
});

document.getElementById("start9").addEventListener("click",function(){
  h1PopUpText = "Guarda-roupa Casal MDF <span>2 Portas</span>";
  paragrafoPopUpText = ["Roupeiro alba 6 portas a decor mobille apresenta design moderno é compactado ideal para duas pessoas. Com espaços para ele para ela.",
  "Dimensões:<br> Altura: 218,5cm", "Largura: 182,5cm", "Profundidade: 56,5cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c9";
  alterarPopUp();
});

document.getElementById("start10").addEventListener("click",function(){
  h1PopUpText = "Guarda-roupa Casal <span>com espelho</span>";
  paragrafoPopUpText = ["Já pensou em um móvel que seja bonito, durável e ainda ajude a organizar o ambiente? O guarda roupa Titanium 6 gavetas da D'Doro tem tudo isso.",
  "Dimensões:<br> Altura: 230cm", "Largura: 220cm", "Profundidade: 62cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c10";
  alterarPopUp();
});

document.getElementById("start11").addEventListener("click",function(){
  h1PopUpText = "Guarda Roupa <span>Tuboarte</span>";
  paragrafoPopUpText = ["Na hora de mobiliar o seu quarto é importante pensar em peças que tragam aconchego e segurança, mas que também deixem a decoração com um toque leve e sofisticado.",
  "Dimensões:<br> Altura: 208cm", "Largura: 161cm", "Profundidade: 41,5cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c11";
  alterarPopUp();
});

/*
<span></span>
document.getElementById("start").addEventListener("click",function(){
  h1PopUpText = "";
  paragrafoPopUpText = ["",
  "Dimensões:<br> Altura: cm", "Largura: cm", "Profundidade: cm"];
  pathImgPopUp = "../imagens-moveis/guarda-roupa/c";
  alterarPopUp();
});
*/

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