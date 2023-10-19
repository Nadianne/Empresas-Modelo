var overLay = document.getElementById("Overlay");
var closeProduto = document.getElementById("close-produto");
var paragrafoPopUp = document.querySelectorAll("#detalhes-produto-info p");
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
        paragrafoPopUp[i].innerHTML = paragrafoPopUpText[i];
        // console.log(paragrafoPopUpText[i]);
    }
    imagensPopUp[0].src = pathImgPopUp + "0.png";
    imagensPopUp[1].src = pathImgPopUp + "0p0.png";
    imagensPopUp[2].src = pathImgPopUp + "0p1.png";
    overLay.style.display = "block";
}

var painelTorino = document.getElementById("Painel-torino");
painelTorino.addEventListener("click",function (){
    h1PopUpText = "Painel Suspenso <span>Torino</span>";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
"Dimensões: Altura: 150cm","Largura: 30cm","Profundidade: 3 cm"];
    pathImgPopUp = "../imagens-moveis/PAINEL EDN/t";
    alterarPopUp();
});

var painelFox = document.getElementById("Painel-fox");
painelFox.addEventListener("click",function (){
    h1PopUpText = "Painel Suspenso <span>FOX NEW</span>";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
"Dimensões: Altura: 80cm","Largura: 80cm","Profundidade: 5 cm"];
    pathImgPopUp = "../imagens-moveis/PAINEL EDN/f";
    alterarPopUp();
});

var rackCristalPermobili = document.getElementById("Rack-cristal-permobili");
rackCristalPermobili.addEventListener("click",function (){
    h1PopUpText = "Rack Cristal Permobili";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
"Dimensões: Altura: 100cm","Largura: 100cm","Profundidade: 10 cm"];
    pathImgPopUp = "../imagens-moveis/RACK CRISTAL/p";
    alterarPopUp();
});

var sofaRavena = document.getElementById("Sofa-ravena");
sofaRavena.addEventListener("click",function (){
    h1PopUpText = "Sofá 3 lugares <span>RAVENA</span>";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
"Dimensões: Altura: 110cm","Largura: 250cm","Profundidade: 20 cm"];
    pathImgPopUp = "../imagens-moveis/SOFÁ/s";
    alterarPopUp();
});

var poltronaDecorativa = document.getElementById("Poltrona-decorativa");
poltronaDecorativa.addEventListener("click",function (){
    h1PopUpText = "Poltrona Decorativa";
    paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
"Dimensões: Altura: 60cm","Largura: 80cm","Profundidade: 5 cm"];
    pathImgPopUp = "../imagens-moveis/POLTRONA/b";
    alterarPopUp();
});


/*
<div class="produto-generico">
<img src="../imagens-moveis/POLTRONA/b0.png" alt="Poltrona">
<p>Poltrona Decorativa</p>
<p>M.SILVA</p>
<button id="Poltrona-decorativa" class="white-color button-pop-up">Saiba mais!</button>
</div>
*/