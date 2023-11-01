import * as global from './global.js';
global.Balcao.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Balcao"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-moveis/Balcao/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Balcao Com Tampo 120cm',
        'Balcão com Tampo Evidence',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Balcao Com Tampo 120cm <span>Nogueira Off White</span>",
            "Balcão com Tampo Evidence <span>Aço 120cm 2 Portas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Balcão com tampo Versalhes, a beleza e a funcionalidade que você precisa. Produzido em MDP de 12 e 15mm com três portas, uma gaveta, prateleira interna e tampo. Tampo que traz a praticidade de utilização de decorações, utensílios para cozinha e até mesmo eletrodomésticos. ",
                "Dimensões:<br> Altura: 85,7 cm", "Largura: 120 cm", "Profundidade:  42,3 cm ",
            ],
            [
                "O Balcão com Tampo Evidence Aço 120cm 2 Portas 7126 Branco - Bertolini, é um excelente módulo para completar sua cozinha. Apresenta um design único e exclusivo com a qualidade que só os móveis de aço podem proporcionar, pois são produzidos em aço carbono e pintura eletrostática, resistente à umidade, imune à insetos e livre de odores. Possui 2 portas, 4 gavetas, excelente espaço interno com maior profundidade, tampo em mdp laminado em alto brilho e pés com acabamento cromado e regulagem de altura. Confira e leve já!",
                "Dimensões:<br> Altura: 89,20 cm", "Largura: 120 cm", "Profundidade: 48,30 cm",
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