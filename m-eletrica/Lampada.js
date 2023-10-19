import * as global from './global.js';
global.Lampada.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Lâmpada"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([6]);
    global.setImgAllPath(["../imagens-madereira/Lampada/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Lâmpada Bulbo Led 9w ',
        'Lâmpada LED 12W',
        'Lâmpada Led 100W ',
        'Lâmpada Led 40W ',
        'Lâmpada Led 70W',
        'Lâmpada Led 15W',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Lâmpada Demi Led <span> 9w bivolt </span>",
            "Lâmpada Demi LED  <span>12W</span>",
            "Lâmpada Led<span> 6500k 100W</span>",
            "Lâmpada Led Bulbo E27 <span> 40W 6500K</span>",
            "Lâmpada Led Bulbo <span> 70W 100-240V E27</span>",
            "Lâmpada LED Yt Bulbo 15W E27 <span> 6500K CLA60 Demi</span>",
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
                "As bulbos t led de alta potência são ideais para galpões, oficinas e outros grandes ambientes, tem ótimo fluxo luminoso e dissipadores em alumínio, que farão com que tenham uma boa durabilidade.",
                "Potência - 70w <br> Fluxo luminoso - 6300lm", "Eficiência luminosa - 90lm/w <br> Tensão elétrica - 100-240v", "Frequência - 50/60hz",
            ],
            [
                "As bulbos t led de alta potência são ideais para galpões, oficinas e outros grandes ambientes, tem ótimo fluxo luminoso e dissipadores em alumínio, que farão com que tenham uma boa durabilidade.",
                "Potência - 15w <br> Fluxo luminoso - 1350lm", "Eficiência luminosa - 90lm/w <br> Tensão elétrica - 100-240v", "Frequência - 50/60hz",
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