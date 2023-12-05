import * as global from './global.js';
global.Rack.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Rack"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([8]);
    global.setImgAllPath(["../imagens-moveis/rack/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Rack Cristal',
        'Rack Dili ',
        'Rack EDN ',
        'Rack Valencia',
        'Rack Paládio',
        'Rack Milão',
        'Rack Búzios',
        'Rack Milão',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Rack Cristal <span> Permobili - Savana/Off White</span>",
            "Rack Dili <span>Nobre/off White</span>",
            "Rack EDN <span>Branco</span>",
            "Rack Valencia <span>Off White Nature</span>",
            "Rack Paládio <span>Off White/Cinamomo</span>",
            "Rack Milão <span>Nogal Off White</span>",
            "Rack Búzios <span> Naturalle/Off White</span>",
            "Rack Milão <span>Nogal Off White</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Rack Cristal é moderno e sofisticado. Possui 02 portas de abrir, rodízios giratórios embutidos na base e tampo robusto de 25mm.",
                "Dimensões:<br> Altura: 61cm", "Largura: 157cm", "Profundidade: 42,5cm",
       
            ],
            [
                "Rack Bancada Leve 160cm TV 60' Carvalho Europeu Creme Tana DecorO Rack Bancada Leve é uma ótima opção para agregar beleza ao seu lar.",
                "Dimensões:<br> Altura: 68cm", "Largura: 160cm", "Profundidade: 38cm",
            ],
            [
                "Feito especialmente para aqueles que querem deixar um estilo belo e único em seu ambiente.",
                "Dimensões:<br> Altura: 71cm", "Largura: 90cm", "Profundidade: 35cm",
            ],
            [
                "Cômoda Seul possui 5 gavetas com corrediças metálicas sendo ideal para acondicionar e organizar objetos, indicado para compor ambientes em seu quarto ou closet.",
                "Dimensões:<br> Altura: 67,5cm", "Largura: 91,5cm", "Profundidade:  37,7cm",
            ],
            [
                "Rack Valencia Off White Nature 2076256 Bechara Com uma linha de produtos inovadores, A Móveis Bechara trás produções com alto nível de modernidade. O Rack Valencia é de design moderno e retrô, é ideal para quem busca levar personalidade a sua sala de estar, com seus pés de madeira e sua porta em mdf com design de curvas com frisos que redefine o conceito de estilo e funcionalidade. Um móvel que com certeza irá renovar seu ambiente.",
                "Dimensões:<br> Altura: 62,5cm", "Largura: 120,0cm", "Profundidade:  38,00cm",
            ],
            [
                "Rack Paládio 1.4 com Painel Kenzo possuem design contemporâneo, deixa seu espaço perfeito e organizado. Com muito estilo e elegância, sua sala muito mais compacta e moderna. ",
                "Dimensões:<br> Altura: 90,00cm", "Largura: 136,0cm", "Profundidade:  18,00cm",
            ],
            [
                "Um Home Robusto Tem Como Diferencial Sua Estrutura, A Qual É Elaborado Em Mdp Com Espessura De 15mm, Tampo Para Tv E Base Emoldurado Com Espessura Total De 40mm. Puxadores Em Aluminio Anodizado. Possui Rodízios Em Sua Base Que Facilitam O Deslocamento Do Móvel Caso Necessário, Quatro Dos Rodízios Possuem Calota Cromada. Para Tv's De Até 47 Polegadas.",
                "Dimensões:<br> Altura: 175,00cm", "Largura: 160,0cm", "Profundidade:  38,50cm",
            ],
            [
                " Bechara Móveis é o móvel que você procura para sua casa, Robusto, ele comporta Tvs de até 60 polegadas. Possui Prateleira Superior e Base em mdp de 25mm, prateleiras de vidro com suportes metálicos e duas gavetas com corrediças metálicas. Em sua base possui 6 rodízios sendo os frontais com acabamento cromado e trava, proporcionando maior mobilidade para o produto.",
                "Dimensões:<br> Altura: 189,00cm", "Largura: 160,0cm", "Profundidade:  40,00cm",
            ],
            [
                "Um Home Robusto Tem Como Diferencial Sua Estrutura, A Qual É Elaborado Em Mdp Com Espessura De 15mm, Tampo Para Tv E Base Emoldurado Com Espessura Total De 40mm. Puxadores Em Aluminio Anodizado. Possui Rodízios Em Sua Base Que Facilitam O Deslocamento Do Móvel Caso Necessário, Quatro Dos Rodízios Possuem Calota Cromada. Para Tv's De Até 47 Polegadas.",
                "Dimensões:<br> Altura: 175,00cm", "Largura: 160,0cm", "Profundidade:  38,50cm",
            ],
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelSofa);
    }
});