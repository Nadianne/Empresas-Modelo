import * as global from './global.js';
global.KitCozinha.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Kit Cozinha"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-moveis/kit/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Armário De Cozinha 8 Portas  ',
        'Cozinha Compacta 6 Portas',
        'Cozinha Kits Paraná 12 Portas com 4 Prateleiras',
        'Cozinha intense compacta 10 portas',
        'Cabeceira Casal 4 Gavetas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Armário De Cozinha 8 Portas <span>2 Gavetas 1 Nicho </span>",
            "Cozinha Compacta 6 Portas <span>Sabrina</span>",
            "Cozinha Kits Paraná <span>Versalhes</span>",
            "Cozinha intense compacta <span> 10 portas</span>",
            "Cabeceira Casal <span>4 Gavetas</span>",
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
                "Ajustável para colchão box 1,38 a 1,58m, possui dois aparadores de cabeceira com tampo e base de 25mm e duas gavetas em cada lado.",
                "Dimensões:<br> Altura: 108cm", "Largura: 151m", "Profundidade: 405mm",
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