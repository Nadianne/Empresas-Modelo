import * as global from './global.js';
global.Multiuso.addEventListener("change", function () {
    global.produtosIndicados.innerHTML = '';
    global.setSubCategoriasTitulo(["Multiuso"])
    global.setSubcategoriaIndex(0);
    global.setTamProdutosIndicados([5]);
    global.setImgAllPath(["../imagens-moveis/multiuso/"]);
    global.produtosIndicados.appendChild(global.createH2(global.subCategoriasTitulo[global.subcategoriaIndex]));

    global.setDefinicaoDoProduto([[
        'Armário Utilitário Multiuso',
        'Armário Multiuso Lages Carraro',
        'Armário Utilitário Multiuso',
        'Armário Multiuso Com Chave',
        'Armário Multiuso Ariel',
        
    ],
   
    ]);
    
    global.setH1PopUpAll([
        [
            "Armário Utilitário <span> Multiuso Carraro</span>",
            "Armário Multiuso <span>Lages</span>",
            "Armário Utilitário<span>Multiuso</span>",
            "Armário Multiuso <span>Com chave</span>",
            "Armário Multiuso Ariel <span>2 Portas</span>",
        ],
    
    ]);
    global.setParagrafoPopUpAllText([
        [
            [
                "O Armário Utilitário Multiuso Carraro é a peça ideal para ser utilizada em diferentes cômodos da casa, ajudando a manter todos os objetos em ordem.",
                "Dimensões:<br> Altura: 169cm ", "Largura: 56cm", "Comprimento: 37,8cm",
            ],
            [
                "O multiuso Lages é o que você procurava por possuir um padrão moderno, contendo duas portas com dois puxadores em abs e cinco prateleiras.",
                "Dimensões:<br> Altura: 186,2cm", "Largura: 64cm", "Profundidade: 36,7cm",
            ],
            [
                "O Armário Utilitário Multiuso Carraro é a peça ideal para ser utilizada em qualquer cômodo da casa, ajudando a manter todos os objetos em ordem e assim facilitando as tarefas do dia a dia.",
                "Dimensões:<br> Altura: 174cm", "Largura: 56m", "Profundidade: 38m",
            ],
            [
                "O Armário Multiuso 2 Portas com Chave Max Plus da Zanzini é ideal para quem procura um móvel que se destaca no ambiente, possuindo a função multiuso, ou seja, pode ser considerado um produto para cozinha, escritório, área de serviço e afins.",
                "Dimensões:<br> Altura:  187cm", "Largura: 60,9cm", "Profundidade: 37,3cm",
            ],
            [
                "O Armário Multiuso Ariel Móveis Sul, 2 Portas é perfeito para quem busca otimização de espaço e beleza em um único item, ele possui 2 portas com puxadores em plástico, rodapés e 4 prateleiras internas.",
                "Dimensões:<br> Altura: 180,00cm", "Largura: 56,60cm", "Profundidade: 33,00cm",
            ],
           
        ]
    ]);
    global.setPath();
    global.setProdutosIndicados(global.tamProdutosIndicados[global.subcategoriaIndex]);
    global.setSubcategorias([]);
    if (this.checked) {
        global.setChecked(global.labelGuardaRoupa);
    }
});