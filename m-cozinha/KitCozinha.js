import * as global from './global.js';
global.KitCozinha.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Kit Cozinha"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-moveis/kit/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Armário De Cozinha 8 Portas  ',
        'Cozinha Compacta 6 Portas',
        'Cozinha Kits Paraná 12 Portas com 4 Prateleiras',
        'Cozinha intense compacta 10 portas',
        'Cozinha Modulada 05 Peças Freijó Off White',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Armário De Cozinha 8 Portas <span>2 Gavetas 1 Nicho </span>",
            "Cozinha Compacta 6 Portas <span>Sabrina</span>",
            "Cozinha Kits Paraná <span>Versalhes</span>",
            "Cozinha intense compacta <span> 10 portas</span>",
            "Cozinha Modulada 05 Peças <span> 05 Peças 09 Portas 02 Gavetas com Bancada </span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Armário de cozinha 8 portas 2 gavetas 1 nicho para forno bruna angelin/off white. Kit cozinha bruna possui nicho superior, adega arramada para dar um toque de beleza e praticidade para acomodar seus vinhos. ",
                "Dimensões:<br> Altura: 200,00cm", "Largura: 180,00cm", "Peso do Produto: 76,36 Kg",
            ],
            [
                "Para que você mantenha seu produto sempre em ótimo estado, recomendamos que use apenas um pano seco ou levemente umedecido, sem o uso de quaisquer produtos abrasivos.",
                "Dimensões:<br> Altura: 200,00cm", "Largura: 146,50cm", "Profundidade: 43,00cm",
            ],
            [
                "A Cozinha e Balcao Versalhes trazem a praticidade e funcionalidade que voce precisa, suas portas superiores se tornam o diferencial do produto pelo vidro espelhado, trazendo o destaque para a cozinha.",
                "Dimensões:<br> Altura: 193,00cm", "Largura: 250,7cm", "Profundidade: 42,3cm",
            ],
            [
                "O Armário de Cozinha Intense, amplo e versátil veio para garantir praticidade em seu dia a dia! Possui 10 portas e 2 gavetas espaçosas com corrediças telescópicas que oferecem um deslizar suave das gavetas.",
                "Dimensões:<br> Altura: 204,5cm", "Largura: 222,2cm", "Profundidade: 46,8cm",
            ],
            [
                "Acabamento em Pintura uv. 09 Portas com dobradiças de amortecimento sendo 02 com pistão à gás e 02 com detalhes frisados. 02 Gavetas com corrediças telescópicas. Prateleiras internas e nichos com amplo espaço. 01 Nicho para eletrodoméstico. Pés e puxadores de plástico. Bancada Gourmet",
                "Dimensões:<br> Altura: 224 cm", "Largura: 270 cm", "Profundidade: 47 cm",
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