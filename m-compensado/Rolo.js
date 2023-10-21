import * as global from './global.js';
global.Rolo.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Rolo"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-madereira/Rolo/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Rolo anti-gota 321/9 9cm   ',
        'Rolo anti-respingo 773/15cm ',
        'Rolo sem suporte 322/22 23cm ',
        'Cômoda 5 Gavetas',
        'Guarda-roupa Casal com Espelho 6 Portas',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Rolo anti-gota <span>321/9 9cm</span>",
            "Rolo anti-respingo <span>lã 15cm 773/15</span>",
            "Rolo sem suporte - pele de carneiro <span> 322/22 23cm</span>",
            "Cômoda 5 Gavetas<span> Seul Móveis Sul</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Rolo anti-gota produzido em poliamida tramada em tecido.superior capacidade de retenção de tinta e cobertura do filme. Reduz o respingamento.",
                "Ideal para fino acabamento em superfícies lisas. Use com tintas acrílica, látex (pva) e esmalte.", "", "",
            ],
            [
                "Rolo anti-gota produzido em poliamida tramada em tecido.superior capacidade de retenção de tinta e cobertura do filme. Reduz o respingamento.",
                "Ideal para superfícies semi rugosa.", "Use com tintas acrílica, látex (pva) e esmalte.", "",
            ],
            [
                "Rolo sem suporte microfibra de 10mm de altura",
                "Ideal para superfícies semi rugosa.", "Use com tintas acrílica, látex (pva) e esmalte.", "",
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
        global.setChecked(global.labelPincel);
    }
});