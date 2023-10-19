import * as global from './global.js';
global.Gabinete.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Gabinete e Lavatório"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([6]);
    global.setImgAllPath(["../imagens-madereira/gabinete/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Gabinete Mini Chopin ',
        'Kit Sicília Suspenso ',
        'Lavatório Ravena ',
        'Gabinete mini Chopin',
        'Kit veneza suspenso',
        'Kit Sicília 1 gaveta',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Gabinete Mini Chopin  <span> Vermelho 41,5x60cm</span>",
            "Kit Sicília <span> Suspenso Castaine </span>",
            "Lavatório Ravena <span> PIzy Caramelo Deca</span>",
            "Gabinete mini Chopin <span> com Cuba 26,5x40x60cm Preto</span>",
            "Kit veneza suspenso <span> 3 nicho + espelho</span>",
            "Kit Sicília 1 gaveta <span> 67,5cm + cuba + espelho</span>",
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
                "Uma linha com qualidade e tecnologia Deca que garante a seu banheiro funcionalidade.",
                "Dimensões:<br> Altura: 180 mm", "Largura: 180 mm", "Comprimento: 180mm",
            ],
            [
                "Procurando a melhor opção para seu banheiro? O gabinete Mini Chopin da Astra traz um acabamento diferenciado para seu projeto! É um gabinete resistente e seguro para você e toda a família, além de ser super sofisticado!",
                "Dimensões:<br> Altura: 26,50cm", "Largura: 60,00cm", "Profundidade:  40,00cm",
            ],
            [
                "Possui uma composição integrada entre os padrões texturizados e madeirados, puxadores retos no padrão prata fosco mais a prateleira de vidro do espelheiro que completam esse conjunto, tornando-o sofisticado e aconchegante, sem deixar de lado a praticidade e facilidade de montagem, que é característica dos produtos A. J. Rorato.",
                "Dimensões:<br> Altura: 44.5cm", "Largura: 29.2cm", "Profundidade: 39.5cm",
            ],
            [
                "Armário banheiro da A.J Rorato é um produto completo com beleza e qualidade.Ele acompanha um armário, uma espelheira e uma pia de louça, um kit que carrega praticidade, comodidade, elegância e acima de tudo economia.Modelo compacto e imponente, ideal para ambientes pequenos e charmosos, aliando funcionalidade e beleza.",
                "Dimensões:<br> Altura: 48cm", "Largura: 29.2cm", "Comprimento: 67,5cm",
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