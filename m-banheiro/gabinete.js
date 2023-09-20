import * as global from './global.js';
global.Gabinete.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Gabinete"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/gabinete/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Gabinete Mini Chopin ',
        'Kit Sicília Suspenso ',
        'Armário astra  ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Gabinete Mini Chopin  <span> Vermelho 41,5x60cm</span>",
            "Kit Sicília <span> Suspenso Castaine </span>",
            "Armário astra <span> Pvc Sobrepor/embutir</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Gabinete Mini Chopin é produzido em vidro temperado transparente e possui cuba de encaixe. Seu tamanho compacto favorece a decoração de banheiros e lavabos pequenos.                ",
                "Dimensões:<br>", "Largura: 41,5 cm", "Comprimento: 60 cm",
            ],
            [
                "O armário de banheiro é prático e confortável, pois adiciona espaço de armazenamento, e é ideal para qualquer tipo de banheiro.",
                "Dimensões:<br> Altura: 48,00cm", "Largura: 67.5cm", "Profundidade: 29.5cm",
            ],
            [
                "O Armário Plástico Versátil da Astra possui porta com abertura e espelho em toda a superfície do armário.",
                "Dimensões:<br> Altura: 35.5cm", "Largura: 10cm", "Comprimento: 30.5cm",
            ],
            [
                "Cômoda Seul possui 5 gavetas com corrediças metálicas sendo ideal para acondicionar e organizar objetos, indicado para compor ambientes em seu quarto ou closet.",
                "Dimensões:<br> Altura: 67,5cm", "Largura: 91,5cm", "Profundidade:  37,7cm",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelFruteira);
    }
});