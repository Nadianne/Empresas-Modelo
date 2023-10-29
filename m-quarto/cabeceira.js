import * as global from './global.js';
global.Cabeceira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cabeceira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([10]);
    global.setImgAllPath(["../imagens-moveis/cabeceira/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cabeceira Casal com Mesas ',
        'Cabeceira Solteiro com Mesa',
        'Cabeceira casal Casal/Queen',
        'Cabeceira Panan Gênova',
        'Cabeceira Casal 4 Gavetas',
        'Cabeceira Extensível Móveis ',
        'Cabeceira Extensível Móveis Branca',
        'Cabeceira Ripada Regulável',
        'Cabeceira de Casal Extensível Branca',
        'Cabeceira de Casal Extensível',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cabeceira Casal com Mesas <span>de Apoio Carla </span>",
            "Cabeceira Solteiro com Mesa<span> 100% MDF</span>",
            "Cabeceira Casal/Queen<span>Extensível com Mesas</span>",
            "Cabeceira Panan<span> Gênova</span>",
            "Cabeceira Casal <span>4 Gavetas</span>",
            "Cabeceira Extensível Móveis <span>Europa Santorini</span> ",     
            "Cabeceira Extensível Móveis Branca <span>Europa Santorini</span> ",         
            "Cabeceira Ripada Regulável <span>Mila</span> ",     
            "Cabeceira Extensível de casais Branca <span>Carraro</span> ",
            "Cabeceira Extensível de casais <span>Carraro</span> ",   
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Que tal a Cabeceira Carla? Dona de um design charmoso, a Cabeceira Carla vai dar o acabamento perfeito para a parede em que sua cama fica encostada e deixar o seu dormitório ainda mais aconchegante. ",
                "Dimensões:<br> Altura: 110cm", "Largura: 228cm", "Profundidade: 43cm",
            ],
            [
                "As cabeceiras são grandes aliadas na hora de decorar pois além de serem compactas e versáteis, oferecem um conforto a mais no seu momento de descanso.",
                "Dimensões:<br> Altura: 115cm", "Largura: 128.6cm", "Profundidade: 30.5cm",
            ],
            [
                "Cabeceira que traz uma proposta clean e moderna em seu estilo, com 3 prateleiras de cada lado, possibilitando explorar as mais diversas formas de decoração.",
                "Dimensões:<br> Altura: 115cm", "Largura: 218cm", "Profundidade: 33cm",
            ],
            [
                "A Cabeceira Panan Gênova é peça que falta para você que deseja um ambiente moderno e sofisticado.",
                "Dimensões:<br> Altura: 120cm", "Largura: 277m", "Profundidade: 47,5m",
            ],
            [
                "Ajustável para colchão box 1,38 a 1,58m, possui dois aparadores de cabeceira com tampo e base de 25mm e duas gavetas em cada lado.",
                "Dimensões:<br> Altura: 108cm", "Largura: 151m", "Profundidade: 405mm",
            ],
            [
                "A cabeceira de cama embeleza o ambiente, esta é uma de suas qualidades e atributos, mas ela também tem sua utilidade prática. Ela pode ter uma finalidade estética ou ser usada para proteger a parede das manchas produzidas pela fricção. A cabeceira Santorini da Móveis Europa possui 2 mesinhas de cabeceira, 4 gavetas, sendo 2 com chave e 2 nichos para guardar seus pertences e objetos. Produzida em MDF na cor brauna, tem o grande diferencial que é ser extensível, ou seja pode ser usada nos tamanhos casal ou queen.",
                "Dimensões:<br> Altura: 127.5cm", "Largura: 248cm", "Profundidade: 37.5cm",
            ],
            [
                "A cabeceira de cama embeleza o ambiente, esta é uma de suas qualidades e atributos, mas ela também tem sua utilidade prática. Ela pode ter uma finalidade estética ou ser usada para proteger a parede das manchas produzidas pela fricção. A cabeceira Santorini da Móveis Europa possui 2 mesinhas de cabeceira, 4 gavetas, sendo 2 com chave e 2 nichos para guardar seus pertences e objetos. Produzida em MDF na cor brauna, tem o grande diferencial que é ser extensível, ou seja pode ser usada nos tamanhos casal ou queen.",
                "Dimensões:<br> Altura: 127.5cm", "Largura: 248cm", "Profundidade: 37.5cm",
            ],
            [
                "Acompanha duas mesas de cabeceira com 1 gaveta e 1 nicho em cada uma- Gavetas com corrediças telescópicas e puxadores de alumínio- Aplique ripado em MDF nas laterais- Moderna e versátil, faz a diferença na decoração do quarto- Produto em MDF/MDP",
                "Dimensões:<br> Altura: 118,3cm", "Largura: 268cm", "Profundidade: 268cm",
            ],
            [
                "A Cabeceira Carraro é a peça ideal para fazer a diferença na decoração. Com detalhe em aço cromado transmite modernidade para o quarto e consegue facilmente harmonizar com outros elementos do ambiente.",
                "Dimensões:<br> Altura:  106,5cm", "Largura: 153cm", "Profundidade: 10cm",
            ],
            [
                "A Cabeceira Carraro é a peça ideal para fazer a diferença na decoração. Com detalhe em aço cromado transmite modernidade para o quarto e consegue facilmente harmonizar com outros elementos do ambiente.",
                "Dimensões:<br> Altura:  106,5cm", "Largura: 153cm", "Profundidade: 10cm",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelGuardaRoupa);
    }
});