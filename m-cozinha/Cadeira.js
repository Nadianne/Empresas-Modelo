import * as global from './global.js';
global.Cadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-moveis/cadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cadeira Carraro Neo ',
        'Cadeiras Sala Jantar',
        'Conjunto de Cadeiras',
        'Cadeiras de Jantar',
        'Armário Multiuso Ariel',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cadeira Carraro Neo <span>Grafite E Preto</span>",
            "Cadeiras Sala Jantar <span>Cromado/Courano Preto</span>",
            "Conjunto de Cadeiras de Aço <span>Carraro</span>",
            "4 Cadeiras de Jantar Palha <span>Madeira Maciça Mel Bege</span>",
            "Armário Multiuso Ariel <span>2 Portas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A cadeira conta com uma estrutura rica em sofisticação com seu assento estofado e o lindo encosto em MDP com tela sintética que proporciona o aconchego que você e sua família merecem para curtir aquela deliciosa refeição juntos.",
                "Dimensões:<br> Altura: 90cm ", "Largura: 48cm", "Comprimento:  56,50cm",
            ],
            [
                "Cadeira Sala de Jantar Cromado/Preto - Carraro",
                "Dimensões:<br> Altura: 98,00cm", "Largura: 37,00cm", "Profundidade: 50,00cm",
            ],
            [
                "O Conjunto de Cadeiras Vercelli da Carraro, trará sofisticação e qualidade para sua casa! Com o acabamento em pintura Epóx, o Conjunto da Carraro apresenta estofado e encosto com Courinho + Tecido.",
                "Dimensões:<br> Altura: 57cm", "Largura: 46cm", "Profundidade: 90cm",
            ],
            [
                "A Cadeira Estofada possui formato anatômico e vai deixar seu ambiente muito mais bonito e sofisticado. Mantendo todo conforto que o móvel precisa ainda conta com enorme elegância. ",
                "Dimensões:<br> Altura: 92cm", "Altura: 92cm", "Altura: 92cm",
            ],
            [
                "O Armário Multiuso Ariel Móveis Sul, 2 Portas é perfeito para quem busca otimização de espaço e beleza em um único item, ele possui 2 portas com puxadores em plástico, rodapés e 4 prateleiras internas.",
                "Dimensões:<br> Altura: 180,00cm", "Largura: 56,60cm", "Profundidade: 33,00cm",
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