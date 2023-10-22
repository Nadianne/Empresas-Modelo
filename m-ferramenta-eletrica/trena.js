import * as global from './global.js';
global.trena.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Trena"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([1]);
    global.setImgAllPath(["../imagens-industria/trena/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Trena Laser 20 Metros Dewalt',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Trena Laser 20 Metros <span>Dewalt</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Trena a laser, alimentado e com indicador de nível de pilhas alcalinas, com capacidade de medição de distância mínima de 0,30cm e máxima de 20 metros, com tolerância ± 0,30mm/m, com medição contínua que se ajusta conforme o movimento e com funções de cálculos no visor de LCD.",
                " Trena a Laser 20 metros", "Display LCD 1.6'", "Ref: DW065E",
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