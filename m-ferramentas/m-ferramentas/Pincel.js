import * as global from './global.js';
global.Pincel.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Pincel"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([9]);
    global.setImgAllPath(["../imagens-madereira/Pincel/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Trincha de Cerdas ATLAS 315/1 n:1/2',
        'Pincel Trincha Atlas 395/6 n:2.1/2 ',
        'Trincha Para Pintura 250/6 n:2.1/2 ',
        'Tomada dupla 2P+T 10A/250V',
        'Pincel atlas trincha 250/4 n:1.1/2 ',
        'Pincel atlas trincha pluma 315/2 n:3/4 ',
        'Pincel Trincha Pluma Tek 315/3 n:1 ',
        'Pincel atlas trincha pluma tek 315/7 n:3 ', 
        'Pincel atlas trincha seda 250/1 n:1/2',
        'Pincel atlas trincha pluma tek 315/6 n:2.1/2',
        'Pincel atlas trincha 395/7 n:3 ',
    ],

    ]);
    
    global.setH1PopUpAll([
        [
            "Trincha de Cerdas Sintéticas <span> ATLAS 315/1 n:1/2</span>",
            "Pincel Trincha Atlas<span>  395/6 n:2.1/2 </span>",
            "Pincel atlas trincha seda<span> 250/6 n:2.1/2</span>",
            "Pincel atlas trincha<span> 250/4 n:1.1/2</span>",
            "Pincel Trincha Pluma Tek <span>315/3 n:1</span>",
            "Pincel atlas trincha pluma tek <span>  315/7 n:3</span>",
            "Pincel atlas trincha seda <span> 250/1 n:1/2</span>",
            "Pincel atlas trincha pluma tek <span>315/6 n:2.1/2</span>",            
            "Pincel atlas trincha pluma tek <span>395/7 n:3</span>",

        ],

    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Trincha sintética para melhor acabamento, maior durabilidade e recortes mais precisos. ",
                "Altura: 5 cm", " Largura: 1,5 cm", "Comprimento: 17,5 cm <br> 315/1 n:1/2",
            ],
            [
                "Trincha com cerdas gris selecionadas. Excelente relação preço / qualidade. Indicada para látex e acrílica.",
                "Altura: 5 cm", " Largura: 1,5 cm", "Comprimento: 17,5 cm <br> 315/1 n:1/2",
            ],
            [
                "Cerdas 100% naturais de pelo de pônei, extra-macias. Indicado para verniz e stain com fino acabamento.",
                "Altura: 9 cm", " Largura:  50 mm", "Comprimento:  50 mm <br>  250/5 n:2",
            ],
            [
                "A Trincha Seda 250 3/4 da Atlas possui cerdas 100% naturais de pelo de pônei, extra-macias.Indicado para verniz com fino acabamento.",
                "Altura: 6 cm", " Largura: 1,5 cm", "Comprimento: 165 mm <br> 250/4 n:1.1/2",
            ],
            [
                "<br><br>Pincel Trincha Pluma Tek. Trincha com cerdas gris selecionadas. Excelente relação preço / qualidade.  ",
                "Altura: 5 cm", " Largura: 1,5 cm", "Comprimento: 17,5 cm <br>315/3 n:1",
            ],
            [
                "O Pincel, Trincha pequeno de cerdas sintéticas possuí 3 tecnologia Plumatek de fios formato estrelado. Possui Design com encaixe perfeito na mão auxiliando na Hora da Pintura. Melhor acabamento, maior durabilidade e recortes mais precisos para todo o tipo de tinta.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br> 315/7 n:3",
            ],
            [
                "A Trincha de Seda 250 1/2 da Atlas possui Cerdas 100% naturais de pelo de pônei, extra-macias.Indicado para verniz e stain com fino acabamento.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br> 250/1 n:1/2",
            ],
            [
                "A Trincha 2.1/2 da Atlas possui uma maior durabilidade com melhor acabamento, com a tecnologia Plumatek deixando fios com formato estrelado.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br> 315/6 n:2.1/2",
            ],
            [
                "Trincha com cerdas gris selecionadas. Excelente relação preço / qualidade.",
                "Altura:11 MM", " Largura: 78 MM", "Comprimento: 238 MM <br>395/7 n:3",
            ],
        ],
   
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
   // global.setSubcategorias(["Casal", "Solteiro"]);
    if (this.checked) {
        global.setChecked(global.labelPincel);
    }
});

function funcStart ()
{
    global.Pincel.dispatchEvent(new Event("change"));
}
funcStart();