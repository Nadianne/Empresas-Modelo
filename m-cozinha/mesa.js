import * as global from './global.js';
global.Mesa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Mesa"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-moveis/Mesa/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Mesa Carraro',
        'Mesa de Jantar ',
        'Mesa Redonda Copa ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Mesa Carraro <span>Lion</span>",
            "Mesa de Jantar <span>Alvin </span>",
            "Mesa Redonda Copa <span>Carraro</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Conjunto Sala de Jantar Lion Carraro é perfeito para quem prefere o tradicional aliado ao sofisticado, já que conta com estrutura, tampo e estofado em cores parecidas, facilitando a combinação com diversas decorações.",
                "Dimensões:<br> Altura: 77,5cm", "Largura: 136cm", "Profundidade: 80cm",
            ],
            [
                " A mesa de jantar Alvin é opção certa para você! Com design moderno, ela possui a estrutura em aço e o tampo em vidro, o que é super moderno, elegante.",
                "Dimensões:<br> Altura: 63,00cm", "Largura: 63,00cm", "Profundidade: 90,00cm",
            ],
            [
                "A Mesa de Jantar 4 Lugares Vercelli da Carraro, é a melhor opção para quem busca Organização, Estilo e Elegância!",
                "Dimensões:<br> Altura: 76,50cm", "Largura: 100cm", "Profundidade: 100cm",
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