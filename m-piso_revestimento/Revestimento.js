import * as global from './global.js';
global.Revestimento.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Revestimento"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-madereira/revestimento/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Revestimento de Parede  ',
        'Chuveiro Elétrico Ducha Fame',
        'Lâmpada Led 100W ',
        'Lâmpada Led 40W ',
        'Cabeceira Casal 4 Gavetas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Revestimento de Parede <span>  Triunfo Bold-</span>",
            "Chuveiro Elétrico Ducha Fame <span>Preto C/ Cano 4t 5400w</span>",
            "Lâmpada Led<span> 6500k 100W</span>",
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
                "Chuveiro Elétrico Ducha Faminho Preto 4t 6800w 220v C/ Cano de 30CM.",
                "Voltagem: 220V - MN", "Tipo de resistência: Refil ", "Tensão: 220V",
            ],
            [
                "Ideal para iluminação geral e decorativa em substituição às lâmpadas incandescentes, econômicas.",
                "Potência: 100W", "Frequência: 50/60Hz ", "Tensão: Bivolt",
            ],
            [
                "Ideal para iluminação geral e decorativa em substituição às lâmpadas incandescentes, econômicas.",
                "Potência: 40W", "Frequência: 50/60Hz ", "Tensão: Bivolt",
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