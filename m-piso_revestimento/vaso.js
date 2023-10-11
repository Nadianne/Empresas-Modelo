import * as global from './global.js';
global.Vaso.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Armários"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/vaso/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Vaso Sanitário ',
        'Kit deca aspem',
        'Armário astra  ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Vaso Sanitário <span>Convencional Marrom</span>",
            "Kit deca aspem <span> Branco </span>",
            "Armário astra <span> Pvc Sobrepor/embutir</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O melhor para seu banheiro está aqui! O vaso sanitário convencional Izy da Deca apresenta saída de esgoto vertical e é indicado para as tubulações mais tradicionais.",
                "Dimensões:<br> Altura: 38,00 cm", "Largura: 37,50 cm", "Modelo: 47,50 cm",
            ],
            [
                "Para quem busca qualidade; a bacia Aspen é uma excelente opção para seu banheiro.",
                "Dimensões:<br> Altura: 38,00cm", "Largura: 37,50cm", "Comprimento: 64,00cm",
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