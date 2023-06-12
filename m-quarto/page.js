var melhoresProdutos = document.querySelector('.melhores-produtos');
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


Colchão.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Colchão King Size"));

    var newText = [
['L1 Colchão Casal Mala King Kail 1','L1 Colchão Casal Mala King Kail 2','L1 Colchão Casal Mala King Kail 3',],
['L2 Colchão Casal Mala King Kail 1','L2 Colchão Casal Mala King Kail 2','L2 Colchão Casal Mala King Kail 3',],
['L3 Colchão Casal Mala King Kail 1','L3 Colchão Casal Mala King Kail 2','L3 Colchão Casal Mala King Kail 3',],
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/colchao-casal-mala-king-kail";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }

    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelColchao;
        ultimoLabel.style.fontWeight = 900;
    }
  });


Multiuso.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Multiuso"));
    
    //<h2>Produtos indicados:</h2>
    //cama-box-casal
    var newText = [
['L1 Armário Multiuso 2 Portas 1','L1 Armário Multiuso 2 Portas 2','L1 Armário Multiuso 2 Portas 3'],
['L2 Armário Multiuso 2 Portas 1','L2 Armário Multiuso 2 Portas 2','L2 Armário Multiuso 2 Portas 3'],
['L3 Armário Multiuso 2 Portas 1','L3 Armário Multiuso 2 Portas 2','L3 Armário Multiuso 2 Portas 3'],
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/multiuso";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelMultiuso;
        ultimoLabel.style.fontWeight = 900;
    }
  });



Cadeira.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Cadeira escritório"));
    
    //<h2>Produtos indicados:</h2>
    //cama-box-casal
    var newText = [
['L1 Cadeira Escritório Executivo 1','L1 Cadeira Escritório Executivo 2','L1 Cadeira Escritório Executivo 3',],
['L2 Cadeira Escritório Executivo 1','L2 Cadeira Escritório Executivo 2','L2 Cadeira Escritório Executivo 3',],
['L3 Cadeira Escritório Executivo 1','L3 Cadeira Escritório Executivo 2','L3 Cadeira Escritório Executivo 3',],
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/cadeira-escritorio-executivo";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelCadeira;
        ultimoLabel.style.fontWeight = 900;
    }
  });


Beliche.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Beliche"));
    
    //<h2>Produtos indicados:</h2>
    //cama-box-casal
    var newText = [
['L1 Beliche Conquista 1','L1 Beliche Conquista 2','L1 Beliche Conquista 3'],
['L2 Beliche Conquista 1','L2 Beliche Conquista 2','L2 Beliche Conquista 3'],
['L3 Beliche Conquista 1','L3 Beliche Conquista 2','L3 Beliche Conquista 3'],
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/beliche-conquista";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelBeliche;
        ultimoLabel.style.fontWeight = 900;
    }
  });



Cama.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Cama de casal"));
    
    //<h2>Produtos indicados:</h2>
    //cama-box-casal
    var newText = [
['L1 Cama Box Casal 1','L1 Cama Box Casal 2','L1 Cama Box Casal 3'],
['L2 Cama Box Casal 1','L2 Cama Box Casal 2','L2 Cama Box Casal 3'],
['L3 Cama Box Casal 1','L3 Cama Box Casal 2','L3 Cama Box Casal 3'],
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/cama-box-casal";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelCama;
        ultimoLabel.style.fontWeight = 900;
    }
  });




Cabeceira.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Cabeceira de casal"));
    
    //<h2>Produtos indicados:</h2>
    var newText = [
['L1 Cabeceira Casal Lavínia Sued Bege','L1 Cabeceira Casal Lavínia Sued Rosa','L1 Cabeceira Casal Lavínia Sued Azul'],
['L1 Cabeceira Casal Lavínia Sued Bege','L1 Cabeceira Casal Lavínia Sued Rosa','L1 Cabeceira Casal Lavínia Sued Azul'],
['L1 Cabeceira Casal Lavínia Sued Bege','L1 Cabeceira Casal Lavínia Sued Rosa','L1 Cabeceira Casal Lavínia Sued Azul']
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/cabeceira-casal-lavinia-sued-bege";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelCabeceira;
        ultimoLabel.style.fontWeight = 900;
    }
  });



Comoda.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Cômoda"));
    //<h2>Produtos indicados:</h2>
    var newText = [
['L1 Cômoda 4 Gavetas Azul Petróleo','L1 Cômoda 4 Gavetas Branco Petróleo','L1 Cômoda 4 Gavetas Vermelho Petróleo'],
['L2 Cômoda 4 Gavetas Azul Petróleo','L1 Cômoda 4 Gavetas Branco Petróleo','L1 Cômoda 4 Gavetas Vermelho Petróleo'],
['L3 Cômoda 4 Gavetas Azul Petróleo','L1 Cômoda 4 Gavetas Branco Petróleo','L1 Cômoda 4 Gavetas Vermelho Petróleo'],
];
//Cômoda-4-Gavetas-Azul-Petróleo0
path = "../imagens-moveis/Cômoda-4-Gavetas-Azul-Petróleo";
    for(var i = 0;i < 3;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<3;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelComoda;
        ultimoLabel.style.fontWeight = 900;
    }
  });

function setMelhoresProdutos(ii, jj){
    for(var i = 0;i < ii;i++){
        var novoArtigo = document.createElement('article')
        novoArtigo.classList.add('artc-topo');
        for(var j = 0;j<jj;j++){
            novoArtigo.appendChild(criarNovaDiv(path + j + '.png',newText[subcategoriaPos][i][j]));
        }
        melhoresProdutos.appendChild(novoArtigo);
    }
}

guardaRoupa.addEventListener("change", function() {
    melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
    melhoresProdutos.appendChild(createH2("Guarda-roupa de casal"));
    //<h2>Produtos indicados:</h2>
    subcategoriaPos = 0;
    newText = [[
['L 1 Guarda Roupa Casal 8 Portas e 4 Gavetas','L 1 Guarda Roupa Casal 7 Portas e 3 Gavetas','L 1 Guarda Roupa Casal 6 Portas e 2 Gavetas'],
['L 2 Guarda Roupa Casal 8 Portas e 4 Gavetas','L 2 Guarda Roupa Casal 7 Portas e 3 Gavetas','L 2 Guarda Roupa Casal 6 Portas e 2 Gavetas'],
['L 2 Guarda Roupa Casal 8 Portas e 4 Gavetas','L 3 Guarda Roupa Casal 7 Portas e 3 Gavetas','L 3 Guarda Roupa Casal 6 Portas e 2 Gavetas'],
],
[
['L 1 Guarda Roupa Solteiro 8 Portas e 4 Gavetas','L 1  Roupa Solteiro 7 Portas e 3 Gavetas','L 1  Roupa Solteiro 6 Portas e 2 Gavetas'],
['L 2 Guarda Roupa Solteiro 8 Portas e 4 Gavetas','L 2 Guarda Roupa Solteiro 7 Portas e 3 Gavetas','L 2  Roupa Solteiro 6 Portas e 2 Gavetas'],
['L 2 Guarda Roupa Solteiro 8 Portas e 4 Gavetas','L 3  Roupa Solteiro 7 Portas e 3 Gavetas','L 3  Roupa Solteiro 6 Portas e 2 Gavetas'],
],
];
    path = "../imagens-moveis/guarda-roupa-casal-8portas-e-4-gavetas";
    setMelhoresProdutos(3,3);
    setSubcategorias();


    if(this.checked){
        ultimoLabel.style.fontWeight = 500;
        ultimoLabel = labelGuardaRoupa;
        ultimoLabel.style.fontWeight = 900;
    }
  });

function setSubcategorias(){
    subcategorias.innerHTML = "";
    originalPath = path;
    subcategorias.appendChild(createH3("Subcategorias"));
    subText = ["Casal","Solteiro"];
    criarDivSubCategorias();
}

function criarDivSubCategorias(){
    for (var i = 0; i < subText.length; i++) {
        (function (index) {
          var novaDiv = document.createElement('div');
          var label = document.createElement('label');
          label.textContent = subText[index];
          label.setAttribute('for', "id" + index);
          var radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'subcat';
          radio.id = "id" + index;
          radio.addEventListener("change", function () {
            melhoresProdutos.innerHTML = ''; // Limpa o conteúdo existente
            melhoresProdutos.appendChild(createH2("Guarda-roupa de casal"));
            path = originalPath;
            if (index != 0) {
              path = path + index;
            }
            subcategoriaPos = index;
            setMelhoresProdutos(3, 3);
          });
          if (index == 0) {
            radio.checked = true;
          }
          novaDiv.appendChild(label);
          novaDiv.appendChild(radio);
          subcategorias.appendChild(novaDiv);
        })(i);
      }
      
}

// function criarDivSubCategorias(){
//     for(var i = 0;i < subText.length;i++){
//         var novaDiv = document.createElement('div');
//         var label = document.createElement('label');
//         label.textContent = subText[i];
//         label.setAttribute('for',"id" + i);
//         var radio = document.createElement('input');
//         radio.type = 'radio';
//         radio.name = 'subcat';
//         radio.id = "id" + i;
//         radio.addEventListener("change",function(i){
//             path = originalPath;
//             console.log("Oi"+i);
//             if(i != 0){
//                 path = path + i;
//             }
//             subcategoriaPos = i;
//             setMelhoresProdutos(3,3);
//         });
//         if(i == 0){
//             radio.checked = true;
//         }
//         novaDiv.appendChild(label);
//         novaDiv.appendChild(radio);
//         subcategorias.appendChild(novaDiv);
//     }
// }

var subText = [];
var newText = [];
var path = "";
var originalPath = "";
var subcategoriaPos = 0;
  /* 
<article class="artc-subcategorias">
          <h3>Subcategorias</h3>
          <div>
            <label for="s-guarda-roupa">Casal</label>
            <input type="radio" name="subcat" id="s-guarda-roupa">
          </div>
          <div>
            <label for="s-guarda-roupa">Solteiro</label>
            <input type="radio" name="subcat" id="s-guarda-roupa">
          </div>
        </article>
  */



function criarNovaDiv(caminhoImagem, textoParagrafo) {
    var novoArtigo = document.createElement('article');
    novoArtigo.classList.add('artc-topo');
  
    var novoProduto = document.createElement('div');
    novoProduto.classList.add('produto-topo');
  
    var novaImagem = document.createElement('img');
    novaImagem.src = caminhoImagem;
    novaImagem.alt = 'Nova Imagem';
  
    var novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = textoParagrafo;
  
    var novoLink = document.createElement('a');
    novoLink.href = '#';
    novoLink.textContent = 'Saiba mais!';
  
    novoProduto.appendChild(novaImagem);
    novoProduto.appendChild(novoParagrafo);
    novoProduto.appendChild(novoLink);
  
    return novoProduto;
  }

  function createH2(texto){
    var novoH2 =  document.createElement('h2');
    novoH2.textContent = texto
    return novoH2;
  }

  function createH3(texto){
    var novoH3 =  document.createElement('h3');
    novoH3.textContent = texto
    return novoH3;
  }