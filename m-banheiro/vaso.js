import * as global from './global.js';
global.Vaso.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Vaso"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([6]);
    global.setImgAllPath(["../imagens-madereira/vaso/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Vaso Sanitário ',
        'Kit deca aspem',
        'Kit Vaso Sanitário',
        'Bacia Sanitária Sottile',
        'Kit completo Bacia ',
        'Vaso Sanitário',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Vaso Sanitário <span>Convencional Marrom</span>",
            "Kit deca aspem <span> Branco </span>",
            "Bacia Sanitária com caixa <span>  Vertical Aspen Deca</span>",
            "Bacia Sanitária Sottile <span>  Kit Japi Branco</span>",
            "Kit completo Bacia <span> Seul Móveis Sul</span>",
            "Vaso Sanitário com Caixa <span> Acoplada 3/6L Saída Vertical</span>",
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
                "Deixe seu banheiro como você sempre sonhou! O kit vaso sanitário com caixa acoplada Aspen da Deca apresenta saída de esgoto vertical e botão superior de duplo acionamento da descarga. ",
                "Dimensões:<br> Altura: 74,50cm", "Largura: 37,50cm", "Profundidade: 64,00cm",
            ],
            [
                "Linhas suaves atreladas a um design imponente e robusto alcançam o patamar de luxo e sofisticação almejado, figurando entre as principais opções de louça do mercado.Bacia sanitária com caixa acoplada, anel de vedação, engate flexível, assento sanitário e parafusos.",
                "Dimensões:<br> Altura: 40.5 cm", "Largura: 645cm", "Comprimento:  38.2cm",
            ],
            [
                "Uma linha com design e tecnologia projetados para tornar o ambiente moderno. Seu formato destaca a louça; valorizando seu banheiro.",
                "Dimensões:<br> Altura: 380mm", "Largura: 385mm", "Comprimento: 520mm",
            ],
            [
                "Procurando a melhor opção para seu banheiro? O vaso sanitário com caixa acoplada Izy da Deca apresenta saída de esgoto vertical e botão superior de duplo acionamento da descarga. A Louça sanitária perfeita pra você!",
                "Dimensões:<br> Altura: 74,50cm", "Largura: 37,50cm", "Profundidade: 64,50cm",
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