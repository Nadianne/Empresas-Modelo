import * as global from './global.js';
global.Lateral.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Lateral"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-industria/Assoalhado/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Assoalho de compensado lateral 12mm - 2,44 x 1,00 ',
        'Assoalho de compensado lateral 12mm - 2,97 x 0,80',
        'Assoalho de compensado lateral 12mm - 2,97 x 1,00 ', 
        'Assoalho de compensado lateral 14mm - 2,25 x 0,80',
        'Assoalho de compensado lateral 14mm - 2,25 x 1,00',
        'Assoalho de compensado lateral 14mm - 2,44 x 0,80',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Assoalho de compensado lateral <span>12mm - 2,44 x 1,00 </span>",
            "Assoalho de compensado lateral <span>12mm - 2,97 x 0,80 </span>",
            "Assoalho de compensado lateral <span>12mm - 2,97 x 1,00 </span>",
            "Assoalho de compensado lateral <span>14mm - 2,25 x 0,80 </span>",
            "Assoalho de compensado lateral <span>14mm - 2,25 x 1,00 </span>",
            "Assoalho de compensado lateral <span>14mm - 2,44 x 0,80 </span>",
               

        ],

    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O compensado naval caracteriza-se por ser uma chapa de alta resistência, o que se dá por meio do entrelaçamento das lâminas em maior quantidade de camadas, podendo ser utilizado em áreas úmidas e onde se faz necessária uma grande durabilidade do material.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","","",
            ],
            [
                "O compensado naval caracteriza-se por ser uma chapa de alta resistência, o que se dá por meio do entrelaçamento das lâminas em maior quantidade de camadas, podendo ser utilizado em áreas úmidas e onde se faz necessária uma grande durabilidade do material.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","","",
            ],
            [
                "O compensado naval caracteriza-se por ser uma chapa de alta resistência, o que se dá por meio do entrelaçamento das lâminas em maior quantidade de camadas, podendo ser utilizado em áreas úmidas e onde se faz necessária uma grande durabilidade do material.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","","",
            ],
            [
                "O compensado naval caracteriza-se por ser uma chapa de alta resistência, o que se dá por meio do entrelaçamento das lâminas em maior quantidade de camadas, podendo ser utilizado em áreas úmidas e onde se faz necessária uma grande durabilidade do material.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","","",
            ],
            [
                "O compensado naval caracteriza-se por ser uma chapa de alta resistência, o que se dá por meio do entrelaçamento das lâminas em maior quantidade de camadas, podendo ser utilizado em áreas úmidas e onde se faz necessária uma grande durabilidade do material.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","","",
            ],
            [
                "O compensado naval caracteriza-se por ser uma chapa de alta resistência, o que se dá por meio do entrelaçamento das lâminas em maior quantidade de camadas, podendo ser utilizado em áreas úmidas e onde se faz necessária uma grande durabilidade do material.",
                "Desempenho: Alta resistência à abrasão superficial e grande número de reutilizações.","","",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelAssoalhado);
    }
});