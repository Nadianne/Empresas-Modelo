import * as global from './global.js';
global.plaina_lixadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Plaina e lixadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-industria/Plaina/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Plaina Elétrica Profissional 650w ',
        'Lixadeira Orbital 1/4 Lixa 200W 127V',
        'Lixadeira Roto Orbital 200W ',
        'Plaina Elétrica Black e Decker',
        
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Plaina Elétrica Profissional <span>650w Black Decker</span>",
            "Lixadeira Orbital 1/4 <span>Lixa 200W 127V Black Decker</span>",
            "Lixadeira Orbital 1/4 <span>Lixa 200W 127V Black Decker</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Empunhadura frontal giratória regula a espessura do corte e proporciona um melhor controle da ferramenta. Aletas nas laterais para refrigeração do motor. 10 posições pré-determinadas: excelente precisão para ajuste de profundidade. Melhor desempenho remove mais material em uma simples passada",
                "Potência: 650 W", "Velocidade: 16.500 rpm", "Profundidade do corte por passada: 1 - 2,0 mm",
            ],
            [
                "A Lixadeira Orbital 1/4 Lixa 200W 127V Black Decker é o produto ideal para seu projeto. Serve para os processos de lixar e dar acabamento. Ótima ferramenta para lixar superfícies de madeira, paredes, entre outras superfícies planas para acabamentos finos.",
                "Voltagem: 127V", "Altura:  10cm", "Largura: 11cm <br> Comprimento: 14cm",
            ],
            [
                "Proporciona versatilidade em muitas aplicações em madeira e metal, pois é uma ferramenta superflexível e que não causa cansaço, mesmo em trabalhos mais duradouros e realizados acima do nível da cabeça. Ideal para retirar a pintura, manchas de verniz na madeira, metal e plástico, prepara a superfície para projetos de acabamento, desbasta e da forma a madeira e a outros materiais.",
                "Voltagem: 220 Volts", "Potência: 180 W", "Velocidade: 12.000 o.p.m.",
            ],
           
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelserra);
    }
});