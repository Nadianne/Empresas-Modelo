import * as global from './global.js';
global.Rack.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Rack"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-moveis/rack/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Rack Cristal',
        'Rack Dili ',
        'Rack EDN ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Rack Cristal <span> Permobili - Savana/Off White</span>",
            "Rack Dili <span>Nobre/off White</span>",
            "Rack EDN <span>Branco</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
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
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelSofa);
    }
});