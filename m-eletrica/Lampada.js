import * as global from './global.js';
global.Lampada.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Lâmpada"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([4]);
    global.setImgAllPath(["../imagens-madereira/Lampada/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Lâmpada Bulbo Led 9w ',
        'Lâmpada LED 12W',
        'Lâmpada Led 100W ',
        'Lâmpada Led 40W ',
        'Cabeceira Casal 4 Gavetas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Lâmpada Demi Led <span> 9w bivolt </span>",
            "Lâmpada Demi LED  <span>12W</span>",
            "Lâmpada Led<span> 6500k 100W</span>",
            "'Lâmpada Led Bulbo E27 <span> 40W 6500K</span>",
            "Cabeceira Casal <span>4 Gavetas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Ideal para iluminação geral e decorativa em substituição às lâmpadas incandescentes, econômicas.",
                "Potência: 9W", "Frequência: 50/60Hz ", "Tensão: Bivolt",
            ],
            [
                "Ideal para iluminação geral e decorativa em substituição às lâmpadas incandescentes, econômicas.",
                "Potência: 12W", "Frequência: 50/60Hz ", "Tensão: Bivolt",
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