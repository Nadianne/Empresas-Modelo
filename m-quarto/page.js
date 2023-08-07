var produtosIndicados = document.querySelector('.produtos-indicado');
var subcategorias = document.querySelector('.artc-subcategorias')

var labelGuardaRoupa = document.querySelector('label[for="guarda-roupa"]');
var guardaRoupa = document.getElementById("guarda-roupa");

var Comoda = document.getElementById("Cômoda");
var labelComoda = document.querySelector('label[for="Cômoda"]');

var Cabeceira = document.getElementById("Cabeceira");
var labelCabeceira = document.querySelector('label[for="Cabeceira"]');

var Cama = document.getElementById("Cama");
var labelCama = document.querySelector('label[for="Cama"]');

var Beliche = document.getElementById("Beliche");
var labelBeliche = document.querySelector('label[for="Beliche"]');

var Cadeira = document.getElementById("Cadeira");
var labelCadeira = document.querySelector('label[for="Cadeira"]');

var Multiuso = document.getElementById("Multiuso");
var labelMultiuso = document.querySelector('label[for="Multiuso"]');

var Colchão = document.getElementById("Colchão");
var labelColchao = document.querySelector('label[for="Colchão"]');

var ultimoLabel = labelGuardaRoupa;

guardaRoupa.addEventListener("change", function () {
  produtosIndicados.innerHTML = '';
  subCategoriasTitulo = ["Guarda-roupa de Casal", "Guarda-roupa de Solteiro"];
  subcategoriaIndex = 0;
  tamProdutosIndicados = [12,4];
  imgAllPath = ["../imagens-moveis/guarda-roupa/c","../imagens-moveis/guarda-roupa/s"];
  produtosIndicados.appendChild(createH2(subCategoriasTitulo[subcategoriaIndex]));
  definicaoDoProduto = [[
    'Guarda-Roupa Casal com Espelho',
    'Guarda-Roupa Casal com Espelho 3 Portas',
    'Guarda-Roupa Casal Creta 2 Portas',
    'Guarda-roupa Casal Oslos 6 Portas',
    'Guarda-roupa Casal com Espelho 6 Portas',
    'Guarda-Roupa Made Marcs Bergone',
    'Guarda-Roupa Casal 2 Portas 4 Gavetas',
    'Guarda-roupa Casal MDF 2 portas',
    'Guarda-Roupa Verona com 1 Espelho,',
    'Guarda-roupa Casal MDF 2 Portas',
    'Guarda-roupa Casal com espelho',
    'Guarda Roupa Tuboarte'
  ],
  [
    'Guarda-roupa Solteiro 2 portas',
    'Guarda-roupa Solteiro Isabela',
    'Guarda Roupa Royalli',
    'Guarda Roupa Solteiro 3 portas',

  ]
  ];
  h1PopUpAll = [
    [
    "Guarda-Roupa Casal <span>com Espelho</span>",
    "Guarda-Roupa Casal com Espelho <span>3 Portas</span>",
    "Guarda-Roupa Casal Creta <span>2 Portas</span>",
    "Guarda-roupa Casal Oslos<span>6 Porta</span>",
    "Guarda-roupa Casal com Espelho <span>6 Portas</span>",
    "Guarda-Roupa Made Marcs Bergone<span>6 Porta</span>",
    "Guarda Roupa Casal <span>2 Portas 4 Gavetas</span>",
    "Guarda-Roupa Casal <span>Bergone</span>",
    "Guarda-Roupa Verona com<span> 1 Espelho</span>",
    "Guarda-roupa Casal MDF <span>2 Portas</span>",
    "Guarda-roupa Casal <span>com espelho</span>",
    "Guarda Roupa <span>Tuboarte</span>",
   

  ],
    [
    "Guarda-roupa Solteiro <span>2 portas</span>",
    "Guarda-roupa Solteiro <span>Isabela</span>",
    "Guarda Roupa <span>Royalli</span>",
    "Guarda-Roupa Solteiro <span>3 portas</span>",

  ],
];
  paragrafoPopUpAllText = [
    [
      [
        "O Guarda-Roupa Móveis Europa é um móvel que irá superar todas as suas expectativas nos quesitos organização e beleza. Ele é moderno e funcional, por contar com espaços para guardar roupas e sapatos.",
        "Dimensões: Altura: 235cm", "Largura: 275cm", "Profundidade: 63cm",
      ],
      [
        "Roupeiro 100% em MDF. Oferece beleza, durabilidade e resistência. Perfil puxador em alumínio na cor Bronze; sistema de rodízios de portas de correr que evita o descarrilamento e proporciona um deslizamento suave e silencioso",
        "Dimensões: Altura: 235cm", "Largura: 228cm", "Profundidade: 56cm",
      ],
      [
        "O Guarda-Roupa Casal Creta 2 Portas 4 Gavetas 100% Mdf Brauna/Off White - Europa Móveis é produzido em 100% MDF na escala de brilho Semi-Brilho.",
        "Dimensões: Altura: 235,00cm", "Largura: 251,00cm", "Profundidade: 64cm",
      ],
      [
        "O Guarda-Roupa Casal Oslo 6 Portas 4 Gavetas 100% Mdf Peroba/Off White - Madermaques é produzido em 100% mdf na escala de brilho Semi-Brilho",
        "Dimensões: Altura: 235cm", "Largura: 210cm", "Profundidade: 50cm",
      ],
      [
        "O guarda-roupa possui o tamanho de casal, seu material é feito em MDF com revestimento em laca e acabamento em verniz UV na cor peroba e off-white.",
        "Dimensões: Altura: 235cm", "Largura: 240cm", "Profundidade: 55cm",
      ],
      [
        "Guarda-Roupa Muito espaçoso e capaz de atender todas as necessidades de quem busca manter roupas e acessórios muito bem organizados e fáceis de localizar! ",
        "Dimensões: Altura: 237cm", "Largura: 274cm", "Profundidade: 61cm",
      ],
      [
        "Guarda roupa verona com 1 espelho, ideal para quem precisa de organização com espaço.",
        "Dimensões: Altura: 218cm", "Largura: 202cm", "Profundidade: 51cm",
      ],
      [
        "O Guarda roupa Casal Moscou é composto por duas portas de correr e todo fabricado em MDF. As portas deslizantes em trilho inferior de alumínio com roldanas com molas com sistema anti-descarrilhamento ,que permite sofisticação e maior facilidade de abertura.",
        "Dimensões: Altura: 237cm", "Largura: 228cm", "Profundidade: 55,8cm",
      ],
      [
        "Guarda roupa Maranello da Europa vai levar qualidade e sofisticação para o seu quarto. Ele possui 3 portas de correr, tem espelho e um amplo espaço interno. ",
        "Dimensões: Altura: 219,5cm", "Largura: 223,5cm", "Profundidade: 56,1cm",
      ],
      [
        "Roupeiro alba 6 portas a decor mobille apresenta design moderno é compactado  ideal para duas pessoas. Com espaços para ele é para ela.",
        "Dimensões: Altura: 218,5cm", "Largura: 182,5cm", "Profundidade: 56,5cm"
      ],
      [
        "Já pensou em um móvel que seja bonito, durável e ainda ajude a organizar o ambiente? O guarda roupa Titanium 6 gavetas da D'Doro tem tudo isso.",
        "Dimensões: Altura: 230cm", "Largura: 220cm", "Profundidade: 62cm",
      ],
      [
        "Na hora de mobiliar o seu quarto é importante pensar em peças que tragam aconchego e segurança, mas que também deixem a decoração com um toque leve e sofisticado.",
        "Dimensões: Altura: 208cm", "Largura: 161cm", "Profundidade: 41,5cm",
      ],
    ],
    [
      [
        "Guarda-roupa Solteiro Kiev 2 Portas 4 Gavetas 100% Mdf Brauna/preto - Europa Móveis é Produzido Em 100% Mdf Na Escala De Brilho Semi-brilho.",
        "Dimensões: Altura: 235cm", "Largura: 170cm", "Profundidade: 56cm",
      ],
      [
        "Guarda-roupa solteiro isabela 2 portas 4 gavetas off white - pnr móveis é produzido em mdf na escala de brilho semi-brilho",
        "Dimensões: Altura: 235cm", "Largura: 170cm", "Profundidade: 56cm",
      ],
      [
        "Royalli.",
        "Dimensões: Altura: 205cm", "Largura: 124cm", "Profundidade: 54cm",
      ],
      [
        "Guarda-Roupa Solteiro Moval Lima 3 Portas 2 Gavetas Se você procura um Guarda-Roupa Solteiro com design moderno e compacto e excelente distribuição interna, o modelo Lima da marca Moval é uma excelente opção!",
        "Dimensões: Altura: 182cm", "Largura: 82cm", "Profundidade: 47cm",
      ],

    ]
  ];

  
  
  path = imgAllPath[subcategoriaIndex];
  setProdutosIndicados(tamProdutosIndicados[subcategoriaIndex]);
  setSubcategorias(["Casal", "Solteiro"]);
  if (this.checked) {
    ultimoLabel.style.fontWeight = 500;
    ultimoLabel = labelGuardaRoupa;
    ultimoLabel.style.fontWeight = 900;
  }
});

function setSubcategorias(nomesSubCategorias) {
  subcategorias.innerHTML = "";
  subcategorias.appendChild(createH3("Subcategorias"));
  subCategoriasLabel = nomesSubCategorias;
  criarDivSubCategorias();
}

function criarDivSubCategorias() {
  for (var i = 0; i < subCategoriasLabel.length; i++) {
    (function (index) {
      var novaDiv = document.createElement('div');
      var label = document.createElement('label');
      label.textContent = subCategoriasLabel[index];
      label.setAttribute('for', "id" + index);
      var radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'subcat';
      radio.id = "id" + index;
      if(index == 0){
        radio.checked = true;
      }
      radio.addEventListener("change", function () {
        produtosIndicados.innerHTML = '';
        subcategoriaIndex = index;
        path = imgAllPath[subcategoriaIndex];
        produtosIndicados.appendChild(createH2(subCategoriasTitulo[subcategoriaIndex]));
        setProdutosIndicados(tamProdutosIndicados[subcategoriaIndex]);
      });
      novaDiv.appendChild(label);
      novaDiv.appendChild(radio);
      subcategorias.appendChild(novaDiv);
    })(i);
  }
}

function setProdutosIndicados(tam) {
  var novoArtigo = document.createElement('article')
  novoArtigo.classList.add('artc-topo');
  for (var i = 0; i < tam; i++) {
    novoArtigo.appendChild(criarNovaDiv(path + i, definicaoDoProduto[subcategoriaIndex][i],i));
  }
  produtosIndicados.appendChild(novoArtigo);
}

function criarNovaDiv(caminhoImagem, textoParagrafo, index) {
  var novoProduto = document.createElement('div');
  novoProduto.classList.add('produto-generico', 'protudos-das-categorias');

  var novaImagem = document.createElement('img');
  novaImagem.src = caminhoImagem + "0.png";
  novaImagem.alt = 'Nova Imagem';

  var novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = textoParagrafo;

  var novoButton = document.createElement("button");
  novoButton.textContent = "Saiba mais!";
  novoButton.classList.add('button-pop-up');
  novoButton.addEventListener("click", function () {
      h1PopUpText = h1PopUpAll[subcategoriaIndex][index];
      paragrafoPopUpText = paragrafoPopUpAllText[subcategoriaIndex][index];
      pathImgPopUp = caminhoImagem;
      alterarPopUp();
  });
  novoProduto.appendChild(novaImagem);
  novoProduto.appendChild(novoParagrafo);
  novoProduto.appendChild(novoButton);

  return novoProduto;
}

function createH2(texto) {
  var novoH2 = document.createElement('h2');
  novoH2.innerHTML = texto
  return novoH2;
}

function createH3(texto) {
  var novoH3 = document.createElement('h3');
  novoH3.textContent = texto
  return novoH3;
}

var subCategoriasTitulo = [];
var subCategoriasLabel = [];
var definicaoDoProduto = [];
var path = "";

var imgAllPath = [];
var subcategoriaIndex = 0;
var tamProdutosIndicados = [];


/*
Funções de modal/pop-up
*/

var overLay = document.getElementById("Overlay");
var closeProduto = document.getElementById("close-produto");
var paragrafoPopUpDisplay = document.querySelectorAll("#detalhes-produto-info p");
var imagensPopUp = document.querySelectorAll("#imagens-details-produto img")
var h1PopUp = document.querySelector("#detalhes-produto-info h1");

//Ao clicar num evento, precisa preencher todos os path/textos q vao ser usados
var paragrafoPopUpAllText = [];
var imgPopUpAllPath = [];
var h1PopUpAll = [];

//Basta preencher esses dados que é oque vai aparecer no pop-up
var paragrafoPopUpText = [];
var pathImgPopUp;
var h1PopUpText = "";

closeProduto.addEventListener("click", function () {
  overLay.style.display = "none";
});

function alterarPopUp() {
  h1PopUp.innerHTML = h1PopUpText;
  for (var i = 0; i < paragrafoPopUpText.length; i++) {
    paragrafoPopUpDisplay[i].innerHTML = paragrafoPopUpText[i];
  }
  imagensPopUp[0].src = pathImgPopUp + "0.png";
  imagensPopUp[1].src = pathImgPopUp + "1.png";
  imagensPopUp[2].src = pathImgPopUp + "2.png";
  overLay.style.display = "block";
}

// var paineisTorino = document.querySelectorAll(".painel-torino");
// paineisTorino.forEach(function (painelTorino) {
//   painelTorino.addEventListener("click", function () {
//     h1PopUpText = "Painel Suspenso <span>Torino</span>";
//     paragrafoPopUpText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
//       "Dimensões: Altura: 150cm", "Largura: 30cm", "Profundidade: 3 cm"];
//     pathImgPopUp = "../imagens-moveis/PAINEL EDN/t";
//     alterarPopUp();
//   });
// });