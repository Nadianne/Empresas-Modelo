import * as global from './global.js';
global.Mesa.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Mesa"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([2]);
    global.setImgAllPath(["../imagens-moveis/Mesa_sala/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Mesa de Canto Auxiliar',
        'Mesa de Centro Decorativa',
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Mesa de Canto Auxiliar <span>260cm Freijo Dalla Costa</span>",
            "Mesa de Centro Decorativa Orgânica <span>Sabrina</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "A Mesa Lateral é confeccionada em 100% MDF e pintura UV na cor Freijó. Dona de um visual diferenciado e moderno, ela é o detalhe que faltava na decoração do seu espaço, une materiais resistentes e de qualidade o que a torna ainda mais especial. Seu ponto de apoio em qualquer ambiente e a qualquer momento.",
                "Dimensões:<br> Altura: 70 cm", "Largura: 60 cm", "Profundidade: 40 cm",
            ],
            [
                "Esta Linda Mesa de Centro da Dalla Costa 100% MDF é perfeita para sua sala de estar e qualquer outro cômodo da casa, seu design refinado, foi pensado de forma Orgânica, de maneira com que seu visual seja mais confortável para quem frequenta o ambiente em que ela se dispõe, lembrando formas da Natureza de grande suavidade.",
                "Dimensões:<br>Medida mesa 1: 0,65 x 0,30 x 0,50 (LxAxP)", "Dimensões:<br>Medida mesa 2: 0,65 x 0,35 x 0,50 (LxAxP)", "Profundidade: 43,00cm",
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