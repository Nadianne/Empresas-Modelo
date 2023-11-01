import * as global from './global.js';
global.Cadeira.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Cadeira"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([3]);
    global.setImgAllPath(["../imagens-moveis/Cadeira_sala/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Cadeira Charles Eames',
        'Cadeira Leda Nude',
        'Cadeira West Fendi'

        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Cadeira Charles Eames <span>Eifel Branco</span>",
            "Cadeira Leda - Assento De Veludo <span>Nude</span>",
            "Cadeira West Fendi"

        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "Boas conversas e boa companhia trazem bons momentos, e para conseguir tudo isso buscamos nos sentir acolhidos e relaxados. Conforto, durabilidade e estética são alguns dos pilares nos quais baseamos as compras das nossas cadeiras de jantar. Ter uma cadeira Decoreshop Charles Eames DKR Eiffel fará desses lugares, espaços únicos nas nossas casas.",
                "Dimensões:<br> Altura: 82 cm", "Largura: 45 cm", "Profundidade: 46 cm",
            ],
            [
                "Cadeira modelo leda com material do assento de tecido aveludado ",
                "Dimensões:<br> Altura: 80 cm", "Largura: 50 cm", "Profundidade: 50 cm",
            ],
            [
                "Seus traços modernos com um design funcional oferecem para os espaços mais descontração leveza e conforto no seu dia a dia.",
                "Dimensões:<br> Altura: 84 cm", "Largura: 57 cm", "Profundidade: 46 cm",
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