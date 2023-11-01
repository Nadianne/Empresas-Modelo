import * as global from './global.js';
global.Cadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([9]);
    global.setImgAllPath(["../imagens-moveis/cadeira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cadeira Carraro Neo ',
        'Cadeiras Sala Jantar',
        'Conjunto de Cadeiras',
        'Cadeiras de Jantar',
        'Cadeira Miami Azul ',
        'Cadeira Sem Braço',
        'Cadeira Aviv Fratini',
        'Cadeira Janaina - Nude',
        'Cadeira Poltrona',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cadeira Carraro Neo <span>Grafite E Preto</span>",
            "Cadeiras Sala Jantar <span>Cromado/Courano Preto</span>",
            "Conjunto de Cadeiras de Aço <span>Carraro</span>",
            "4 Cadeiras de Jantar Palha <span>Madeira Maciça Mel Bege</span>",
            "Cadeira Miami Azul <span>Petróleo</span>",
            "Cadeira Sem Braço <span>Sofia-rivatti - Incolor</span>",
            "Cadeira Aviv Estrutura <span>Polipropileno Fratini</span>",        
            "Cadeira Janaina - Nude <span>Janaina</span>",
            "Cadeira Poltrona Clarice Sidera <span>Com Apoio De Braço </span>"
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
                "Cadeira Miami Azul Petróleo - trazendo um modelo moderno e prático para sua sala de jantar e seu ambiente de conforto, o modelo Miami é composto pelo seu encosto e assento em polipropileno e base em aço pintado.",
                "Dimensões:<br> Altura: 90 cm", "Largura: 43 cm", "Profundidade: 40 cm",
            ],
            [
                "Cadeira sem braço pc sofia-rivatti se você procura por um móvel prático, bonito e resistente, aí vai uma dica: cadeira sofia sem braço da rivatti. A cadeira tem estrutura e acabamento em policarbonato de altíssima qualidade, que proporciona muito mais resistência. Ela suporta até 120 kg de peso máximo, o que dá mais tranquilidade ao sentar. Além disso, ela é bastante versátil e pode ser usada tanto na sala de jantar quanto na área externa, o que dá mais praticidade no dia a dia. Para sua maior comodidade, a cadeira já vem montada. ",
                "Dimensões:<br> Altura: 97 cm", "Largura: 36 cm", "Profundidade: 49 cm",
            ],
            [
                "Imponente e detalhista, a cadeira Aviv é ideal para ser usada em sua residência ou ambientes corporativos. Por ser uma cadeira monobloco, ela é empilhável, resistente e de fácil limpeza e manutenção. Sua variedade de cores permite que seja combinada com vários ambientes.",
                "Dimensões:<br> Altura: 83 cm", "Largura: 51 cm", "Profundidade: 56 cm",
            ],
            [
                "Sendo a maior importadora de móveis de design do Brasil, a Rivatti é especializada na comercialização de produtos de alta decoração, oferecendo assim mais de 500 itens e 1850 variações de cores e tecidos de produtos de qualidade e estilos diferenciados.",
                "Dimensões:<br> Altura: 82 cm", "Largura: 44 cm", "Profundidade do assento: 42 cm",
            ],
            [
                "A Cadeira Clarice também conhecida como Sidera, Nest ou Web, apresenta perfeita harmonia na sua estrutura de desenho vazado, sendo um modelo descontraído e elegante, com sua base em madeira e assento ergonômico em polipropileno, conquistou o gosto decoradores e arquitetos.",
                "Dimensões:<br> Altura: 80 cm", "Largura: 62 cm", "Profundidade: 57 cm",
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