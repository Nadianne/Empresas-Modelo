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
  tamProdutosIndicados = [14,4];
  imgAllPath = ["../imagens-moveis/guarda-roupa/c","../imagens-moveis/guarda-roupa/s"];
  produtosIndicados.appendChild(createH2(subCategoriasTitulo[subcategoriaIndex]));
  definicaoDoProduto = [[
    '0 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '1 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '2 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '3 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '4 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '5 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '6 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '7 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '8 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '9 Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '10Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '11Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '12Guarda Roupa Casal 8 Portas e 4 Gavetas',
    '13Guarda Roupa Casal 8 Portas e 4 Gavetas'
  ],
  [
    '0 Guarda Roupa Solteiro 8 Portas e 4 Gavetas',
    '1 Guarda Roupa Solteiro 8 Portas e 4 Gavetas',
    '2 Guarda Roupa Solteiro 8 Portas e 4 Gavetas',
    '3 Guarda Roupa Solteiro 8 Portas e 4 Gavetas',
    '4 Guarda Roupa Solteiro 8 Portas e 4 Gavetas',
  ]
  ];
  h1PopUpAll = [
    [
    "0 Guarda Roupa de casal <span>UI AI</span>",
    "1 Guarda Roupa de casal",
    "2 Guarda Roupa de <span>casal</span>",
    "3 Guarda Roupa <span>de casal</span>",
    "4 Guarda Roupa <span>de casal</span>",
    "5 Guarda Roupa <span>de casal</span>",
    "6 Guarda Roupa <span>de casal</span>",
    "7 Guarda Roupa <span>de casal</span>",
    "8 Guarda Roupa <span>de casal</span>",
    "9 Guarda Roupa <span>de casal</span>",
    "10 Guarda Roupa <span>de casal</span>",
    "11 Guarda Roupa <span>de casal</span>",
    "12 Guarda Roupa <span>de casal</span>",
    "13 Guarda Roupa <span>de casal</span>",
  ],
    [
    "0 Guarda Solteiro de Roupa <span>SEM UI AI</span>",
    "1 Guarda Solteiro de Roupa",
    "2 Guarda Solteiro de <span>Roupa</span>",
    "3 Guarda Solteiro <span>de Roupa</span>",
    "4 Guarda Solteiro <span>de Roupa</span>",
  ],
];
  paragrafoPopUpAllText = [
    [
      [
        "0 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 0cm", "Largura: 0cm", "Profundidade: 0cm",
      ],
      [
        "1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 1cm", "Largura: 1cm", "Profundidade: 1cm",
      ],
      [
        "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 2cm", "Largura: 2cm", "Profundidade: 2cm",
      ],
      [
        "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 3cm", "Largura: 3cm", "Profundidade: 3cm",
      ],
      [
        "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 4cm", "Largura: 4cm", "Profundidade: 4cm",
      ],
      [
        "5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 5cm", "Largura: 5cm", "Profundidade: 5cm",
      ],
      [
        "6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 6cm", "Largura: 6cm", "Profundidade: 6cm",
      ],
      [
        "7 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 7cm", "Largura: 7cm", "Profundidade: 7cm",
      ],
      [
        "8 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 8cm", "Largura: 8cm", "Profundidade: 8cm",
      ],
      [
        "9 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 9cm", "Largura: 9cm", "Profundidade: 9cm",
      ],
      [
        "10 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 10cm", "Largura: 10cm", "Profundidade: 10cm",
      ],
      [
        "11 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 11cm", "Largura: 11cm", "Profundidade: 11cm",
      ],
      [
        "12 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 12cm", "Largura: 12cm", "Profundidade: 12cm",
      ],
      [
        "13 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 13cm", "Largura: 13cm", "Profundidade: 13cm",
      ],
    ],
    [
      [
        "0 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 0cm", "Largura: 0cm", "Profundidade: 0cm",
      ],
      [
        "1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 1cm", "Largura: 1cm", "Profundidade: 1cm",
      ],
      [
        "2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 2cm", "Largura: 2cm", "Profundidade: 2cm",
      ],
      [
        "3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 3cm", "Largura: 3cm", "Profundidade: 3cm",
      ],
      [
        "4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ducimus neque eveniet distinctio vel quam dolor minus, ea autem minima dignissimos illum quaerat veniam nemo. Repellat quis laboriosam suscipit iusto",
        "Dimensões: Altura: 4cm", "Largura: 4cm", "Profundidade: 4cm",
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