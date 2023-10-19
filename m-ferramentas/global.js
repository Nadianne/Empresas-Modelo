export var produtosIndicados = document.querySelector('.produtos-indicado');
export var subcategorias = document.querySelector('.artc-subcategorias')

export var Pincel = document.getElementById("Pincel");
export var labelPincel = document.querySelector('label[for="Pincel"]');

export var Chave = document.getElementById("Chave");
export var labelChave = document.querySelector('label[for="Chave"]');

export var Serrote = document.getElementById("Serrote");
export var labelSerrote = document.querySelector('label[for="Serrote"]');

export var Rolo = document.getElementById("Rolo");
export var labelRolo = document.querySelector('label[for="Rolo"]');

export var Beliche = document.getElementById("Beliche");
export var labelBeliche = document.querySelector('label[for="Beliche"]');

export var Cadeira = document.getElementById("Cadeira");
export var labelCadeira = document.querySelector('label[for="Cadeira"]');

export var Multiuso = document.getElementById("Multiuso");
export var labelMultiuso = document.querySelector('label[for="Multiuso"]');

export var Colchão = document.getElementById("Colchão");
export var labelColchao = document.querySelector('label[for="Colchão"]');

export var ultimoLabel = labelPincel;

/**********************************************/
export function setSubCategoriasTitulo(content) { subCategoriasTitulo = content; }
export function setSubcategoriaIndex(content) { subcategoriaIndex = content; }
export function setTamProdutosIndicados(content) { tamProdutosIndicados = content; }
export function setImgAllPath(content) { imgAllPath = content; }
export function setDefinicaoDoProduto(content) { definicaoDoProduto = content; }
export function setH1PopUpAll(content) { h1PopUpAll = content; }
export function setParagrafoPopUpAllText(content) { paragrafoPopUpAllText = content; }
export function setPath() { path = imgAllPath[subcategoriaIndex]; }
export function setChecked(content) {
  ultimoLabel.style.fontWeight = 500;
  ultimoLabel = content;
  ultimoLabel.style.fontWeight = 900;
}
/**********************************************/


/**********************************************/
export var subCategoriasTitulo = [];
export var subCategoriasLabel = [];
export var definicaoDoProduto = [];
export var path = "";

export var imgAllPath = [];
export var subcategoriaIndex = 0;
export var tamProdutosIndicados = [];
/**********************************************/


/**********************************************/
export function setSubcategorias(nomesSubCategorias) {
  subcategorias.innerHTML = "";
  if(nomesSubCategorias.length == 0)
    return;
  subcategorias.appendChild(createH3("Subcategorias"));
  subCategoriasLabel = nomesSubCategorias;
  criarDivSubCategorias();
}

export function criarDivSubCategorias() {
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
      if (index == 0) {
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

export function setProdutosIndicados(tam) {
  var novoArtigo = document.createElement('article')
  novoArtigo.classList.add('artc-topo');
  for (var i = 0; i < tam; i++) {
    novoArtigo.appendChild(criarNovaDiv(path + i, definicaoDoProduto[subcategoriaIndex][i], i));
  }
  produtosIndicados.appendChild(novoArtigo);
}

export function criarNovaDiv(caminhoImagem, textoParagrafo, index) {
  var novoProduto = document.createElement('div');
  novoProduto.classList.add('produto-generico', 'protudos-das-categorias');

  var novaImagem = document.createElement('img');
  novaImagem.src = caminhoImagem + "0.webp";
  novaImagem.alt = "imagem de " + subCategoriasTitulo[subcategoriaIndex];

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

export function createH2(texto) {
  var novoH2 = document.createElement('h2');
  novoH2.innerHTML = texto
  return novoH2;
}

export function createH3(texto) {
  var novoH3 = document.createElement('h3');
  novoH3.textContent = texto
  return novoH3;
}
/**********************************************/


/*
Funções de modal/pop-up
*/
export var overLay = document.getElementById("Overlay");
var closeProduto = document.getElementById("close-produto");
export var paragrafoPopUpDisplay = document.querySelectorAll("#detalhes-produto-info p");
export var imagensPopUp = document.querySelectorAll("#imagens-details-produto img")
export var h1PopUp = document.querySelector("#detalhes-produto-info h1");

//Ao clicar num evento, precisa preencher todos os path/textos q vao ser usados
export var paragrafoPopUpAllText = [];
export var imgPopUpAllPath = [];
export var h1PopUpAll = [];

//Basta preencher esses dados que é oque vai aparecer no pop-up
export var paragrafoPopUpText = [];
export var pathImgPopUp;
export var h1PopUpText = "";

closeProduto.addEventListener("click", function () {
  overLay.style.display = "none";
});

export function alterarPopUp() {
  h1PopUp.innerHTML = h1PopUpText;
  for (var i = 0; i < paragrafoPopUpText.length; i++) {
    paragrafoPopUpDisplay[i].innerHTML = paragrafoPopUpText[i];
  }
  imagensPopUp[0].src = pathImgPopUp + "0.webp";
  imagensPopUp[1].src = pathImgPopUp + "1.webp";
  imagensPopUp[2].src = pathImgPopUp + "2.webp";
  overLay.style.display = "block";
}