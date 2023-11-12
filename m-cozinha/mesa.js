import * as global from './global.js';
global.Mesa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Mesa"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([7]);
    global.setImgAllPath(["../imagens-moveis/Mesa/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Mesa Carraro',
        'Mesa de Jantar ',
        'Mesa Redonda Copa ',
        'Conjunto de Cozinha ',
        'Conjunto de Jantar',
        'Conjunto Sala de Jantar ',
        'Conjunto Sala de Jantar ',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Mesa Carraro <span>Lion</span>",
            "Mesa de Jantar <span>Alvin </span>",
            "Mesa Redonda Copa <span>Carraro</span>",
            "Conjunto de Cozinha <span>Mesa Tampo em Granito Itália 6 Cadeiras</span>",
            "Conjunto de Jantar <span> 4 Cadeiras Marialice</span>",
            "Conjunto Sala de Jantar  <span>Mesa Paloma 180cm e 6 Cadeiras </span>",     
            "Conjunto Sala de Jantar  <span>4 cadeiras Rubi cadeiras Eldora</span>",
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
                "Conjunto de Cozinha Mesa Tampo em Granito Itália 6 Cadeiras Aço Coelho Preto Matelado/Paraopeba",
                "Dimensões:<br> Altura: 75,00cm", "Largura: 94,5cm", "Profundidade:  40,0cm",
            ],
            [
                "Com estilo Moderno, a Sala de Jantar Marialice reúne conforto, requinte e qualidade. As cadeiras são de formato anatômico proporcionando aconchego nas refeições deixando o ambiente exuberante , tampo em formato arredondado dando mais segurança em caso de crianças em casa.",
                "Medida da Mesa:<br> Altura: 80,00cm", "Largura: 135cm", "Profundidade: 90,0cm <br>Medida da Cadeira: <br>  Altura: 88,00cm <br> Profundidade: 54,0cm <br> Largura: 46cm",
            ],
            [
                "A Mesa Paloma é um exemplo desse investimento, sua base é em MDF/Metalon com parafusos e Pintura U.V. As cadeiras Juliana são uma ótima opção pois a sua estrutura é em Madeira com Pintura Verniz, o assento e encosto possui espumas de alta densidade proporcionando maior conforto.",
                "Medida da Mesa:<br> Altura: 77,40cm", "Largura: 90cm", "Comprimento: 180,0cm <br>Medida da Cadeira: <br>  Altura: 102,00cm  <br> Largura: 46cm",
            ],
            [
                "Procurando destacar o ambiente da sua casa, com produtos de qualidade ? Temos a sala de jantar perfeita pra isso . Conjunto Sala de Jantar Mesa com Tampo de Vidro Rubi com 4 Cadeiras Eldora LJ Móveis Castanho premio / off white",
                "Medida da Mesa:<br> Altura: 8,,00cm", "Largura: 110,00cm", "Comprimento: 110,00cm <br>Medida da Cadeira: <br>  Altura: 96,00cm  <br> Largura: 45cm",
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