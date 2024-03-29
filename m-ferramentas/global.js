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

export var Serra = document.getElementById("Serra");
export var labelSerra = document.querySelector('label[for="Serra"]');

export var Furadeira = document.getElementById("Furadeira");
export var labelFuradeira = document.querySelector('label[for="Furadeira"]');

export var Lixadeira = document.getElementById("Lixadeira");
export var labelLixadeira = document.querySelector('label[for="Lixadeira"]');

export var Esmerilhadeira = document.getElementById("Esmerilhadeira");
export var labelEsmerilhadeira = document.querySelector('label[for="Esmerilhadeira"]');

export var Lavadora = document.getElementById("Lavadora");
export var labelLavadora = document.querySelector('label[for="Lavadora"]');

export var Talhadeira = document.getElementById("Talhadeira");
export var labelTalhadeira = document.querySelector('label[for="Talhadeira"]');

export var Aparador = document.getElementById("Aparador");
export var labelAparador = document.querySelector('label[for="Aparador"]');


export var Grampos = document.getElementById("Grampos");
export var labelGrampos = document.querySelector('label[for="Grampos"]');

export var Soprador = document.getElementById("Soprador");
export var labelSoprador = document.querySelector('label[for="Soprador"]');

export var Compressor = document.getElementById("Compressor");
export var labelCompressor = document.querySelector('label[for="Compressor"]');

export var Tupia = document.getElementById("Tupia");
export var labelTupia = document.querySelector('label[for="Tupia"]');


export var Torno = document.getElementById("Torno");
export var labelTorno = document.querySelector('label[for="Torno"]');


export var Pistola = document.getElementById("Pistola");
export var labelPistola = document.querySelector('label[for="Pistola"]');

export var Alicate = document.getElementById("Alicate");
export var labelAlicate = document.querySelector('label[for="Alicate"]');

export var Trena = document.getElementById("Trena");
export var labelTrena = document.querySelector('label[for="Trena"]');

export var Marreta = document.getElementById("Marreta");
export var labelMarreta = document.querySelector('label[for="Marreta"]');

export var Martelo = document.getElementById("Martelo");
export var labelMartelo = document.querySelector('label[for="Martelo"]');

export var Espacador = document.getElementById("Espacador");
export var labelEspacador = document.querySelector('label[for="Espacador"]');

export var Estilete = document.getElementById("Estilete");
export var labelEstilete = document.querySelector('label[for="Estilete"]');

export var Escala  = document.getElementById("Escala");
export var labelEscala = document.querySelector('label[for="Escala"]');

export var Oculos  = document.getElementById("Oculos");
export var labelOculos  = document.querySelector('label[for="Oculos"]');


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