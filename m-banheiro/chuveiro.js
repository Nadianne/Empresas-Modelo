import * as global from './global.js';
global.Chuveiro.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Chuveiro"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-madereira/chuveiro/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Chuveiro Elétrico 220V Lorenzetti',
        'Chuveiro Elétrico Ducha Fame',
        'Ducha Top Jet 127v Lorenzetti ',
        'Ducha Bello Banho 127v Lorenzetti ',
        'Cabeceira Casal 4 Gavetas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Chuveiro Elétrico 220V Multitemperatura<span> 6400W Branco Top  </span>",
            "Chuveiro Elétrico Ducha Fame <span>Preto C/ Cano 4t 5400w</span>",
            "Ducha Top Jet<span>127v 4 Temperaturas Lorenzetti</span>",
            "'Lâmpada Led Bulbo E27 <span> 40W 6500K</span>",
            "Cabeceira Casal <span>4 Gavetas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Chuveiro Elétrico Multitemperatura 220V 6400W Branco Top Jet Lorenzetti é a solução para você que preza por um banho quentinho e com muito conforto.",
                "Marca: Lorenzetti", "Material: PVC", "Linha: Multitemperatura",
            ],
            [
                "Chuveiro Elétrico Ducha Faminho Preto 4t 6800w 220v Com Cano de 30CM.",
                "Voltagem: 220V - MN", "Tipo de resistência: Refil ", "Caixa: 2.50m",
            ],
            [
                "Máximo conforto e o prazer de um banho das famosas e conhecidas duchas de parede, conta com um grande espalhador e maior área de banho para um jato incrível. ",
                "Marca: Lorenzetti", "Potência: 5500W", "Tensão: 127V",
            ],
            [
                "O chuveiro Loren Bello agora vem com a nova resistência Loren Ultra. A tecnologia Loren Ultra revoluciona o conceito de durabilidade e desempenho em comparação as resistências comuns.",
                "Marca: Lorenzetti", "Potência: 5500W", "Tensão: 110V",
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