import * as global from './global.js';
global.Armario.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Armários"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-madereira/armario/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Armário astra',
        'Armário astra',
        'Armário astra  ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Armário astra  <span> Embutir/sobrepor</span>",
            "Armário astra <span> Perfil </span>",
            "Armário astra <span> Pvc Sobrepor/embutir</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O armário de banheiro para pendurar é ideal para banheiros pequenos.",
                "Dimensões:<br> Altura: 35.3 cm", "Largura: 36 cm", "Modelo: A41*BG8",
            ],
            [
                "Armário para banheiro de sobrepor ou embutir.",
                "Dimensões:<br> Altura: 31,00cm", "Largura: 10cm", "Comprimento: 36,00cm",
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