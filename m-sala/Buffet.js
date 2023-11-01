import * as global from './global.js';
global.Buffet.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Buffet"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-moveis/Buffet/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Aparador Sala De Jantar',

        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Aparador Sala De Jantar <span>Cimol Off White/Nature </span>",

        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Buffet Eva, sofistique o ambiente com o Buffet da Cimol, um excelente móvel para guardar suas louças, utensílios e objetos com mais praticidade e ainda modernizar o seu lar, com um móvel que reúne requinte e estilo.",
                "Dimensões:<br> Altura: 79 cm", "Largura: 153 cm", "Profundidade: 76,36 cm",
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